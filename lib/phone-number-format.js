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
  
  var formatted = [],
    digitCount = 0,
    digits = cleanInput(input),
    N = digits.length,
    i;
  
  for(var i = 0; i < N; i++) {
    if (insertDash()) {
      formatted.push('-');
      digitCount = 0;
    }
    formatted.push(digits[i]);
    digitCount++;
  }

  return formatted.join('');

  ////

  function insertDash() {
    return digitCount === 3 || isSingleDigitEnding();
  }

  function isSingleDigitEnding() {
    return ((N - 1) % 3 === 0) && (i === (N - 2));
  }

  function cleanInput(input) {
    return input.replace(/[ -]/g, '');
  }
};