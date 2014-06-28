/*!
 * equivalent <https://github.com/jonschlinkert/equivalent>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var equivalent = require('../');

describe('equivalent:', function () {
  it('should return true if paths are equivalent.', function () {
    expect(equivalent('a/b', 'a\\c')).to.be.false;
    expect(equivalent('a/b', 'a\\b')).to.be.true;
    expect(equivalent('a/b', 'a/b/')).to.be.true;
    expect(equivalent('/a/b/', '/a/b/')).to.be.true;
    expect(equivalent('/a/b/', '/a/b')).to.be.true;
    expect(equivalent('/a/b/', '/a//b')).to.be.true;
  });
});