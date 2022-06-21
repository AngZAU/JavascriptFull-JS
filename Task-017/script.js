'use strict'

function factorial(num) {
  let x = 1;
  if (typeof(num) !== 'number'|| !Number.isInteger(num)) {
      return "Передано не число";
  } else if (num <= 0) {
    return x;
  } else {
    let result = num * factorial(num - 1);
    return result;
  }
}
