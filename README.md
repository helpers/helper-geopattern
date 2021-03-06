# helper-geopattern [![NPM version](https://img.shields.io/npm/v/helper-geopattern.svg?style=flat)](https://www.npmjs.com/package/helper-geopattern) [![NPM monthly downloads](https://img.shields.io/npm/dm/helper-geopattern.svg?style=flat)](https://npmjs.org/package/helper-geopattern)  [![NPM total downloads](https://img.shields.io/npm/dt/helper-geopattern.svg?style=flat)](https://npmjs.org/package/helper-geopattern) [![Linux Build Status](https://img.shields.io/travis/helpers/helper-geopattern.svg?style=flat&label=Travis)](https://travis-ci.org/helpers/helper-geopattern)

> Template helper for generating a geometric SVG pattern for CSS backgrounds using btmills/geopattern

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save helper-geopattern
```

## Usage

Example for handlebars, but this should work for any template engine that takes helpers or filters.

```js
var geopattern = require('helper-geopattern');
var handlebars = require('handlebars');

// the helper is a function that must be called when registered,
// allowing you to pass in default options to use
handlebars.registerHelper('geopattern', geopattern([options]));
```

## Examples

Generate the geopattern based on page `title` (which would need to exist on the context):

```handlebars
<style>
  .page-header { 
    background-image: {{geopattern title}};
  }
</style>
```

**generator**

Optionally specify the "generator" to use, which is the geometric shape. See Jason Long's [geo_pattern](https://github.com/jasonlong/geo_pattern) library for examples of all available generators.

```handlebars
<div style="background-image: {{geopattern title generator="octogons"}}"></div>
```

**color**

Optionally specify the "color" to use

```handlebars
<div style="background-image: {{geopattern title color="#900"}}"></div>
```

## About

### Related projects

* [handlebars-helpers](https://www.npmjs.com/package/handlebars-helpers): More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate… [more](https://github.com/assemble/handlebars-helpers) | [homepage](https://github.com/assemble/handlebars-helpers "More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate, Verb, Ghost, gulp-handlebars, grunt-handlebars, consolidate, or any node.js/Handlebars project.")
* [helper-html-table](https://www.npmjs.com/package/helper-html-table): Create an HTML table from JSON configuration. | [homepage](https://github.com/helpers/helper-html-table "Create an HTML table from JSON configuration.")
* [helper-octicon](https://www.npmjs.com/package/helper-octicon): Template helper for displaying octicon SVGs. Should work with any Handlebars, Lo-Dash, underscore or any… [more](https://github.com/helpers/helper-octicon) | [homepage](https://github.com/helpers/helper-octicon "Template helper for displaying octicon SVGs. Should work with any Handlebars, Lo-Dash, underscore or any template engine that allows helper functions to be registered. Also compatible with verb, assemble, and templates.")
* [helper-uigradient](https://www.npmjs.com/package/helper-uigradient): Template helper that generates the CSS for any of the gradients from Ghosh/uiGradients | [homepage](https://github.com/helpers/helper-uigradient "Template helper that generates the CSS for any of the gradients from Ghosh/uiGradients")
* [template-helpers](https://www.npmjs.com/package/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or… [more](https://github.com/jonschlinkert/template-helpers) | [homepage](https://github.com/jonschlinkert/template-helpers "Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or any engine that supports helper functions.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for avice on opening issues, pull requests, and coding standards.

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.3.0, on January 06, 2017._