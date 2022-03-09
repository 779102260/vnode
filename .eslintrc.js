module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'google',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      process.env.NODE_ENV === 'production' ? 'off' : 'error',
      {
        printWidth: 100,
        endOfLine: 'auto',
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-promise-reject-errors': 'off',
    'valid-jsdoc': 'off',
    'no-invalid-this': 'off',
    'require-jsdoc': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  },
  parser: '@typescript-eslint/parser'
}
