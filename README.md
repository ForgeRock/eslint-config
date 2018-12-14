<div align="center">
  <img width="120" src="logo.png">
  <h1>ForgeRock ESLint Shareable Configuration</h1>
  ForgeRock’s JavaScript Style Guide as a ESLint Shareable Configuration.
  <p>
  <div>
    <a href="https://www.npmjs.com/package/@forgerock/eslint-config">
      <img src="https://img.shields.io/npm/v/@forgerock/eslint-config.svg?style=flat-square">
    </a>
    <img src="https://img.shields.io/david/forgerock/eslint-config.svg?style=flat-square">
  </div>
</div>

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [via Yarn](#via-yarn)
  - [via NPM](#via-npm)
- [Usage](#usage)
  - [Built-In](#built-in)
  - [Filenames](#filenames)
  - [JSX a11y](#jsx-a11y)
  - [Promise](#promise)
  - [React](#react)
- [Contributing](#contributing)

## Prerequisites

ForgeRock ESLint Shareable Configuration requires [ESLint][eslint] 5.x.

## Installation

### via Yarn

```sh
yarn add @forgerock/eslint-config
```

### via NPM

```sh
npm install @forgerock/eslint-config
```

## Usage

Add one or more of the following rule sets to the `extends` section of your `.eslintrc.js` configuration.

### Built-In

```json
extends: ["@forgerock"]
```

Built-in rules provided by [ESLint][eslint-rules].

### Filenames

```json
extends: ["@forgerock/filenames"]
```

Filename rules provided by [eslint-plugin-filenames][eslint-plugin-filenames].

### JSX a11y

```json
extends: ["@forgerock/jsx-a11y"]
```

JSX accessiblity rules provided by [eslint-plugin-jsx-a11y][eslint-plugin-jsx-a11y].

### Promise

```json
extends: ["@forgerock/promise"]
```

Promise rules provided by [eslint-plugin-promise][eslint-plugin-promise].

### React

```json
extends: ["@forgerock/react"]
```

React and JSX rules provided by [eslint-plugin-react][eslint-plugin-react].

## Contributing

Contribute to ForgeRock ESLint Shareable Configuration by opening a Pull Request.

[eslint-plugin-filenames]: https://github.com/selaux/eslint-plugin-filenames
[eslint-plugin-jsx-a11y]: https://github.com/evcohen/eslint-plugin-jsx-a11y
[eslint-plugin-promise]: https://github.com/xjamundx/eslint-plugin-promise
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-rules]: http://eslint.org/docs/rules
[eslint]: http://eslint.org
