'use strict';

function amountOfPages(summary) {
  let counter = 0;
  let i = 0;
  while (counter < summary) {
      i++;
      counter += (i+'').length;
  }
  return i;
}
