'use strict';
/*
const user = {
  name: 'Alex',
  surname: 'Smith',
  //birthday: '20/04/1993',
  showPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
}
*/
//нельзя изменять дату рождения
/*
Object.defineProperty(user, 'birthday', {
  writable: false
});
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
*/
//user.birthday = '121212';
/*
Object.defineProperty(user, 'birthday', {
  value: prompt('Date?'),
  enumerable: true,
  configurable: true
});
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
*/
//метод не попадает в цикл для перебора
/*
Object.defineProperty(user, 'showPublicData', {
  enumerable: false
});
*/
//console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
//нельзя не изменить не удалить. Это можно установить только один раз
// свойство не будет реагировать на defineProperty
/*
Object.defineProperty(user, 'showPublicData', {
  enumerable: false
});

for (let key in user) console.log(key);
*/
//сразу же устанавливаем флаги у всех свойствах объекта
/*
Object.defineProperties(user,{
  name:{writable:false},
  surname:{writable:false}
})
*/
/*
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
Object.defineProperty(user, 'name', {
  writable: false
});
*/
//user.name = 'sdfsdfsfsdf';
//если создавать свойства вручную - все флаги стоят в true
//если создавать свойства при помощи defineProperty - все флаги стоят в false
/*
Object.defineProperty(user, 'gender', {
  value: 'male'
});
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
*/
//writable true - параметр можно изменить false - только для чтения
//enumerable - true - перечисляется в циклах false - циклы будут его игнорировать
//configurable - true - свойство можно удалить

//объекты не когда не бывают одинаковыми, даже если содержать одни и те же данные
//Object.is() - определяет, являются ли два значения различными(т.е. одинаковыми)
//Object.keys(),Object.values(), Object.entries()

//Работа с символами
const birthday = Symbol('birthday');

const user = {
  name: 'Alex',
  surname: 'Smith',
  [birthday]: '20/04/1993',
  showPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
}

for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));
