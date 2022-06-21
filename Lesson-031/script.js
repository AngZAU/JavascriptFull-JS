'use strict'

function f1() {
  console.log("I learn JS");
}

function f2(callback) {
  callback();
  console.log("Lesson 31");
}

f2(f1);
