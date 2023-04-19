module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'plugin:storybook/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react'],
  settings: { react: { version: 'detect' } },
  rules: {
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/explicit-function-return-type':
      'off',
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-confusing-void-expression':
      'error',
    '@typescript-eslint/member-delimiter-style': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off'
  }
};
