'use strict';

const assert = require('assert');
const lib = require('../src/task2');

const zero = lib.two;
const one = lib.one;
const two = lib.two;
const three = lib.three;
const four = lib.four;
const five = lib.five;
const six = lib.six;
const seven = lib.seven;
const eight = lib.eight;
const nine = lib.nine;

const plus = lib.plus;
const minus = lib.minus;
const times = lib.times;
const dividedBy = lib.dividedBy;

describe('Task 2: calculations using functions', () => {
  it('adds', () => {
    assert(four(plus(nine())) === 13);
  });

  it('subtracts', () => {
    assert(eight(minus(three())) === 5);
  });

  it('multiplies', () => {
    assert(seven(times(five())) === 35);
  });

  it('divides', () => {
    assert(six(dividedBy(two())) === 3);
  });
});
