'use strict';

require('mocha');
var assert = require('assert');
var handlebars = require('handlebars');
var helper = require('..');

describe('helper-geopattern', function() {
  describe('helper', function() {
    it('should work as a function', function() {
      var str = helper()('foo-bar');
      assert(/url\(/.test(str));
    });
  });

  describe('handlebars', function() {
    it('should work as a handlebars helper', function() {
      handlebars.registerHelper('geopattern', helper());
      var fn = handlebars.compile('{{geopattern "foo-bar"}}');
      var str = fn();
      assert(/url\(/.test(str));
    });
  });
});
