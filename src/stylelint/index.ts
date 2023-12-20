export const stylelint = {
  $schema: 'https://json.schemastore.org/stylelintrc',
  extends: [
    require.resolve('@umijs/lint/dist/config/stylelint'),
    'stylelint-config-recommended',
    'stylelint-config-clean-order',
  ],
  overrides: [
    {
      customSyntax: 'postcss-less',
      files: ['*.less', '*.css'],
      plugins: ['stylelint-less'],
      rules: {
        'at-rule-no-unknown': undefined,
        'color-no-invalid-hex': true,
        'function-no-unknown': undefined,
        'less/color-no-invalid-hex': true,
      },
    },
    {
      customSyntax: 'postcss-styled-syntax',
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'no-empty-source': undefined,
        'no-invalid-double-slash-comments': undefined,
        'no-missing-end-of-source-newline': undefined,
        'property-no-vendor-prefix': true,
        'value-no-vendor-prefix': true,
      },
    },
  ],
  plugins: ['stylelint-order'],
  // ~ merge from stylelint-config-tenx
  rules: {
    'comment-empty-line-before': undefined,
    'declaration-empty-line-before': undefined,
    'function-comma-newline-after': undefined,
    'function-name-case': undefined,
    'function-parentheses-newline-inside': undefined,
    'function-max-empty-lines': undefined,
    'function-whitespace-after': undefined,
    'indentation': undefined,
    'no-descending-specificity': undefined,
    'number-leading-zero': undefined,
    'number-no-trailing-zeros': undefined,
    'rule-empty-line-before': undefined,
    'selector-combinator-space-after': undefined,
    'selector-list-comma-newline-after': undefined,
    'selector-pseudo-element-colon-notation': undefined,
    'unit-no-unknown': undefined,
    'value-list-max-empty-lines': undefined,
  },
};
