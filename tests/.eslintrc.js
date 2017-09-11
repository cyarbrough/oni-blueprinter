module.exports = {
  env: {
    es6: true,
    embertest: true,
    mocha: true
  },
  rules: {
    "no-unused-expressions": ["off"] // "expect().to" needs this
  }
};