<a name="readme-top"></a>

<div align="center">

<h1>YuntiJS Lint</h1>

ESlint, Stylelint, Commitlint, Prettier, Remark, Semantic Release config for YuntiJS, based on [Lobe Lint][lobe-int-link], eslint-config-tenx and stylelint-config-tenx.

</div>

[Changelog](./CHANGELOG.md) · [Report Bug][issues-link] · [Request Feature][issues-link]

<!-- SHIELD GROUP -->

[![][npm-release-shield]][npm-release-link]
[![][npm-downloads-shield]][npm-downloads-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

</div>

![](https://raw.githubusercontent.com/andreasbm/readme/main/assets/lines/rainbow.png)

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [📦 Installation](#-installation)
- [☁️ Usage](#️-usage)
  - [.npmrc](#npmrc)
  - [ESlint](#eslint)
  - [Prettier](#prettier)
  - [Stylelint](#stylelint)
  - [Commitlint](#commitlint)
  - [Changelog](#changelog)
  - [Semantic Release](#semantic-release)
  - [Remark](#remark)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)

####

</details>

## 📦 Installation

To install YuntiJS Lint, run the following command:

```bash
$ pnpm add eslint prettier @yuntijs/lint -D
```

To use template ignore files, run the following command:

```bash
$ curl -O https://raw.githubusercontent.com/yuntijs/yunti-lint/main/.eslintignore
$ curl -O https://raw.githubusercontent.com/yuntijs/yunti-lint/main/.gitignore
$ curl -O https://raw.githubusercontent.com/yuntijs/yunti-lint/main/.prettierignore
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ☁️ Usage

### .npmrc

please add the following to your `.npmrc` file first:

```text
public-hoist-pattern[]=*@umijs/lint*
public-hoist-pattern[]=*changelog*
public-hoist-pattern[]=*commitlint*
public-hoist-pattern[]=*eslint*
public-hoist-pattern[]=*postcss*
public-hoist-pattern[]=*prettier*
public-hoist-pattern[]=*remark*
public-hoist-pattern[]=*semantic-release*
public-hoist-pattern[]=*stylelint*
```

### ESlint

config can be found at [`.eslintrc.js`](/src/eslint/index.ts)

```js
module.exports = require('@yuntijs/lint').eslint;
```

### Prettier

config can be found at [`.prettierrc.js`](/src/prettier/index.ts)

```js
module.exports = require('@yuntijs/lint').prettier;
```

### Stylelint

install stylelint first:

```bash
$ pnpm add stylelint -D
```

config can be found at [`.stylelintrc.js`](/src/stylelint/index.ts)

```js
module.exports = require('@yuntijs/lint').stylelint;
```

### Commitlint

install commitlint first:

```bash
$ pnpm add commitlint -D
```

config can be found at [`.commitlintrc.js`](/src/commitlint/index.ts)

```js
module.exports = require('@yuntijs/lint').commitlint;
```

### Changelog

config can be found at [`.changelogrc.js`](/src/changelog/index.ts)

```js
module.exports = require('@yuntijs/lint').changelog;
```

### Semantic Release

install semantic-release first:

```bash
$ pnpm add semantic-release -D
```

config can be found at [`.releaserc.js`](/src/semantic-release/index.ts)

```js
module.exports = require('@yuntijs/lint').semanticRelease;
```

### Remark

install remark first:

```bash
$ pnpm add remark remark-cli -D
```

config can be found at [`.remarkrc.js`](/src/remarklint/index.ts)

```js
module.exports = require('@yuntijs/lint').remarklint;
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][codespaces-shield]][codespaces-link]

Or clone it for local development:

```bash
$ git clone https://github.com/yuntijs/yunti-lint.git
$ cd yuntijs/lint
$ pnpm install
$ pnpm start
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][contributors-contrib]][contributors-url]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2023 [YuntiJS][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[codespaces-link]: https://codespaces.new/yuntijs/yunti-lint
[codespaces-shield]: https://github.com/codespaces/badge.svg
[contributors-contrib]: https://contrib.rocks/image?repo=yuntijs/yunti-lint
[contributors-url]: https://github.com/yuntijs/yunti-lint/graphs/contributors
[github-action-release-link]: https://github.com/yuntijs/yunti-lint/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/yuntijs/yunti-lint/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/yuntijs/yunti-lint/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/yuntijs/yunti-lint/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-contributors-link]: https://github.com/yuntijs/yunti-lint/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/yuntijs/yunti-lint?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/yuntijs/yunti-lint/network/members
[github-forks-shield]: https://img.shields.io/github/forks/yuntijs/yunti-lint?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/yuntijs/yunti-lint/issues
[github-issues-shield]: https://img.shields.io/github/issues/yuntijs/yunti-lint?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/yuntijs/yunti-lint/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/yuntijs/yunti-lint?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/yuntijs/yunti-lint/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/yuntijs/yunti-lint?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/yuntijs/yunti-lint/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/yuntijs/yunti-lint?color=ffcb47&labelColor=black&style=flat-square
[issues-link]: https://github.com/yuntijs/yunti-lint/issues/new/choose
[lobe-int-link]: https://github.com/lobehub/lobe-lint
[npm-downloads-link]: https://www.npmjs.com/package/@yuntijs/lint
[npm-downloads-shield]: https://img.shields.io/npm/dt/@yuntijs/lint?labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/@yuntijs/lint
[npm-release-shield]: https://img.shields.io/npm/v/@yuntijs/lint?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/yuntijs/yunti-ui/pulls
[pr-welcome-shield]: https://img.shields.io/badge/☁️_pr_welcome-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/yuntijs
