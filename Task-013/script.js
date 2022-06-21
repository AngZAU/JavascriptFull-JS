'use strict'

const shoppingMallData = {
  shops: [{
      width: 10,
      length: 5
    },
    {
      width: 15,
      length: 7
    },
    {
      width: 20,
      length: 5
    },
    {
      width: 8,
      length: 10
    }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let tempArrSquare = [];
  let width,
    length,
    volume = 0;

  for (let i = 0; i <= data['shops'].length - 1; i++) {
    ({
      width,
      length
    } = data['shops'][i]);
    tempArrSquare[i] = width * length;
  }

  tempArrSquare.forEach(function(item, i, arr) {
    volume += item;
  });
  volume *= data['height'];

  if (data['budget'] >= volume * data['moneyPer1m3']) {
    return 'Бюджета достаточно';
  } else {
    return 'Бюджета недостаточно';
  }
}
