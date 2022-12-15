module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 0,
    'no-extra-semi': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './'],
          ['@src', './src'],
          ['@controller', './src/controller'],
          ['@instance', './src/instance'],
          ['@model', './src/model'],
          ['@util', './src/util'],
        ],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    },
  },
};
