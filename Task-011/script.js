'use strict'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  let str = "Семья";
  if (arr.length === 0){
    return str+" пуста";
  }
  return str+" состоит из: "+arr.join(' ')+' ';
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach(function(item, i, arr) {
    console.log(arr[i].toLowerCase());
  })
}
