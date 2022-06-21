'use strict'

function sortStudentsByGroups(arr) {
  arr.sort();
  let countArr = Math.floor(arr.length / 3);
  let restDivision = (arr.length % 3);
  let tempArr = [];
  let count = 0;
  let str = 'Оставшиеся студенты: ';
  for (let i = 0; i < countArr; i++) {
    tempArr[i] = [];
    for (let j = 0; j < 3; j++) {
      tempArr[i][j] = arr[count];
      count++;
    }
  }
  if (restDivision === 0) {
    str += '-';
  } else {
    str += arr.slice(-restDivision).join(', ');
  }
  tempArr.push(str);

  return tempArr;
}
