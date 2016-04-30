'use strict';

function calculate(a , b) {
  return binToDec(a) + binToDec(b);
}

function binToDec(bitString) {
  const length = bitString.length;
  let result = 0;

  for (let i = 0; i < length; i++) {
    if (bitString[i] == '1') {
      const exponent = length - i - 1;
      result += Math.pow(2, exponent);
    } else if (bitString[i] != '0') {
      throw new Error('Not a binary string');
    }
  }

  return result;
}

module.exports = calculate;
