'use strict';
const deadLine = '2020-05-11';

function getTimeRemaining(endTime) {
  const t = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.quertySelector(selector),
    days = timer.quertySelector('#days'),
    hours = timer.quertySelector('#hours'),
    minutes = timer.quertySelector('#minutes'),
    seconds = timer.quertySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(endtime);
    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }

  }
}
