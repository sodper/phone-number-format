/*
 * phone-number-format
 * https://github.com/sodper/phone-number-format
 *
 * Copyright (c) 2017 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

exports.format = function(input) {
  if (!input)
    return '';
  
  var formatted = [], digitCount = 0;
  
  for(var i = 0; i < input.length; i++) {
    if (insertDash()) {
      formatted.push('-');
      digitCount = 0;
    }

    var currentValue = input[i];

    if (currentValue == ' ' || currentValue == '-') {
      continue;
    }

    formatted.push(currentValue);
    digitCount++;
  }

  return formatted.join('');

  ////

  function insertDash() {
    return digitCount === 3;
  }
};