'use strict'

function fib(count) {
  let str = "";
  let number = 1;
  let arr = [];
  let j = 1;

  if (count === 0 || typeof(count) !== "number" || !Number.isInteger(count)) {
    return '';
  }

  if (count === 1){
    return "0";
  }
  arr[0] = 0;
  arr[1] = number;
  for (let i = count - 1; i > 0; i--) {
    arr[j] = arr[j - 1] + number;
    number = arr[j - 1];
    j++;
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    str += arr[i];
    if (i < arr.length - 1){
      str += " ";
    }
  }

  return str;
}
