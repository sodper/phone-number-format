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

exports['phone-number-format-tests'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.equal(formatter.format(), '', 'should return empty string.');
    test.done();
  },
  '22': function(test) {
    test.expect(1);
    // tests here
    test.equal(formatter.format('22'), '22', 'should return "22"');
    test.done();
  },
  '123456': function(test) {
    test.expect(1);
    // tests here
    test.equal(formatter.format('123456'), '123-456', 'should return "123-456"');
    test.done();
  },
};
