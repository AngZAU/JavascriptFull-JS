'use strict';
/*
let id = Symbol("id");
const obj = {
  name:'Test',
  [Symbol("id")]:1,
  getId: function(){
    return this[id];
  }
}
*/
//let id = Symbol("id");
//let id2 = Symbol("id");
//console.log(id==id2);
//obj[id] = 1;
//console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

//for(let value in obj) console.log(value);

const myAwesomeDB = {
  movies:[],
  actors:[],
  id:123
}

//Here is not my code

myAwesomeDB.id = '1234234252543543';

console.log(myAwesomeDB["id"]);
