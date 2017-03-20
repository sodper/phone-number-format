'use strict';

var formatter = require('../lib/phone-number-format.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var formatTests = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.equal(formatter.format(), '', 'should return empty string.');
    test.done();
  }
};

function createTest(input, expected) {
  formatTests[input] = function(test) {
    test.expect(1);
    test.equal(formatter.format(input), expected);
    test.done();
  };
}

createTest('', '');
createTest('22', '22');
createTest('123456', '123-456');
createTest('12 3456', '123-456');

exports['phone-number-format-tests'] = formatTests;