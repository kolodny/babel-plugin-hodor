# babel-plugin-hodor

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]


Babel plugin to hodor. Inspired by https://redd.it/4dqlbr

![Hodor](/hodor.jpg)

## Installation

```sh
$ npm install babel-plugin-hodor
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["hodor"]
}
```

### Via CLI

```sh
$ babel --plugins hodor script.js
```

### Via Node API

```javascript
require('babel').transform('code', {
  plugins: ['hodor']
});
```

### Example

```javascript
// input
const foo = bar => {
  const baz = 123;
  return bar + baz;
}

// output
"use strict";

var hodor = function hodor(Hodor) {
  var hodOr = 123;
  return Hodor + hodOr;
};

```

[npm-image]: https://img.shields.io/npm/v/babel-plugin-hodor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/babel-plugin-hodor
[travis-image]: https://img.shields.io/travis/kolodny/babel-plugin-hodor.svg?style=flat-square
[travis-url]: https://travis-ci.org/kolodny/babel-plugin-hodor
[downloads-image]: http://img.shields.io/npm/dm/babel-plugin-hodor.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/babel-plugin-hodor
