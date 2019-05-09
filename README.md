[![NPM Version][npm-image]][npm-url]

# tslint-config-flowio

A package that provides our tslint TypeScript linting rules as extensible shared config.

## Installation

Install the correct versions of each package, which are listed by the command:

```
npm info "@flowio/tslint-config-flowio@latest" peerDependencies
```

Linux / OSX users can simply run:

```
npm info "@flowio/tslint-config-flowio@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "@flowio/tslint-config-flowio@latest"
```

Windows users can either install all the peer dependencies manually, or use the `install-peerdeps` cli tool.

```
npm install -g install-peerdeps
install-peerdeps --dev @flowio/tslint-config-flowio
```

## Usage

Extend the config in a `tslint.json` or `tslint.yaml` file:

```json
{
  "extends": "@flowio/tslint-config-flowio"
}
```

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