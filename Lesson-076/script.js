'use strict';
/*
function showThis(a,b){
  console.log(this);
  function sum(){
    console.log(this);
    return a + b;
  }
  console.log(sum());
}

showThis(4,5);
*/
/*
const obj = {
  a: 20,
  b: 15,
  sum: function(){
    function shout(){
      console.log(this);
    }
    shout();
    console.log(this);
  }
};
obj.sum();
*/

/*
function User(name, id){
  this.name = name;
  this.id = id;
  this.human = true;
}

const ivan = new User('Ivan',28);
*/
/*
function sayName(surname){
  console.log(this);
  console.log(this.name);
}

const user = {
  name:'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);
*/
/*
function count(num){
  return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));
*/
/*
1) Обычная функция: this  = windows, but you use 'use strict' - undefinde
2)  Контекст у методов объекта = сам объект
3) this в конструкторах и классах - это новый экземпляр объекта
4) Ручная привязка this: call, apply,bind
*/

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
  console.log(this);
});
