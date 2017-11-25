# [@fav/prop.enum-own-props][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Lists enumerable own property content objects of an object.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/prop.enum-own-props
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/prop.enum-own-props/` directory manually.*


## Usage

For Node.js:

```js
var enumOwnProps = require('@fav/prop.enum-own-props');
enumOwnProps({ a: 1, b: true, c: 'C' }); // => [{ key: 'a' value: 1 }, { key: 'b', value: true }, { key: 'c', value: 'C' }]

function Fn() { this.a = 1; }
Fn.prototype.b = true;
var fn = new Fn();
Object.defineProperty(fn, 'c', { value: 'C' });
enumOwnProps(fn); // => [{ key: 'a', value: 1 }]
```

For Web browsers:

```html
<script src="fav.prop.enum-own-props.min.js"></script>
<script>
var enumOwnProps = fav.prop.enumOwnProps;
enumOwnProps({ a: 1, b: true, c: 'C' }); // => [{ key: 'a', value: 1 }, { key: 'b', value: true }, { key: 'c', value: 'C' }]
</script>
```


## API

### <u>enumOwnProps(obj) : Array</u>

Lists enumerable own property content objects of the given object.

A property content object is a plain object having `key` and `value` properties, and the values of `key` and `value` are same with the first and second elements of each entry of `Object.entries(obj)`'s result array. 

#### Parameter:

| Parameter |  Type  | Description                             |
|-----------|:------:|-----------------------------------------|
| *obj*     | object | The object to be listed its properties. |

#### Return:

An array of property content objects.

**Type:** Array


## Checked                                                                      

### Node.js (4〜9)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-prop.enum-own-props/
[npm-img]: https://img.shields.io/badge/npm-v0.3.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/prop.enum-own-props
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-prop.enum-own-props.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-prop.enum-own-props
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-prop.enum-own-props?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-prop-enum-own-props
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-prop.enum-own-props/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-prop.enum-own-props?branch=master
