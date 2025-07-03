/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss"
  ],
  customSyntax: "postcss-scss",
  rules: {
    "no-empty-source": null,
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "block-no-empty": true,
    "unit-no-unknown": true,
    "property-no-unknown": null,
    "scss/dollar-variable-pattern": "^[_a-z][a-z0-9-]*$",
    "string-quotes": "double",
    "selector-pseudo-element-colon-notation": "double"
  },
  ignoreFiles: [
    "**/*.js",
    "**/*.ts",
    "**/*.jsx",
    "**/*.tsx",
    "**/node_modules/**"
  ]
}
