module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
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
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './'],
          ['@src', './src'],
          ['@controller', './src/controller'],
          ['@entity', './src/entity'],
          ['@mapper', './src/mapper'],
          ['@service', './src/service'],
          ['@util', './src/util'],
        ],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    },
  },
};
