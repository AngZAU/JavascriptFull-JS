'use strict';

function User(name, id){
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function(){
    console.log(`Hello ${this.name}`);
  }
}

User.prototype.exit = function(name){
  console.log(`User ${this.name} go out`);
}

const ivan = new User('Ivan',28);
const masha = new User('Masha',30);
ivan.hello();
masha.hello();

ivan.exit();

console.log(ivan);
console.log(masha);
