'use strict'

// Место для первой задачи
function getTimeFromMinutes(numberMinutes) {
  let hours;
  let tempMinutes;
  if (numberMinutes < 0 || typeof(numberMinutes) !== "number" || !Number.isInteger(numberMinutes)) {
    return "Ошибка, проверьте данные";
  } else if (numberMinutes === 0) {
    return "Это 0 часов и 0 минут";
  }

  hours = Math.floor(numberMinutes / 60);
  tempMinutes = numberMinutes - (hours * 60);
  if (hours === 1) {
    return `Это ${hours} час и ${tempMinutes} минут`;
  } else if (hours >= 2 || hours <= 4) {
    return `Это ${hours} часа и ${tempMinutes} минут`;
  } else if (hours===0 || hours > 4) {
    return `Это ${hours} часов и ${tempMinutes} минут`;
  }
}

// Место для второй задачи
function findMaxNumber(number1, number2, number3, number4) {
  if (typeof(number1) !== "number" || typeof(number2) !== "number" || typeof(number3) !== "number" || typeof(number4) !== "number") {
    return 0;
  }
  return Math.max(number1, number2, number3, number4);
}
