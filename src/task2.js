'use strict';

const number = n => operator => {
  if (typeof operator == 'function') {
    return operator(n);
  }

  return n;
}

const plus = a => b => b + a;
const minus = a => b => b - a;
const times = a => b => b * a;
const dividedBy = a => b => b / a;

const zero = number(0);
const one = number(1);
const two = number(2);
const three = number(3);
const four = number(4);
const five = number(5);
const six = number(6);
const seven = number(7);
const eight = number(8);
const nine = number(9);

module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy
};
