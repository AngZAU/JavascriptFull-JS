'use strict';

const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block');
//добавление класса
//console.log(btns[1].classList.add('red', 'trfgdfgdgdfgd'));
//удаление класса
//console.log(btns[0].classList.remove('blue'));
//"переключение" класса - если есть - удаляет. если нет - добавляет
//console.log(btns[0].classList.toggle('blue'));
//проверка определенного класса у определенного элемента
//if(btns[1].classList.contains('red')){
//console.log('red');
//}

//если у второй кнопки есть класс red - то удаляем. Если нет - добавляем
btns[0].addEventListener('click', () => {
  //if (!btns[1].classList.contains('red')) {
  //btns[1].classList.add('red');
  //}else {
  //btns[1].classList.remove('red');
  //}
  btns[1].classList.toggle('red');
});

//старый прием для получения классов у элемента
//console.log(btns[0].className);
wrapper.addEventListener('click', (event) => {
  //увидеть содержимое в качестве объекта
  //console.dir(event.target);
  //делегирование собития родителю, что бы оно срабатывало на всех его потомках
  if (event.target && event.target.tagName == "BUTTON") {
    console.log('Hello');
  }
});
