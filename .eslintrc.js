module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  // parser: ['vue-eslint-parser'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
    'vue',
  ],
  rules: {
    'linebreak-style': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@src', './nodejs/src'],
          ['@controller', './nodejs/src/controller'],
          ['@instance', './nodejs/src/instance'],
          ['@model', './nodejs/src/model'],
          ['@util', './nodejs/src/util'],
        ],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    },
  },
};
