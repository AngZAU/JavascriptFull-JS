'use strict';

const btn = document.querySelector("button"),
      overlay = document.querySelector(".overlay");

//так делать не рекомендуется:
// 1) если его переопределить,то потеряем первый обработчик события
// 2) не получится его потом удалить
// btn.onclick = function(){alert("Button");};
//добавление слушателя на событие - это правильный подход
// e - event - объект - событие, передается как аргумент в колбек-функцию
//всегда передается первым аргументом
//btn.addEventListener('click', (e) => {
//e.target.remove();
//});

//let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarger);
  console.log(e.type);
  //i++;
  //if (i == 1) {
    //btn.removeEventListener('click', deleteElement);
  //}
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click',function(event){
  //отмена стандартного поведения. Всегда нужно пемещять вначало функции
  event.preventDefault();

  console.log(event.target);

});
