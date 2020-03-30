module.exports = {
   env: {
      browser: true,
      es6: true,
   },
   extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
   parser: 'babel-eslint',
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
   },
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
   rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
         'error',
         { extensions: ['.js', '.jsx'] },
      ],
      'import/prefer-default-export': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/jsx-one-expression-per-line': 'off',
      'global-require': 'off',
      'react-native/no-raw-text': 'off',
      'no-param-reassign': 'off',
      'no-underscore-dangle': 'off',
      camelcase: 'off',
      'no-console': ['error', { allow: ['tron'] }],
      'react/require-default-props': ['off'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-nested-ternary': ['off'],
      'import-helpers/order-imports': [
         'warn',
         {
            newlinesBetween: 'always', // new line between groups
            groups: [
               '/^react/',
               'module',
               '/^~/',
               ['parent', 'sibling', 'index'],
            ],
            alphabetize: { order: 'asc', ignoreCase: true },
         },
      ],
   },
};
