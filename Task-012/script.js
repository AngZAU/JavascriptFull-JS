'use strict'

const someString = 'This is some strange string';

function reverse(str) {
  let tempStr;
  let tempItem;
  if (typeof(str) !== "string") {
    return "Ошибка!";
  }
  tempStr = str.split(' ').reverse();

  tempStr.forEach(function(item, i, tempStr) {
    tempItem = item.split('').reverse().join('');
    tempStr[i] = tempItem;
  })
  tempStr = tempStr.join(' ');
  return tempStr;
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  if (arr.length === 0) {
    return 'Нет доступных валют';
  }
  let str = "Доступные валюты:" + "\n";
  let tempIndex = arr.indexOf(missingCurr);

  for (let i = 0; i <= arr.length - 1; i++) {
    if (i === tempIndex) {
      continue;
    } else {
      str += arr[i] + "\n";
    }
  }
  return str;
}
