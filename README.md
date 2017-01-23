# PostCSS Camelize

[![Build Status](https://travis-ci.org/robinvdvleuten/postcss-camelize.svg?branch=master)](https://travis-ci.org/robinvdvleuten/postcss-camelize)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A [PostCSS](https://github.com/postcss/postcss) plugin for camelizing strings;

```css
.camelize(a-non-camelized-selector) {
    /* Input example */
}

.camelize(a-non-camelized-selector--with-modifier) {
    /* Input example */
}
```

```css
.aNonCamelizedSelector {
  /* Output example */
}

.aNonCamelizedSelector--withModifier {
    /* Input example */
}
```

## Installation

```
$ yarn add postcss-camelize --dev
```

Alternatively using npm:

```
$ npm install postcss-camelize --save-dev
```

## Usage

```js
postcss([ require('postcss-camelize') ])
```

## License

MIT © [Robin van der Vleuten](https://www.robinvdvleuten.nl)
