module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // Side effect imports.
            '^\\u0000',
            // Node.js builtins prefixed with `node:`.
            '^node:',
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            '^@?\\w',
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            '^',
            // Relative imports.
            // Anything that starts with a dot.
            '^\\.',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
  },
};
