'use strict';
//не доделаная задача на рекурсию
function deepCount(a){
  let count = a.length;
  a.forEach((item)=>{
    if (Array.isArray(item)) count +=  deepCount(item);
  });
  return count;
}
