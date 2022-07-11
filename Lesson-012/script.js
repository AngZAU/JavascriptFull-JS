'use strict';

const arr = ['a', 'b', 'c'];
const arrObj = {
  a: 'a',
  '1': 'b',
  2: 'c'
}
const b = 'b';

arrObj.b = '123'

console.log(arrObj[1]);
//разбор функций
let age = prompt("How old are you?", 18);
let welcome = (age < 18) ?
  () => alert("Hi!") :
  () => alert("Hello");
welcome();

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() {
    alert("Вы согласились.");
  },
  function() {
    alert("Вы отменили выполнение.");
  }
);

let ask = confirm("Are you agree") ?
  () => alert("You are agree") :
  () => alert("You are not agree");
ask();
