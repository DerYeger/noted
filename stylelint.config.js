module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-prettier',
  ],
  customSyntax: 'postcss-html',
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'value-no-vendor-prefix': null,
  },
}
