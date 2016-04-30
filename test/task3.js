'use strict';

const assert = require('assert');
const defaultArguments = require('../src/task3');

function add(a, b) {
  return a + b;
};

describe('Task 3: defaultArguments', () => {
  it('works with one default argument', () => {
    const add_ = defaultArguments(add, { b: 9 });
    assert(add_(10) === 19);
    assert(add_(10, 7) === 17);
    assert(Number.isNaN(add_()));
  });

  it('works with two default arguments', () => {
    const add_ = defaultArguments(add, { b: 3, a: 2 });
    assert(add_(10) === 13);
    assert(add_() === 5);
  });

  it('works with unused default argument', () => {
    const add_ = defaultArguments(add, { c: 3 });
    assert(Number.isNaN(add_(10)));
    assert(add_(10, 10) === 20);
  });

});
