/*
 * Eslint config file
 * Documentation: https://eslint.org/docs/user-guide/configuring/
 * Install the Eslint extension before using this feature.
 */
module.exports = {
  overrides: [
    {
      files: ['*.wxml'],
      plugins: ['wxml'],
      processor: 'wxml/wxml',
      parser: '@wxml/parser',
      rules: {
        'wxml/report-wxml-syntax-error': 'error',
        'wxml/forbid-tags': [
          'error',
          {
            forbid:
            [
              'div',
              'span',
              {
                tag: 'p',
                message: 'please use <text />',
              },
            ],
          },
        ],
        'wxml/no-duplicate-attributes': 'error',
      },
    },
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  // ecmaFeatures: {
  //   modules: true,
  // },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    wx: true,
    App: true,
    Page: true,
    getCurrentPages: true,
    getApp: true,
    Component: true,
    requirePlugin: true,
    requireMiniProgram: true,
  },
  // extends: 'eslint:recommended',
  rules: {
    // 'no-extra-semi': [],
    // '@typescript-eslint/no-extra-semi': [2, 'always'],
    // TS
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    // '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',


    '@typescript-eslint/indent': [
      'off',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
          'TSTypeParameterInstantiation',
        ],
        offsetTernaryExpressions: true,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off',
    'eslint-comments/disable-enable-pair': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    semi: [2, 'always'],
    '@typescript-eslint/semi': [2, 'always'],
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // The following rule overrides require a parser service, aka. require a `typescript.json` path.
    // This needs to be done individually for each project, and it slows down linting significantly.
    // 'no-throw-literal': 'off',
    // '@typescript-eslint/no-throw-literal': 'error',
    // 'no-implied-eval': 'off',
    // '@typescript-eslint/no-implied-eval': 'error',
    // 'dot-notation': 'off',
    // '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    // off
    // '@typescript-eslint/consistent-indexed-object-style': 'off',
    // '@typescript-eslint/naming-convention': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/parameter-properties': 'off',
    // '@typescript-eslint/no-empty-interface': 'off',
    // '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/ban-types': 'off',
    // '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',

    'no-useless-constructor': 'off',
    indent: ['error', 2],
    'quote-props': ['error', 'as-needed'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],

  },
};
