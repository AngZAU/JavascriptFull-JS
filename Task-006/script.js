'use strict'

// Место для первой задачи
function sayHello( name ) {
  return 'Привет, ' + name+'!';
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
  let arr = [];
  arr[0] = number-1;
  arr[1] = number;
  arr[2] = number+1;
  return arr;
}

// Место для третьей задачи
function getMathResult(numberFirst, numberSecond) {
  let str = '';
  if (typeof(numberSecond) === 'number' && numberSecond !== 0 && numberSecond > 0) {
    for (let i = 1; i <= numberSecond; i++) {
      str += numberFirst * i;
      if (i < numberSecond) {
        str += '---';
      } else {
        return str;
      }
    }
  } else {
    return numberFirst;
  }
}
