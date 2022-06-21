'use strict'

const arr =[1,2,3,5,4,6];

arr.pop();
arr.push(10);
console.log(arr);

arr.sort(compareNum);

arr.forEach(function(item, i,arr) {
  console.log(`${i}: ${item} inside array ${arr}`);
});

function compareNum(a,b){
  return a-b;
}

for(let value of arr) {
  console.log(value);
}

const str = prompt("","");
const products = str.split("","");
products.sort();
console.log(products.join('; '));
