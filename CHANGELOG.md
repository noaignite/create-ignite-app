# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.7.0](https://github.com/noaignite/create-ignite-app/compare/v1.6.0...v1.7.0) (2023-05-05)


### Features

* **api/mock:** only use default export and update social data ([b8b1113](https://github.com/noaignite/create-ignite-app/commit/b8b1113d4c26720a59efae113ad6b404b536c60d))
* **build:** bump @storybook/* from 7.0.0-beta.54 to 7.0.3 ([a5d01e6](https://github.com/noaignite/create-ignite-app/commit/a5d01e6698236c4f804cde52aae9ffa74bf9a77a))
* **theme/palette:** sync up the palette to the new Create Ignite Design figma template ([9f9edc8](https://github.com/noaignite/create-ignite-app/commit/9f9edc8d8ac8e4f46d9cd9b666be6d28385cd999))


### Build System

* **deps:** bump @storybook/nextjs from 7.0.3 to 7.0.8 ([8899bf3](https://github.com/noaignite/create-ignite-app/commit/8899bf3c03932f3d57a0abcad3e6aba2aba04869))
* **package.json:** bump engine to 16 min as Storybook v7 has dropped support for node 15 and below ([3354b00](https://github.com/noaignite/create-ignite-app/commit/3354b00e2a58b62558ed041375c03d9db04a32f7))


### Others

* **CartItem:** local handlers are prefixed with handle ([c8f213d](https://github.com/noaignite/create-ignite-app/commit/c8f213d9b1c1fbd32540b22295fe74b0fd460708))
* **FormControlBox:** remove unecessary title key ([14e5337](https://github.com/noaignite/create-ignite-app/commit/14e53379d9e40782adbd04b89fcac195d129d941))

## [1.6.0](https://github.com/noaignite/create-ignite-app/compare/v1.5.0...v1.6.0) (2023-03-15)


### Features

* **.storybook/main.ts:** convert to esm and ts ([6b75ffb](https://github.com/noaignite/create-ignite-app/commit/6b75ffb25bd08f87d38da370d49c04c20849db26))
* **.storybook/preview.js:** enable eslint for .storybook dir ([779cff2](https://github.com/noaignite/create-ignite-app/commit/779cff2979b7763419b695ffcab7f024cdb9eb54))
* ***.stories.js:** remove title from default export as now statically analyzed from dir structure ([190a05c](https://github.com/noaignite/create-ignite-app/commit/190a05c1cb901f59dfb84e7b15f51e2f45d40f64))
* **AppHeader:** set sticky css vars to be used depending on headerMode used ([66e455c](https://github.com/noaignite/create-ignite-app/commit/66e455cf871f391543bc6d6178a62a63ba1a936e))
* **package.json:** add storybook test scripts ([c64c0da](https://github.com/noaignite/create-ignite-app/commit/c64c0da32f77de78b73e6b751b64683355948929))
* **RouterLink:** remove unused custom 'external' prop ([7602426](https://github.com/noaignite/create-ignite-app/commit/760242653cf1abefa6c292d11bad0aaf0f3f770c))
* **stories.js:** prefix all stories with context name for test runner to work ([c2f05bb](https://github.com/noaignite/create-ignite-app/commit/c2f05bbcdcdfd817ad88f354dfd323fa339a2b85))
* **Storybook/RouterLink:** remove SB mocked RouterLink as no longer needed ([5266726](https://github.com/noaignite/create-ignite-app/commit/52667260ace5cea81c497105ccccea898f7f6250))
* **Storybook:** migrate setup to Storybook v7 ([93db6ef](https://github.com/noaignite/create-ignite-app/commit/93db6ef871473eae4a0fe7f2be87ce93f15a62b7))
* **Storybook:** refactor all stories to CSF 3 ([0ca037d](https://github.com/noaignite/create-ignite-app/commit/0ca037d767a2542a9ee287a49818239135786502))
* **test-runner-jest-config.js:** add ~ module alias to test runner ([cb015f6](https://github.com/noaignite/create-ignite-app/commit/cb015f6beae21329441edb98d9a0cf8eab117d78))


### Bug Fixes

* **Container, Toolbar:** add correct way of setting Container gutters and Toolbar heights ([6a2f853](https://github.com/noaignite/create-ignite-app/commit/6a2f85354ee1d00e2c76b0946ec2dfcc5fd462be))
* **eslint-storybook:** resolve dependency cycle of entity 'Page' ([2184490](https://github.com/noaignite/create-ignite-app/commit/2184490a6c8867574fdfbb72d4aad9c985bdec19))
* **pages/404:** title must be of type string ([145292c](https://github.com/noaignite/create-ignite-app/commit/145292cf5f3849b4530e99b9cfcc650feb4f45aa))


### Build System

* **deps:** clean up deps for a slim and working test runner setup ([bd07eef](https://github.com/noaignite/create-ignite-app/commit/bd07eef2768ef24ccdb74ed7c9f5a0d3b4fb9438))


### Others

* **.storybook/preview:** remove no longer needed NextJS RouterContext ([98cfa32](https://github.com/noaignite/create-ignite-app/commit/98cfa32dc56bb547cdae99240a47bb928beea381))
* **createTheme:** remove unecessary eslint-disable directive ([fcbe3c7](https://github.com/noaignite/create-ignite-app/commit/fcbe3c74cfeeb86b9c72be196e8523fed3bc1af4))
* **RouterLink:** remove propType validation for unused external prop ([fd52729](https://github.com/noaignite/create-ignite-app/commit/fd52729d891e86b1f08c10e51a5cdc9c9e5cc71b))

## [1.5.0](https://github.com/noaignite/create-ignite-app/compare/v1.4.0...v1.5.0) (2023-02-11)


### Features

* **Storybook:** add knob controls for headerColor ([70693dc](https://github.com/noaignite/create-ignite-app/commit/70693dcc6ead3c0f3cd899ab472ff88f1d7d3329))


### Bug Fixes

* **storybook:** add NextRouter addon ([79be643](https://github.com/noaignite/create-ignite-app/commit/79be643481593ffa5ce86731a2b50004f881a8e5))

## [1.4.0](https://github.com/noaignite/create-ignite-app/compare/v1.2.2...v1.4.0) (2023-02-07)


### Features

* add new Storybook and NextJS viewport meta tag which allows input fontSize smaller than 16px ([e3059e6](https://github.com/noaignite/create-ignite-app/commit/e3059e64e70db3da2ccc7ce91806d3433d6283c4))
* **CssBaseline:** define --cia-header-height for usage without default value ([52de15e](https://github.com/noaignite/create-ignite-app/commit/52de15e1bade0cc70dcb7412bc9005e62a4eaf98))
* **Dialog, Drawer:** add overrides disabling boxShadow ([c82b61d](https://github.com/noaignite/create-ignite-app/commit/c82b61d71f01b2096ec706fd793214e09ba6e692))
* **layouts/App:** use cia-container-spacing as gutters ([ca31503](https://github.com/noaignite/create-ignite-app/commit/ca31503f4f8011e869bc39c304108256f908ae97))
* **theme/mixins:** remove position mixins in favor of using new css inset ([d52b929](https://github.com/noaignite/create-ignite-app/commit/d52b92982c6f33641adb56947477af2fc39814b9))


### Bug Fixes

* import styled from @mui/material and update @emotion/babel-plugin ([19a75ed](https://github.com/noaignite/create-ignite-app/commit/19a75ed57f00a4b6f5f8b67ee8a369fdf6802547))
* **Storybook:** forward headerColor & headerMode to LayoutComponent ([bade0e4](https://github.com/noaignite/create-ignite-app/commit/bade0e43940fe35a2fe4489abb992ee7a15061c8))


### Reverts

* **theme/typography:** change back inputText fontSize to 16px ([46209fb](https://github.com/noaignite/create-ignite-app/commit/46209fb3d2584e0fb7193fbc93f3fd085de4309b))


### Styling

* **Hero:** simplify MediaReveal local style override ([3817f87](https://github.com/noaignite/create-ignite-app/commit/3817f87e2d4269376520f81ce7a2c2eab08edc76))


### Others

* **_document.js:** add emotion-insertion-point meta tag as per mui examples ([4414060](https://github.com/noaignite/create-ignite-app/commit/4414060ae52650b5ff241264f1e0993afb1b646c))
* **AppSearchDrawer:** correct emotion component names ([da68a1b](https://github.com/noaignite/create-ignite-app/commit/da68a1b113c5d1e731d8b958c88fecf195993ff8))
* **blocks:** renderIndex prop is no longer required ([946daa6](https://github.com/noaignite/create-ignite-app/commit/946daa615472670d8d9ef4d849d5793c1304fd64))
* **components:** simplify overrides with plain css and remove unused mixins ([d6868c0](https://github.com/noaignite/create-ignite-app/commit/d6868c00799fcc3d4512145f8a714cbbbd895a46))
* fix incorrect merge ([037703f](https://github.com/noaignite/create-ignite-app/commit/037703ff53cfa9ef40c834b6b0111c31112cccb2))
* **locales:** remove non existent translation strings ([2762c15](https://github.com/noaignite/create-ignite-app/commit/2762c155105f10fec05c1d0bfd2d326128b6bd06))
* **README:** correct mistakes in the readme ([39574b8](https://github.com/noaignite/create-ignite-app/commit/39574b89622111c8941b06b7b00bbde36c412f25))
* **release:** 1.3.0 ([a87735c](https://github.com/noaignite/create-ignite-app/commit/a87735cd1c3e2d94804d37dc96c771c870bee058))
* **utils:** remove legacy getConfig compat util ([766bc99](https://github.com/noaignite/create-ignite-app/commit/766bc99799b804cf168fef7c3c189928f97db098))


### Build System

* **deps:** bump @emotion/* and @mui/* to latest ([cc3c077](https://github.com/noaignite/create-ignite-app/commit/cc3c0777965ef5f3d835d9c69903ec530fdd5fbf))
* **deps:** bump @noaignite/eslint-config-typescript from 0.3.0 to 0.4.0 ([78b1aad](https://github.com/noaignite/create-ignite-app/commit/78b1aad1f3f60be40737d2b2d480d3f0dd8b6775))
* **deps:** bump @noaignite/oui from 3.3.4 to 4.0.0 ([7df7450](https://github.com/noaignite/create-ignite-app/commit/7df7450f9893d46d4fbb14acb347b8f237e744b0))
* **deps:** bump clsx from 1.1.1 to 1.2.1 ([6780460](https://github.com/noaignite/create-ignite-app/commit/678046056d2b5fc67fbde32418a52b0ec5194af5))
* **deps:** bump decode-uri-component from 0.2.0 to 0.2.2 ([271bbc2](https://github.com/noaignite/create-ignite-app/commit/271bbc2d7ec266d99e79a99d234765a3a6d0fa2f))
* **deps:** bump express from 4.17.1 to 4.18.2 ([d05eab2](https://github.com/noaignite/create-ignite-app/commit/d05eab225dab808b76ae2d7852887772242c2eef))
* **deps:** bump json5 from 1.0.1 to 1.0.2 ([8990ef0](https://github.com/noaignite/create-ignite-app/commit/8990ef0b835965d1079de4257465b818fc493dd5))
* **deps:** bump loader-utils from 1.4.0 to 1.4.2 ([a9a2cc8](https://github.com/noaignite/create-ignite-app/commit/a9a2cc8510ceaf07db3afd95569c749cc1848fe5))
* **deps:** bump minimatch from 3.0.4 to 3.1.2 ([5256d10](https://github.com/noaignite/create-ignite-app/commit/5256d1072f3af8ecfdc8528ec93a5d7443f44c49))
* **deps:** bump next packages from 13.0.1 to 13.1.6 ([6f4937f](https://github.com/noaignite/create-ignite-app/commit/6f4937f4269f570f8464343bc76eb5aba5395335))
* **package.json:** update node engine to lowest supported version ([00c1d29](https://github.com/noaignite/create-ignite-app/commit/00c1d29028747107e0026dc0f89243ab16297a4c))

## [1.3.0](https://github.com/noaignite/create-ignite-app/compare/v1.2.1...v1.3.0) (2023-01-20)


### Features

* add new Storybook and NextJS viewport meta tag which allows input fontSize smaller than 16px ([acf6378](https://github.com/noaignite/create-ignite-app/commit/acf63785f8082940ab046f70b27b22ebf35410a9))
* **CssBaseline:** define --cia-header-height for usage without default value ([1d94b70](https://github.com/noaignite/create-ignite-app/commit/1d94b707b0a17d983d1fb41e0a06164746a3d247))
* **Dialog, Drawer:** add overrides disabling boxShadow ([75dd583](https://github.com/noaignite/create-ignite-app/commit/75dd5839ad687099cb263508317c701c9b0bcdaa))
* **layouts/App:** use cia-container-spacing as gutters ([e1f9b09](https://github.com/noaignite/create-ignite-app/commit/e1f9b09fdcfc3d8b91856484d4dcb532a82f1f35))
* **theme/mixins:** remove position mixins in favor of using new css inset ([7b71d18](https://github.com/noaignite/create-ignite-app/commit/7b71d18b7752a18899977e6559196bf88c0fe6e7))


### Build System

* **package.json:** update node engine to lowest supported version ([df2f232](https://github.com/noaignite/create-ignite-app/commit/df2f2321de9bac049d5174c9c020bf4b8618b3c5))

### [1.2.2](https://github.com/noaignite/create-ignite-app/compare/v1.2.1...v1.2.2) (2022-11-04)


### Bug Fixes

* **.env.provision:** fix env provision keys typo ([912fa53](https://github.com/noaignite/create-ignite-app/commit/912fa53623edc0ceee48a71c7e3d2fd65a5d5e5e))
* import styled from @mui/material and update @emotion/babel-plugin ([1ad058d](https://github.com/noaignite/create-ignite-app/commit/1ad058d736b1d141c9026cd922d67b5529e39248))
* **Storybook:** forward headerColor & headerMode to LayoutComponent ([20a802e](https://github.com/noaignite/create-ignite-app/commit/20a802ea9a96a1435e3a54812cdb3e4f06604461))


### Others

* **AppSearchDrawer:** correct emotion component names ([42329e6](https://github.com/noaignite/create-ignite-app/commit/42329e64864e64cb3032400fa5aa39d4183a9035))
* **blocks:** renderIndex prop is no longer required ([be66f21](https://github.com/noaignite/create-ignite-app/commit/be66f21135182b7e2dea262184c65e9105b1abf6))
* **components:** simplify overrides with plain css and remove unused mixins ([1221bb6](https://github.com/noaignite/create-ignite-app/commit/1221bb6c73aab043828bc65ee714266100c2d0d9))
* **locales:** remove non existent translation strings ([17e80bc](https://github.com/noaignite/create-ignite-app/commit/17e80bcaac5684eb94d5bb33fdb2145cab2faab4))
* **README:** correct mistakes in the readme ([49b4121](https://github.com/noaignite/create-ignite-app/commit/49b4121f95e5189f58d8b35b393ccb47a290a45a))
* **utils:** remove legacy getConfig compat util ([1983cd1](https://github.com/noaignite/create-ignite-app/commit/1983cd147dcf47ced72ff26458a39716229afe87))

### [1.2.1](https://github.com/noaignite/create-ignite-app/compare/v1.2.0...v1.2.1) (2022-11-04)


### Bug Fixes

* **Page:** fix title getting multiple children ([55204a0](https://github.com/noaignite/create-ignite-app/commit/55204a026de14566b8f4d41115e8ea519a3cb494))
* **RouterLink:** add missing prop spread ([78f887c](https://github.com/noaignite/create-ignite-app/commit/78f887cadc5980039afb860bdf3ae539fbfe8394))

## [1.2.0](https://github.com/noaignite/create-ignite-app/compare/v1.1.0...v1.2.0) (2022-11-04)


### Features

* **.env:** add 1password environment variable provisioning ([877bc3b](https://github.com/noaignite/create-ignite-app/commit/877bc3b546d4520272c288cc4d5e6a36d1539ead))
* add a 404 page for next and storybook ([5f62f8b](https://github.com/noaignite/create-ignite-app/commit/5f62f8bb4fcfba0d4bac993b8d4401eaa3f97bfc))
* **AppBaseLoader:** add new site loader ([d2b4e1b](https://github.com/noaignite/create-ignite-app/commit/d2b4e1b5526570c931207e4fcab4c99190153fdd))
* **cart:** remove Cart & CartSummary containers and loop selection directly in AppCartDrawer ([9156992](https://github.com/noaignite/create-ignite-app/commit/915699213677d1106277cb728356295ae3406a4e))
* **CssVarsProvider:** test out new experimental CssVarsProvider (WIP) ([62222e8](https://github.com/noaignite/create-ignite-app/commit/62222e852aa44e47036067a6dde7197f3f503f40))
* **ErrorBlock:** add generic block meant for error pages ([145ef98](https://github.com/noaignite/create-ignite-app/commit/145ef988681536a161fba0c820637fc81364b94c))
* **globals:** rename scripts/polyfills to scripts/globals & log project theme to console ([f118e91](https://github.com/noaignite/create-ignite-app/commit/f118e91a67dd994cb9a2256f0090c6b19f0d50ac))
* **Html:** optimize styles with new :is css selector ([7ae0a87](https://github.com/noaignite/create-ignite-app/commit/7ae0a8707c7bfbf5d6339c9df7c8909c3f8eaa09))
* move store message from AppFooter to AppHeader and calculate headerHeight with css vars only ([97fec89](https://github.com/noaignite/create-ignite-app/commit/97fec8912026bcdd938c9292d8fae10c042d1ced))
* **theme:** createTheme now takes colorSchemes as an overridable argument ([d1731f8](https://github.com/noaignite/create-ignite-app/commit/d1731f835a142edba263dd65820aca18efd817c8))
* **theme:** remove redundant 'textInverted' palette group as now accessed via css vars ([bffe907](https://github.com/noaignite/create-ignite-app/commit/bffe9071a5e90ff031f6f4d7da17d6e6cca43b1c))
* **theme:** update styles to use theme css variables ([86765f9](https://github.com/noaignite/create-ignite-app/commit/86765f97730a9a2fa21f9a5ab60e92bda6e9bc95))
* update next, add ts support, add getBlockProps ([4e08ff6](https://github.com/noaignite/create-ignite-app/commit/4e08ff6265def66dbabe60af590d3735dc80f124))
* use new CssVarsProvider and update AppBar to use theme vars ([4a524b8](https://github.com/noaignite/create-ignite-app/commit/4a524b8f46e57f388b232855b9bcb58050021769))


### Bug Fixes

* **.storybook/preview.js:** use the new useColorScheme hook to switch between theme modes ([3a4fb5e](https://github.com/noaignite/create-ignite-app/commit/3a4fb5e431621501424c0ab52ffb4719bead33e0))
* **createEmotionCache:** update util based on mui examples ([c814eb4](https://github.com/noaignite/create-ignite-app/commit/c814eb402ca45258874b9b66a2875fb8e037ad0a))
* omit SSR :first-child error by using emotion cache with compat true if running Storybook ([7928d31](https://github.com/noaignite/create-ignite-app/commit/7928d3152ac29341b8100c6f0dfc4748c9381732))
* **RouterLink:** pass ref to Link ([9f0fdde](https://github.com/noaignite/create-ignite-app/commit/9f0fdde57722f77a77a28594160c2747fc641358))
* **storybook:** fix broken storybook pages ([c4c367b](https://github.com/noaignite/create-ignite-app/commit/c4c367baaa98d2ce6a2b07666d44f42bbc5d00ae))
* use renamed storybook demo page, Article ([ea69aa3](https://github.com/noaignite/create-ignite-app/commit/ea69aa3bbfacb1754141431cf063f4b2fe6a94c5))


### Docs

* **CssBaseline:** add comment explaining the included [@font-face](https://github.com/font-face) block is an out-commented example ([fc51eab](https://github.com/noaignite/create-ignite-app/commit/fc51eabc20fa3f1655b67cd2f242570e741e6b8c))


### Code Refactoring

* **_app:** rename props to be more understandable ([49eecba](https://github.com/noaignite/create-ignite-app/commit/49eecba4645ffc6e3af90eba596ad21dc888ae52))
* **AppHeader:** add header transitions based on the new mounted state prop ([17b7e03](https://github.com/noaignite/create-ignite-app/commit/17b7e036e4d9f5d0baedb76e4e13758643cdb0c5))


### Others

* **_app, AppBase:** update to ts ([159bf59](https://github.com/noaignite/create-ignite-app/commit/159bf59ca4b8868a4fdab3f31811fdf2a8aefc43))
* **ArticleSlideshow:** remove example block and embla-carousel-react package ([2c86324](https://github.com/noaignite/create-ignite-app/commit/2c863241dc6e3bd336bfe83ff5e0e33ffdffac3c))
* for sake of simplicity, remove 'theme colors' storybook page as now accessible from console ([ae53aea](https://github.com/noaignite/create-ignite-app/commit/ae53aea994b694aa11de3c84156b540aef8fca2e))
* remove and ignore generated next TS file ([7aecf68](https://github.com/noaignite/create-ignite-app/commit/7aecf68b08fdd764c40677ae8dac6b8786bb8b03))
* remove stylistic comment ([b376218](https://github.com/noaignite/create-ignite-app/commit/b376218efc8f91a51e8a70d2cfaecee978b79c17))


### Build System

* **deps:** bump @mui/material from 5.10.8 to 5.10.12 & @mui/lab and @noaignite/oui to latest ([0251146](https://github.com/noaignite/create-ignite-app/commit/02511464cde23d81349d27a844cb24a9f34eeda9))
* **deps:** bump @mui/material from 5.6.0 to 5.7.0 ([e7a340b](https://github.com/noaignite/create-ignite-app/commit/e7a340b8b9c8c61dcee40ad0ac6749c116d88cae))
* **deps:** bump @mui/material from 5.8.4 to 5.8.5 and @mui/lab to latest ([0a9af71](https://github.com/noaignite/create-ignite-app/commit/0a9af71db0f2ca0d7274f90e1bc638c2352110e3))
* **deps:** bump @mui/material from 5.8.5 to 5.10.8 and @mui/lab to latest ([c888509](https://github.com/noaignite/create-ignite-app/commit/c888509be0a6128b68bf45e6e64c7224a02cb6a9))
* **deps:** bump @storybook/* from 6.5.9 to 6.5.13 ([c7c02cb](https://github.com/noaignite/create-ignite-app/commit/c7c02cb066454a24f7d397a86ff1064d35767f41))
* **deps:** bump next packages from 12.1.6 to 12.2.3 ([c3d0311](https://github.com/noaignite/create-ignite-app/commit/c3d03116d7081360956e2ef58baee3fa7a396edc))
* **deps:** bump terser from 4.8.0 to 4.8.1 ([f83f543](https://github.com/noaignite/create-ignite-app/commit/f83f543a18285eb0a6aa664a5991a7d266d9ec45))
* **deps:** remove unused @react-hook/size package ([b41b03b](https://github.com/noaignite/create-ignite-app/commit/b41b03b9ea96be5f159c900d1029e0c19e80ec90))

## [1.1.0](https://github.com/noaignite/create-ignite-app/compare/v1.0.0...v1.1.0) (2022-06-14)


### Features

* **api:** add formatProduct util, update product mock and add filterGroupType util ([0f84210](https://github.com/noaignite/create-ignite-app/commit/0f8421096f06b4ee40cdebed1f966a3875f20a8b))
* **api:** move centra related constants & utils into api/centra and update mock data ([a4bb2ef](https://github.com/noaignite/create-ignite-app/commit/a4bb2ef9dc45d98dbcda92c0d19997a70864b5f5))
* **App:** introduce new layouts architecture and move App to layouts ([2bb4ec9](https://github.com/noaignite/create-ignite-app/commit/2bb4ec9deeab9409d252b257cd414982e85e0963))
* **icons:** export all icons & styles exports directly from components dir" ([f9b25c7](https://github.com/noaignite/create-ignite-app/commit/f9b25c703cf1060f3b038202c0c394980a423d19))
* **RootProvider:** add new root provider to provide providers for Storybook & NextJS ([c55fc07](https://github.com/noaignite/create-ignite-app/commit/c55fc07c77e2c3008959bb02c94a1793a6384b43))
* **theme:** add new custom ThemeProvider, withInvertedTheme HOC and defaultTheme ([29b163b](https://github.com/noaignite/create-ignite-app/commit/29b163bd1b2c19d5460f967eaf3098e876da7f04))
* **theme:** simplify theme setup ([b8bcf32](https://github.com/noaignite/create-ignite-app/commit/b8bcf326789f7b28f0bd9cec0573389a9d8e10e4))


### Bug Fixes

* **FormControlBoxSummary:** remove incorrect control prop validation ([9d3c72e](https://github.com/noaignite/create-ignite-app/commit/9d3c72e0599aa8e6f64d11afab2b55045bd9a064))
* **MuiInputBase:** correct typo ([7b545fd](https://github.com/noaignite/create-ignite-app/commit/7b545fd6b0017ff32690e3c640ac0c7b854b1403))
* **Storybook:** emotion-theming ThemeProvider no longer needed as of @storybook/* 6.5.0 ([5a32b64](https://github.com/noaignite/create-ignite-app/commit/5a32b64a20e3882fbbed6d883d89094efc07b023))


### Styling

* tidy up gitignore ([f7d1f2a](https://github.com/noaignite/create-ignite-app/commit/f7d1f2ad97d3c606ab4470e3f8067b4363b444b0))


### Code Refactoring

* **CartItem:** remove global row className in favor of styled component ([8d670f1](https://github.com/noaignite/create-ignite-app/commit/8d670f1b5ad7b6cad3b5458c51b5ebdc8b2855b9))
* **colors:** locally define colors ([bfec2de](https://github.com/noaignite/create-ignite-app/commit/bfec2deae993a32c2c2f3205539ffecf8d2667a3))
* **contexts:** uppercase context dirs and make each provider the default export ([6139e03](https://github.com/noaignite/create-ignite-app/commit/6139e0348c0bf14df121a56ac6ce0522f76d79c4))
* **menuItemtype:** rename nested menu entries from links to items as url is not required ([3dacfec](https://github.com/noaignite/create-ignite-app/commit/3dacfec0b366e348f96692a8b714e90e60230862))
* move api related utils into api/utils ([0ff7aa2](https://github.com/noaignite/create-ignite-app/commit/0ff7aa2b9cc305584243fd5dfa7e059a91ec43ce))
* mui styled no longer needs name & slot thanks to @emotion/babel-plugin ([fc1d514](https://github.com/noaignite/create-ignite-app/commit/fc1d514fb05b33a36a05828f8e6b91036c40d591))
* remove all third levels imports and export all utils from styles ([9bd00f9](https://github.com/noaignite/create-ignite-app/commit/9bd00f91252d59d85cc2ff565e97da7bcabf3e5a))
* **Storybook:** remove storySelectArgType util as not necessary ([a3e53e6](https://github.com/noaignite/create-ignite-app/commit/a3e53e6839e9cbc86d3597bb3b486ae6ea492d6e))
* **utils:** move theme objects into components, add new constants & minor tweaks ([4f67b70](https://github.com/noaignite/create-ignite-app/commit/4f67b700c1f49492a54a8df1e4b4b1e75c0306a4))


### Docs

* **README:** add section detailing contexts & layouts ([cec0233](https://github.com/noaignite/create-ignite-app/commit/cec0233e891dec88ec071fc3b39f642485eb8cf9))
* **readme:** add skip changelog ([bf4e93a](https://github.com/noaignite/create-ignite-app/commit/bf4e93ad4eaf5663478ac96beb4913e5a24660b6))


### Build System

* **deps:** bump @commitlint/* from 16.2.3 to 17.0.0 ([26adebc](https://github.com/noaignite/create-ignite-app/commit/26adebc4f510804c959c19377bf0ab5f197bb38a))
* **deps:** bump @commitlint/* from 17.0.0 to 17.0.2 ([0c72083](https://github.com/noaignite/create-ignite-app/commit/0c72083dbfa4f6bff7370dcd718190568cbaf478))
* **deps:** bump @emotion/* from 11.* to 11.9.3 ([766d164](https://github.com/noaignite/create-ignite-app/commit/766d164c13475657316b6afa9475b5bedc3f7583))
* **deps:** bump @emotion/* from 11.7.2 to 11.9.2 ([3825fb2](https://github.com/noaignite/create-ignite-app/commit/3825fb26c79a4832041667d32d9b8f7575fc9b0f))
* **deps:** bump @mui/material from 5.6.0 to 5.8.4 and @mui/lab to latest ([c18cd68](https://github.com/noaignite/create-ignite-app/commit/c18cd68cb4cd0c30ba3361a62e300694ee8b0e24))
* **deps:** bump @noaignite/eslint-config from 0.2.2 to 0.4.0 ([9974878](https://github.com/noaignite/create-ignite-app/commit/99748788e7042956017cfd9a14719b63712c69fb))
* **deps:** bump @noaignite/eslint-config from 0.4.0 to 0.5.1 ([f69996e](https://github.com/noaignite/create-ignite-app/commit/f69996e5817717a1e592a396e2104807882a1d21))
* **deps:** bump @noaignite/oui from 3.3.0 to 3.3.2 ([64db583](https://github.com/noaignite/create-ignite-app/commit/64db583f7a9f46588ad2f1eb564b244d1e4d20e6))
* **deps:** bump @storybook/* from 6.4.20 to 6.5.0 ([b93299e](https://github.com/noaignite/create-ignite-app/commit/b93299eb82aa6e96f7f72ce599747f8e7beffd7b))
* **deps:** bump @storybook/* from 6.5.0 to 6.5.6 ([8caa070](https://github.com/noaignite/create-ignite-app/commit/8caa07052252445c9925c03842f988426de7eab0))
* **deps:** bump @storybook/* from 6.5.6 to 6.5.9 ([de576ff](https://github.com/noaignite/create-ignite-app/commit/de576ff97a3fb93ecc9f66c7ff3e04cf64134068))
* **deps:** bump husky from 7.0.0 to 8.0.1 ([fde54e7](https://github.com/noaignite/create-ignite-app/commit/fde54e7e6ce74ecdb7ebae12186aa8fe1723e0a1))
* **deps:** bump lint-staged from 12.3.2 to 13.0.1 ([2b4c9b8](https://github.com/noaignite/create-ignite-app/commit/2b4c9b8baf749516cb1a6fa1a416ea0ca0a59fb5))
* **deps:** bump next packages from 12.1.4 to 12.1.6 ([ccf4230](https://github.com/noaignite/create-ignite-app/commit/ccf4230b0e2910eef96112455dca60796fa6065f))
* **deps:** bump prettier from 2.5.1 to 2.7.0 ([096d1d4](https://github.com/noaignite/create-ignite-app/commit/096d1d4dafcb072bb88629b4d61c511bcf0a4263))
* **Storybook:** remove --static-dir CLI flag as deprecated and add host flag for node 18 ([888e96c](https://github.com/noaignite/create-ignite-app/commit/888e96cb4041b466b724d35e039c877ec9fe3115))


### Others

* **_document:** update based on mui next example ([8d37b6f](https://github.com/noaignite/create-ignite-app/commit/8d37b6fb673160aa4a2cf598c6bc9e3ec7ce3e49))
* **husky/prepare-commit-msg:** do not open commitizen when doing a git merge ([b18e4dd](https://github.com/noaignite/create-ignite-app/commit/b18e4dd2378da29998bb3181b69bb702b081afe0))
* rename src/context to src/contexts for consistency ([56b7bbc](https://github.com/noaignite/create-ignite-app/commit/56b7bbc750d67ccf963cc848648a5185072ba1d5))

## 1.0.0 (2022-04-12)


### Features

* **AppHeader:** add support for headerColor via pageProps for when using transparent header ([dc2e7eb](https://github.com/noaignite/create-ignite-app/commit/dc2e7eb00f9ea854674bfddac3ddbb051d624fda))
* **AppHeader:** replace custom useDimensions hook with @react-hook/size for more robust dimension tracking as it uses ResizeObserver ([c755ccd](https://github.com/noaignite/create-ignite-app/commit/c755ccd540467f8632cd2a18db03d62e478304d0))
* **babel:** add @emotion/babel-plugin & update babel config ([c12c729](https://github.com/noaignite/create-ignite-app/commit/c12c729f07d4a2d9598cd7145726b908fa42b958))
* **conventional-commits:** add git hooks, config files & release script ([16fed16](https://github.com/noaignite/create-ignite-app/commit/16fed1699419b044c7810e7cd73bf56553b25baf))
* **eslint:** now extends @noaignite/eslint-config ([a7d7c6a](https://github.com/noaignite/create-ignite-app/commit/a7d7c6a883736cc5fe76086fb58c83c34523fbbc))
* **Storybook pages:** auto-generate Storybook pages based on api/__mock__/pages ([fbdec0d](https://github.com/noaignite/create-ignite-app/commit/fbdec0dec743c65da42f1cc79147a4708f0d972a))
* **Storybook:** Add MUI breakpoints as viewport options ([8238676](https://github.com/noaignite/create-ignite-app/commit/82386760517ef0f4b4b3af925f4533690a72925b))


### Bug Fixes

* @mui/core was renamed to @mui/base ([2f47d4b](https://github.com/noaignite/create-ignite-app/commit/2f47d4b77a7c7c8d152872dfc9a51eac35bdb7c2))
* **App, AppCookieBar:** onCookieBarClose handler is now accessed correctly ([889ff51](https://github.com/noaignite/create-ignite-app/commit/889ff510bc5e22965c9016fc3c3094f31464fd1a))
* **App:** add correctly formatted webpackChunkName to get human readable chunk in network request ([1d592fa](https://github.com/noaignite/create-ignite-app/commit/1d592faaef826052acae8809cb4fbbca7ecd73b7))
* **AppFooter:** simplify footer nav html structure [#39](https://github.com/noaignite/create-ignite-app/issues/39) ([51884b5](https://github.com/noaignite/create-ignite-app/commit/51884b5aab01f9cc152d552b08806ca1f68fec6c))
* **App:** remove webpackChunkName comment to resolve build error ([25e40dd](https://github.com/noaignite/create-ignite-app/commit/25e40dd4eebc7cafd56d7d12c84fa35ce26347e9))
* **Backdrop:** remove backdrop color when using invisible Backdrop ([016fd69](https://github.com/noaignite/create-ignite-app/commit/016fd6902da491c7409e9f533631ed5f1ab1d598))
* **Badge:** overlap variant name is now circular and not circle ([b30d868](https://github.com/noaignite/create-ignite-app/commit/b30d868cf6c4f7241cc642c5237a66cfeb42eb05))
* **Button:** remove ripple element as it's disabled per default ([be08c09](https://github.com/noaignite/create-ignite-app/commit/be08c093a45d989b111408e40c6156779e7af422))
* **core:** downgrade embla-carousel-react from v6.* to v5.* to not have to define 'slidesToScroll' in js ([3bbcd46](https://github.com/noaignite/create-ignite-app/commit/3bbcd46b5751758e6b37c8e895cbc6513da561d0))
* **next.config:** Remove unused config ([e11f738](https://github.com/noaignite/create-ignite-app/commit/e11f738bdbebc8eb9b6a67aa88c1b64c39b4a6ef))
* **oui:** update affected templates due to @noaignite/oui@3.0.0 ([6119643](https://github.com/noaignite/create-ignite-app/commit/611964371ca0dba7840c9f5f971b44e84c30a2ed))
* **Storybook preview:** make use of accumulator within reduce function ([93df09e](https://github.com/noaignite/create-ignite-app/commit/93df09ed98aed868a28af76181217ab655e69770))
* **Storybook:** correct viewport object structure ([d1d4eb4](https://github.com/noaignite/create-ignite-app/commit/d1d4eb427543aa0ef6b8c3e680233171aaa80931))


### Code Refactoring

* **Storybook:** use reduce ([8af0147](https://github.com/noaignite/create-ignite-app/commit/8af014778a4734dc7c251151e434d20f01848d41))
* **Storybook:** viewports ([79bf7f1](https://github.com/noaignite/create-ignite-app/commit/79bf7f1fd717c247df5ed479666fae5d10bb2114))


### Styling

* **Hero:** add example of fluid typography use ([ca83a8a](https://github.com/noaignite/create-ignite-app/commit/ca83a8a97e7c17a3b73a9b3794c9b009df63d451))
* **mock:** rename mock dir to __mock__ and update affected templates ([8809fb0](https://github.com/noaignite/create-ignite-app/commit/8809fb066d39a4c04ccd0896501c2b4dd4c57abc))
* **pages.stories.js:** destruct imports and add a more descriptive comment ([f53f72d](https://github.com/noaignite/create-ignite-app/commit/f53f72dc9d9b9bcf60fa072233eb334a36af7a4e))
* **README:** fix typo ([de4a03a](https://github.com/noaignite/create-ignite-app/commit/de4a03a6b00d2f2606f2d59360afde1f3304007e))
* simplify video attributes spread ([49d4a43](https://github.com/noaignite/create-ignite-app/commit/49d4a438f7db9ae81ce2d7f21019442e0d6e7aaf))
* update cms mock data ([d9efa66](https://github.com/noaignite/create-ignite-app/commit/d9efa66c763af6825e4aeff26684c3afeffbc256))


### Build System

* **deps:** add commitizen, @commitlint/* & standard-version ([fe6654c](https://github.com/noaignite/create-ignite-app/commit/fe6654cc175dba1da123155170003b28f71d7039))
* **deps:** bump @emotion/* @mui/* to latest ([ceff9f0](https://github.com/noaignite/create-ignite-app/commit/ceff9f0bbd004c5fab2fab534aa6965c6658e6b7))
* **deps:** bump @mui/material from 5.5.0 to 5.6.0 ([fe194c9](https://github.com/noaignite/create-ignite-app/commit/fe194c9588dac5a6185f3dbd8d915bd574489bab))
* **deps:** bump @noaignite/* to latest ([132e38d](https://github.com/noaignite/create-ignite-app/commit/132e38dea2a11805d6a3049d17574df920d5370e))
* **deps:** bump @noaignite/eslint-config from 0.2.0 to 0.2.2 ([bbed47f](https://github.com/noaignite/create-ignite-app/commit/bbed47f37a6edb23fcd21220867058aeb571d953))
* **deps:** bump @storybook/* from 6.4.17 to 6.4.19 ([3e50e4f](https://github.com/noaignite/create-ignite-app/commit/3e50e4f3171b89c4da6ca8d19b26e13e80c6693a))
* **deps:** bump @storybook/* from 6.4.19 to 6.4.20 ([4d9ddb6](https://github.com/noaignite/create-ignite-app/commit/4d9ddb683aa172590666414ef8cf11d24039a921))
* **deps:** bump eslint from 7.32.0 to 8.12.0 ([0c90d73](https://github.com/noaignite/create-ignite-app/commit/0c90d73f040c52a618d4b5f0fb9e8fa9280bb90d))
* **deps:** bump minimist from 1.2.5 to 1.2.6 ([1778e9d](https://github.com/noaignite/create-ignite-app/commit/1778e9d95b6ab61a09901c8ad52cd145d076574f))
* **deps:** bump next packages from 12.0.9 to 12.1.0 ([7dc5b54](https://github.com/noaignite/create-ignite-app/commit/7dc5b549a2dccd9191dd22131fe000453e3b0694))
* **deps:** bump next packages from 12.1.0 to 12.1.4 ([87bf351](https://github.com/noaignite/create-ignite-app/commit/87bf351ef1a74d301d58f0afb1486bdffa45f795))
* **deps:** bump node-fetch from 2.6.1 to 2.6.7 ([99d0ac7](https://github.com/noaignite/create-ignite-app/commit/99d0ac7ef63a783261d2369e4ee221bae1b515d3))
* **deps:** remove unused @welldone-software/why-did-you-render package ([c0da4b2](https://github.com/noaignite/create-ignite-app/commit/c0da4b2ae60d5b623e0a2b941ba4c7a47e58e583))
* remove git add command from lint-staged commands ([cfcd0b4](https://github.com/noaignite/create-ignite-app/commit/cfcd0b4dd1c08327718e1d861063ea62e8fb1caf))


### Docs

* **babel:** add comment and reference to github issue ([8c1cc05](https://github.com/noaignite/create-ignite-app/commit/8c1cc050b8bcf1e9e273a141cbd4dec644475808))
* improve readme documentation ([394b32b](https://github.com/noaignite/create-ignite-app/commit/394b32ba72c79888cc1c67e4838b2e5cdc409719))
* **README:** add release section to readme file ([43ce941](https://github.com/noaignite/create-ignite-app/commit/43ce9416a2ea058d2b3d172b9eec63e63ff21efc))
* **README:** update based on reviewer feedback ([50a8afb](https://github.com/noaignite/create-ignite-app/commit/50a8afb4d2ee2c643c751b39d6f55b2edd98391e))
* **Typography:** update storybook default display to block for a better story overview ([b07385a](https://github.com/noaignite/create-ignite-app/commit/b07385ae521f24a2eafedd14b4ed0fe577817932))


### Others

* **api:** move centra & cms mock data into it's respective dirs ([cbe7d0a](https://github.com/noaignite/create-ignite-app/commit/cbe7d0a1334a15a59d6f27e1ed858dcfc0acd022))
* **AppMarketDialog:** use same dropdown variant ([9b67f8e](https://github.com/noaignite/create-ignite-app/commit/9b67f8e27248f1c5d8b07f607f0f0ab129d39a62))
* **AppNavDrawer:** add missing translation for close button ([7f961e5](https://github.com/noaignite/create-ignite-app/commit/7f961e5bfb379338d17b46219e9deb6ff2e4831e))
* **CartItem:** remove non-existent classnames ([d5b2ffa](https://github.com/noaignite/create-ignite-app/commit/d5b2ffa21ea8cf68aca633cd6c4cd4d89dcd42b9))
* **CheckoutContext:** update interface to mirror new @noaignite/react-centra-checkout ([9492b15](https://github.com/noaignite/create-ignite-app/commit/9492b15f954f37ecee4f2d496cd285fe093ff23a))
* conform eslint ([52e8e78](https://github.com/noaignite/create-ignite-app/commit/52e8e789eacf8570a989c8c26a74bcc2be3f4716))
* **context:** give temporary names as git is non case sensitive ([a65ef2e](https://github.com/noaignite/create-ignite-app/commit/a65ef2e4c10fd76b63c66e8b69027a115c284d3d))
* **context:** rename context subfolders to lowercase ([1bd4ba1](https://github.com/noaignite/create-ignite-app/commit/1bd4ba1f1a0f34126b61458705f8711e6305437a))
* **core:** bump @emotion/* @mui/* @noaignite/* to [@latest](https://github.com/latest) ([91f4948](https://github.com/noaignite/create-ignite-app/commit/91f4948d1f8b749c35e68d625675af17bdd7ba0a))
* **core:** bump @emotion/* and @mui/* packages to [@latest](https://github.com/latest) ([1b42d4e](https://github.com/noaignite/create-ignite-app/commit/1b42d4e8b28d692492cf896fe91dc34a6b113c1f))
* **core:** bump @noaignite/eslint-config from v0.1.1 to v0.1.4 ([d8f1381](https://github.com/noaignite/create-ignite-app/commit/d8f13818a34ab95611036d206bc17b1446d8d0ac))
* **core:** bump @noaignite/oui from v2.0.0 to v3.0.0 ([702626b](https://github.com/noaignite/create-ignite-app/commit/702626b73ef1545e7d855a0072d72f576b1fd6df))
* **core:** bump @noaignite/oui from v3.0.1 to v3.0.3 ([8b5d797](https://github.com/noaignite/create-ignite-app/commit/8b5d7977efc52bfe57c11d2e30e35cf9fea7213f))
* **core:** bump @storybook/* from v6.3.9 to v6.4.17 ([b9f3222](https://github.com/noaignite/create-ignite-app/commit/b9f32224b2ea21d3832fb8be79576640d31834ec))
* **core:** bump embla-carousel-react from v5.0.1 to v6.0.2 ([f8cefbb](https://github.com/noaignite/create-ignite-app/commit/f8cefbb0b1a3abededf357c7323d77677a5cff16))
* **core:** bump eslint-import-resolver-webpack from v0.13.1 to v0.13.2 to include node 17 ([afe9570](https://github.com/noaignite/create-ignite-app/commit/afe957093b883c577260746c47daf075a8b142e7))
* **core:** bump lint-staged from v11.0.0 to v12.3.2 ([fc182cb](https://github.com/noaignite/create-ignite-app/commit/fc182cb8abf52571128e5a3f7eae0bef47e97204))
* **core:** bump next & @next/bundle-analyzer from v11.1.2 v12.0.4 ([9dc48ca](https://github.com/noaignite/create-ignite-app/commit/9dc48ca2f326cc2ac967825bf8d80b64a71ff317))
* **core:** bump next packages from v12.0.4 to v12.0.9 ([fab277b](https://github.com/noaignite/create-ignite-app/commit/fab277bf47da35d8aba084ab2850d341a45cd491))
* **core:** bump prettier from v2.3.2 to v2.5.1 ([2488581](https://github.com/noaignite/create-ignite-app/commit/248858154d18defe6f2f820a973421c0227ecbf8))
* **core:** bump prop-types from v15.7.2 to v15.8.1 ([dce649c](https://github.com/noaignite/create-ignite-app/commit/dce649c9233874f4226ccbb6a8081d5028249db3))
* **createRenderBlock:** initialize props as empty object and rename key argument to idx ([f8fafb8](https://github.com/noaignite/create-ignite-app/commit/f8fafb84ce09a67d1e0ee2e1878536b21e8d1087))
* **Hero:** add alt tag for non video media ([509608b](https://github.com/noaignite/create-ignite-app/commit/509608b1069c6b0aa022f8150baf93b83ab50356))
* **I18n:** move i18n context into new 'context' dir ([90efb88](https://github.com/noaignite/create-ignite-app/commit/90efb881f1346782fdef0b2fd56b0b8d2dc5a133))
* **import:** create '~' alias and use for all local imports ([999d94d](https://github.com/noaignite/create-ignite-app/commit/999d94d871608e402eb1853db73bae188eaff2f8))
* **Media:** default to empty alt attribute if not of type video ([fca0cf9](https://github.com/noaignite/create-ignite-app/commit/fca0cf94b0091d53b320408795a82648f6c72125))
* **Media:** update mock data with responsive width & height ([c375056](https://github.com/noaignite/create-ignite-app/commit/c37505671edce9a2d2bea00c17e1bef489feba4e))
* **Media:** use generatePreload singleton ([1300b98](https://github.com/noaignite/create-ignite-app/commit/1300b98f1666c0c0447fb3c8f75eefbbd33e3901))
* move and rename api/Checkout to context/Centra ([567c8f2](https://github.com/noaignite/create-ignite-app/commit/567c8f2a42d8291c8857b648755bdf46b3109a62))
* move and rename api/Settings to context/Cms & containers/App/AppContext to context/Global ([7b3c758](https://github.com/noaignite/create-ignite-app/commit/7b3c758d17f77b6c5f4fc3f97bc6590b73478b86))
* move api helpers, such as fetchProducts, into the api dir ([20f2dbb](https://github.com/noaignite/create-ignite-app/commit/20f2dbb75de2b285c10268f228c8435de80588ea))
* **README:** update blocks & components definition ([04f034a](https://github.com/noaignite/create-ignite-app/commit/04f034a70d4bab710ecb29a6d5b390dc871437de))
* remove workflow ([8770e0c](https://github.com/noaignite/create-ignite-app/commit/8770e0cae3b0236f3c0fcd9a3a75b4b30beae31f))
* rename CmsContext to RemoteConfigContext and corresponding hooks ([93eb99c](https://github.com/noaignite/create-ignite-app/commit/93eb99c3ccb5585c7d33b755bec0ed593e39c484))
* reset repo version to 1.0.0 and remove empty changelog file ([f78e121](https://github.com/noaignite/create-ignite-app/commit/f78e1216cd5d26c8302f0b7ae0819259c9f1955e))
* update lint-staged setup ([fd2b430](https://github.com/noaignite/create-ignite-app/commit/fd2b43093b57ce400e9d12f12cace5efa2b67361))
* update readme ([e332e11](https://github.com/noaignite/create-ignite-app/commit/e332e11103fb41f1d1159421313f088b518d098b))
