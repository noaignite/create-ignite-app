const path = require('path')

module.exports = {
  root: true, // So parent files don't get applied
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    __translationGroup: 'readonly',
  },
  extends: ['plugin:import/recommended', 'plugin:@next/next/recommended', 'airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 7,
  },
  plugins: ['eslint-plugin-babel', 'eslint-plugin-react-hooks'],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './webpackBaseConfig.js'),
      },
    },
  },
  /**
   * Sorted alphanumerically within each group. built-in and each plugin form
   * their own groups.
   */
  rules: {
    /**
     * Custom rules
     */
    '@next/next/no-img-element': 'off', // Perhaps better to have enabled?
    'arrow-body-style': 'off', // Don't enforce, readability firsthand.
    'react/sort-prop-types': 'off', // Too strict, no time for that

    /**
     * MUI rules
     */
    'consistent-this': ['error', 'self'],
    // just as bad as "max components per file"
    'max-classes-per-file': 'off',
    // Too interruptive
    'no-alert': 'error',
    // Strict, airbnb is using warn; allow warn and error for dev environments
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': 'off', // It's fine.
    'no-constant-condition': 'error',
    // Use the proptype inheritance chain
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'error',
    'nonblock-statement-body-position': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    // Destructuring harm grep potential.
    'prefer-destructuring': 'off',

    // Missing yarn workspace support
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'never',
      },
    ],

    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-autofocus': 'off',

    'react-hooks/exhaustive-deps': ['error', { additionalHooks: 'useEnhancedEffect' }],
    'react-hooks/rules-of-hooks': 'error',

    // Can add verbosity to small functions making them harder to grok.
    // Though we have to manually enforce it for function components with default values.
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off', // Too strict, no time for that
    'react/jsx-curly-brace-presence': 'off', // broken
    // airbnb is using .jsx
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    // Enforces premature optimization
    'react/jsx-no-bind': 'off',
    // We are a UI library.
    'react/jsx-props-no-spreading': 'off',
    // This rule is great for raising people awareness of what a key is and how it works.
    'react/no-array-index-key': 'off',
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    // Not always relevant
    'react/require-default-props': 'off',
    // This depends entirely on what you're doing. There's no universal pattern
    'react/state-in-constructor': 'off',
    // stylistic opinion. For conditional assignment we want it outside, otherwise as static
    'react/static-property-placement': 'off',
  },
}
