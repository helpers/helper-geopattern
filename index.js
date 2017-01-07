'use strict';

var camelcase = require('camel-case');
var extend = require('extend-shallow');
var geo = require('geopattern');

module.exports = function(config) {
  return function(word, options) {
    var opts = extend({}, config, options);
    opts = extend({}, opts, opts.hash);

    if (typeof opts.generator === 'string') {
      opts.generator = camelcase(opts.generator);
    }

    delete opts.data;
    delete opts.hash;
    return geo.generate(word, opts).toDataUrl();
  };
};

module.exports.color = function(config) {
  return function(word, options) {
    var opts = extend({}, config, options);
    opts = extend({}, opts, opts.hash);

    if (typeof opts.generator === 'string') {
      opts.generator = camelcase(opts.generator);
    }

    delete opts.data;
    delete opts.hash;
    return geo.generate(word, opts).color;
  };
};
