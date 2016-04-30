'use strict';

const argsRegexp = /function[^(]*\(([^)]*)\)/;

function parseFunctionArguments(fn) {
  const source = fn.toString();
  const res = source.match(argsRegexp);
  const argumentsString = res[1];
  const argumentsArray = argumentsString.split(/,\s*/);

  return argumentsArray;
}

function defaultArguments(fn, params) {
  const argumentNames = parseFunctionArguments(fn);

  function extendedFn() {
    const newArguments = argumentNames.map((name, index) => {
      if (arguments[index] !== undefined) {
        return arguments[index];
      } else {
        return params[name];
      }
    });

    return fn.apply(this, newArguments);
  }

  return extendedFn;
}

module.exports = defaultArguments;
