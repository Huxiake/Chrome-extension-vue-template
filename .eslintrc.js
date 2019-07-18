module.exports = {
  'extends': 'plugin:vue/recommended',
  'rules': {
    'vue/html-indent': ['error', 4],
    'vue/max-attributes-per-line': 0,
    'vue/require-prop-type-constructor': 0
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  }
}