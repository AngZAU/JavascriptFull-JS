// Место для первой задачи
//function firstTask() {
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
/*    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i=0; i < arr.length; i++ ){
      result[i] = arr[i];
      console.log(result[i]);
    }
  */
// Пишем решение вот тут


// Не трогаем
//return result;
//}

// Место для второй задачи
//function secondTask() {
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
/*  const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i=0; i < data.length; i++ ){
      if(typeof(data[i]) === "number"){
        data[i] = data[i]*2;
      } else if (typeof(data[i]) === "string") {
        data[i] = data[i] + " - done";
      }
      console.log(data[i]);
    }
*/
// Пишем решение вот тут


// Не трогаем
//  return data;
//}

// Место для третьей задачи
//function thirdTask() {
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
/*
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    let j = 0;
*/
// Пишем решение вот тут
/*
    for(let i = data.length-1; i >= 0; i--){
      result[j] = data[i];
      console.log( result[j] );
      j++;
    }
*/
// Не трогаем
//  return result;
//}
/*
function firstTask() {
  const lines = 5;
  let result = '';

  for (let i = 0; i <= lines; i++) {
    for (let j = lines - i; j > 0; j--) {
      result += ' ';
    }

    for (let j = i * 2 + 1; j > 0; j--) {
      result += '*';
    }
    result += "\n";
  }
  console.log(result);
  return result;
}

 Место для первой задачи
function sayHello(name) {
  return 'Привет, ' + name + '!';
}

 Место для второй задачи
function returnNeighboringNumbers(number) {
  let arr = [];
  arr[0] = number - 1;
  arr[1] = number;
  arr[2] = number + 1;
  return arr;
}
*/
// Место для третьей задачи
/*
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
*/
//упражнение 7 в раздле функции
// Место для первой задачи
/*
function calculateVolumeAndArea(lengthRib) {
  let tempResultVolume;
  let tempResultArea;
  if (typeof(lengthRib) === 'number' && Number.isInteger(lengthRib) && lengthRib > 0 && lengthRib !== 0) {
    tempResultVolume = lengthRib * lengthRib * lengthRib;
    tempResultArea = 6 * (lengthRib * lengthRib);
    return `Объем куба: ${tempResultVolume}, площадь всей поверхности: ${tempResultArea}`;
  } else {
    return  'При вычислении произошла ошибка';
  }
}
*/
/*
// Место для второй задачи
function getCoupeNumber(numberPlase) {
  if (typeof(numberPlase) !== 'number' || !Number.isInteger(numberPlase) || numberPlase < 0) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  } else if (numberPlase === 0 || numberPlase > 36) {
    return 'Таких мест в вагоне не существует';
  } else {
    console.log(Math.ceil(numberPlase / 4));
    return Math.ceil(numberPlase / 4);
  }
}
*/

//упражнение 8 в раздле функции
// Место для первой задачи
/*
function getTimeFromMinutes(numberMinutes) {
  let hours;
  let tempMinutes;
  if (numberMinutes < 0 || typeof(numberMinutes) !== "number" || !Number.isInteger(numberMinutes)) {
    return "Ошибка, проверьте данные";
  } else if (numberMinutes === 0) {
    return "Это 0 часов и 0 минут";
  }

  hours = Math.floor(numberMinutes / 60);
  tempMinutes = numberMinutes - (hours * 60);
  if (hours === 1) {
    return `Это ${hours} час и ${tempMinutes} минут`;
  } else if (hours >= 2 || hours <= 4) {
    return `Это ${hours} часа и ${tempMinutes} минут`;
  }
  return `Это ${hours} часов и ${tempMinutes} минут`;

}
*/
// Место для второй задачи
/*
function findMaxNumber(number1, number2, number3, number4) {
  if (typeof(number1) !== "number" || typeof(number2) !== "number" || typeof(number3) !== "number" || typeof(number4) !== "number") {
    return 0;
  }
  return Math.max(number1, number2, number3, number4);
}
*/
//упражнение 9 в раздле функции
/*
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
*/

'use strict'
