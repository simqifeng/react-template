// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  env: {
    browser: true,
  },

  extends: ['airbnb-base'],
  // use the 'ellint-plugin-react' plugin
  plugins: [
    'react',
    'import'
  ],

  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    }
  },

  rules: {
    'class-methods-use-this': 0,
    // don't require .js .jsx extension when importing
    'import/extensions': 0,
    'import/no-dynamic-require': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-use-before-define": ["error", { "functions": false,}],
    "no-unused-vars": 0,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "no-param-reassign": 0,
    "no-unused-expressions": 0,
    "padded-blocks": 0,
    "prefer-const": 1,
    "linebreak-style": 0,
    "max-len": 0,
    "arrow-body-style": ["off"],
    "no-lonely-if": 0,
    "no-useless-return": 0,
    "no-invalid-v-for": 0,
    'import/prefer-default-export': 0,
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  }
}
