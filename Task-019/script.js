'use strict';

function isPangram(string) {
  let abc = "abcdefghijklmnopqrstuvwxyz".split('');
  for (let i = 0; i < abc.length; i++) {
    if (string.indexOf(abc[i].toLowerCase()) !== -1) {
      continue;
    } else if (string.indexOf(abc[i].toUpperCase()) !== -1) {
      continue;
    }
    return false;
  }
  return true;
}
