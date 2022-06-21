'use strict'

function sortStudentsByGroups1(arr) {
  arr.sort();
  let tempArr = [[]];
  let str = 'Оставшиеся студенты: ';
  for (let i = 0; i < arr.length; i++) {
    if (tempArr[tempArr.length - 1].length === 3) {
      tempArr.push([]);
    }
    tempArr[tempArr.length - 1].push(arr[i]);
  }
  if (tempArr[tempArr.length - 1].length < 3) {
    tempArr[tempArr.length - 1] = str + tempArr[tempArr.length - 1].join(', ');
  } else {
    tempArr.push(str+'-');
  }

  return tempArr;
}
