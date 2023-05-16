import { DEFAULT_EXTENSIONS, transformAsync } from '@babel/core'
import type { ExtractPluginOpts } from '@lingui/babel-plugin-extract-messages'
import linguiExtractMessages from '@lingui/babel-plugin-extract-messages'
import type { ExtractorType } from '@lingui/conf'
import { ParserPlugin } from '@babel/parser'
import { SourceMapConsumer } from 'source-map'

const babelRe = new RegExp(
  `\\.(${[...DEFAULT_EXTENSIONS, '.ts', '.mts', '.cts', '.tsx']
    .map((ext) => ext.slice(1))
    .join('|')})$`,
  'i',
)

const extractor: ExtractorType = {
  match(filename) {
    return babelRe.test(filename)
  },

  async extract(filename, code, onMessageExtracted, ctx) {
    const parserOptions = ctx?.linguiConfig.extractorParserOptions

    // https://babeljs.io/docs/en/babel-parser#latest-ecmascript-features
    const parserPlugins: ParserPlugin[] = []

    if ([/\.ts$/, /\.mts$/, /\.cts$/, /\.tsx$/].some((r) => filename.match(r))) {
      parserPlugins.push('typescript')
      if (parserOptions?.tsExperimentalDecorators) {
        parserPlugins.push('decorators-legacy')
      } else {
        parserPlugins.push('decorators')
      }
    } else {
      parserPlugins.push('decorators')

      if (parserOptions?.flow) {
        parserPlugins.push('flow')
      }
    }

    if ([/\.js$/, /\.jsx$/, /\.tsx$/].some((r) => filename.match(r))) {
      parserPlugins.push('jsx')
    }

    let sourceMapsConsumer: SourceMapConsumer

    if (ctx?.sourceMaps) {
      sourceMapsConsumer = new SourceMapConsumer(ctx?.sourceMaps)
    }

    await transformAsync(code, {
      // don't generate code
      code: false,
      babelrc: false,
      configFile: false,
      filename,
      inputSourceMap: ctx?.sourceMaps,
      parserOpts: {
        plugins: parserPlugins,
      },
      plugins: [
        [
          'macros',
          {
            // macro plugin uses package `resolve` to find a path of macro file
            // this will not follow jest pathMapping and will resolve path from ./build
            // instead of ./src which makes testing & developing hard.
            // here we override resolve and provide correct path for testing
            resolvePath: (source: string) => require.resolve(source),
            lingui: {
              extract: true,
              linguiConfig: ctx?.linguiConfig,
            },
          },
        ],
        [
          linguiExtractMessages,
          {
            onMessageExtracted: (msg) => {
              if (!sourceMapsConsumer) {
                return onMessageExtracted(msg)
              }

              const [, line, column] = msg.origin || []

              if (!line || !column) {
                return onMessageExtracted(msg)
              }

              const mappedPosition = sourceMapsConsumer.originalPositionFor({
                line,
                column,
              })

              return onMessageExtracted({
                ...msg,
                origin: [mappedPosition.source, mappedPosition.line, mappedPosition.column],
              })
            },
          } satisfies ExtractPluginOpts,
        ],
      ],
    })
  },
}

export default extractor
