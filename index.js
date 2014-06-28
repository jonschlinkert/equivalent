/*!
 * equivalent <https://github.com/jonschlinkert/equivalent>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function equivalent() {
  var args = [].slice.call(arguments);
  var filepath = path.resolve(args[0]);

  args.shift();
  var len = args.length;

  for (var i = 0; i < len; i++) {
    if (filepath !== path.resolve(args[i])) {
      return false;
    }
  }
  return true;
};