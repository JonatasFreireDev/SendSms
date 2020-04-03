module.exports = {
   env: {
      es6: true,
      node: true,
   },
   extends: ['airbnb-base', 'prettier'],
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
   },
   parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
   },
   plugins: ['prettier', 'eslint-plugin-import-helpers'],
   rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-param-reassign': 'off',
      camelcase: 'off',
      'linebreak-style': 'off',
      'class-methods-use-this': 'off',
      'import-helpers/order-imports': [
         'warn',
         {
            newlinesBetween: 'always', // new line between groups
            groups: ['module', '/^~/', ['parent', 'sibling', 'index']],
            alphabetize: { order: 'asc', ignoreCase: true },
         },
      ],
   },
};
