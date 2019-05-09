[![NPM Version][npm-image]][npm-url]

# tslint-config-flowio

A package that provides our tslint TypeScript linting rules as extensible shared config.

## Installation

```bash
npm install @flowio/tslint-config-flowio --save-dev
```

## Usage

Extend the config in a `tslint.json` file:

```json
{
  "extends": "@flowio/tslint-config-flowio"
}
```
or in a `tslint.yaml` file:

```yaml
extends: "@flowio/tslint-config-flowio"
```

## Acknowledgement

A special thanks to:

* [Airbnb](https://github.com/airbnb) for sharing their extensive tslint rules.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/@flowio/tslint-config-flowio.svg
[npm-url]: https://www.npmjs.com/package/@flowio/tslint-config-flowio