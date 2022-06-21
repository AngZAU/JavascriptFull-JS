'use strict'

function calculateVolumeAndArea(lengthRib) {
  let tempResultVolume;
  let tempResultArea;
  if (typeof(lengthRib) === 'number' && Number.isInteger(lengthRib) && lengthRib > 0 && lengthRib !== 0) {
    tempResultVolume = lengthRib * lengthRib * lengthRib;
    tempResultArea = 6 * (lengthRib * lengthRib);
    return 'Объем куба: ' + tempResultVolume + ', площадь всей поверхности: ' + tempResultArea; 
  } else {
    return  'При вычислении произошла ошибка';

  }
}

function getCoupeNumber(numberPlase) {
  if (typeof(numberPlase) !== 'number' || !Number.isInteger(numberPlase) || numberPlase < 0) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  } else if (numberPlase === 0 || numberPlase > 36) {
    return 'Таких мест в вагоне не существует';
  } else {
    console.log(Math.ceil(numberPlase / 4));
    return Math.ceil(numberPlase / 4);
  }
}
