export const prettier = {
  $schema: 'https://json.schemastore.org/prettierrc',
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
  plugins: [
    require.resolve('prettier-plugin-sh'), // 可以对 shell 脚本、Dockerfile, gitignore 等进行格式化
    require.resolve('prettier-plugin-organize-imports'), // import 排序 组合 去除无用
    require.resolve('prettier-plugin-packagejson'), // package.json 里面的 key 好好排序
    require.resolve('prettier-plugin-sort-json'), // json 按照属性名进行排序
    require.resolve('@trivago/prettier-plugin-sort-imports'), // 根据给定的规则进行排序和分割
  ],
  printWidth: 100,
  proseWrap: 'never',
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
