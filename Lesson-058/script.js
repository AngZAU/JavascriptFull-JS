'use strict';

const user = {
  name: 'Alex',
  surname: 'Smith',
  birthday: '20/04/1993',
  showPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
}

//for(const key in user){
//console.log(user[key]);
//}
// for(..in..) не обязательно перебирает по порядку массивы и строки
//получаем ключ перебираемого объекта

// for(..of..) получаем значение перебираемого объекта
//console.dir() выводит свой аргумент в качестве объекта
//Если Prototype есть Symbol(Symbol.iterator) значит массив перебираемый
// к перебираемым относятся массивы, строки, типизированные массивы, set, map
//DOM коллекции

//const arr = ['b','c','a'];
//Array.prototype.someMethod = function(){};
/*
for(const key of arr){
  console.log(key);
}
*/
/*
const str = 'string';
for(const key in str){
  console.log(str[key]);
}
*/

const salaries = {
  John: 500,
  Ivan: 5000,
  Anna: 1000,
  sayHello: function() {
    console.log('Hello');
  }
}

salaries[Symbol.iterator] = function() {
  return {
    current: this.John,
    last: this.Ivan,
    next() {
      if (this.current < this.last) {
        this.current += 500;
        return {
          done: false,
          value: this.current
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
/*
for (let res of salaries) {
  console.log(res);
}
*/
