/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-tailwindcss"
  ],
  rules: {
    "no-empty-source": null,
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "block-no-empty": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "string-quotes": "double",
    "selector-pseudo-element-colon-notation": "double",
    "at-rule-no-unknown": null,
    "selector-class-pattern": null,
    "property-no-unknown": null
  },
  ignoreFiles: [
    "**/node_modules/**"
  ]
}
