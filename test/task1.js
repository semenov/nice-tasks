'use strict';

const assert = require('assert');
const calculate = require('../src/task1');

describe('Task 1: bit calculator', () => {
  it('calculates a bit string sum', () => {
    assert(calculate('10', '10') === 4);
    assert(calculate('10', '0') === 2);
    assert(calculate('101', '10') === 7);
  });

  it('throws an error if the string is not binary', () => {
    assert.throws(() => {
      calculate('123', '456');
    }, Error);
  });
});
