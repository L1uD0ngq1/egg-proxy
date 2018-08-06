# egg-proxy

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-proxy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-proxy-b
[travis-image]: https://img.shields.io/travis/eggjs/egg-proxy.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-proxy-b
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-proxy.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-proxy-b?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-proxy.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-proxy-b
[snyk-image]: https://snyk.io/test/npm/egg-proxy/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-proxy-b
[download-image]: https://img.shields.io/npm/dm/egg-proxy.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-proxy-b

<!--
Description here.
-->

## Install

```bash
$ npm i egg-proxy --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.proxy = {
  enable: true,
  package: 'egg-proxy-b',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.proxy = {
  host: 'http://localhost:9000', // target host that matched path will be proxy to
  match: /\/assets/ // path pattern or function.
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/xxeric/egg-proxy-b/issues).

## License

[MIT](LICENSE)
