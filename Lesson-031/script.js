'use strict'

function learnJS(lang, callback){
  console.log(`I learn: ${lang}`);
  callback();
}
learnJS('javaScript',function(){
  console.log('I have finished this lesson');
});
/*
function f1() {
  console.log("I learn JS");
}

function f2(callback) {
  callback();
  console.log("Lesson 31");
}

f2(f1);
*/
