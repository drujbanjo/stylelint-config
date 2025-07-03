/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    "stylelint-config-standard"
  ],
  overrides: [
    {
      files: ["*.js"],
      customSyntax: "postcss-lit"
    }
  ],
  rules: {
    "no-empty-source": null,
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "block-no-empty": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "string-quotes": "double",
    "selector-pseudo-element-colon-notation": "double"
  },
  ignoreFiles: [
    "**/node_modules/**"
  ]
}
