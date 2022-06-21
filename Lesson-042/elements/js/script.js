'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),//получение псевдомассива
  oneHeart = document.querySelector('div'),//получение первого элемента на странице
  wrapper = document.querySelector('.wrapper');
/*
hearts.forEach(item => {
  console.log(item);
});
*/

box.style.cssText = 'background-color:blue;width:500px';
/*
box.style.backgroundColor = 'blue';
box.style.width = '500px';
*/
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor ='red';

hearts.forEach(item=>{
  item.style.backgroundColor ='yellow';
});

const div = document.createElement('div');//элемент создается только внутри js-ного файла
//const text = document.createTextNode('Here was I');

div.classList.add('black');//добавление класса

//вставка элемента в конец родительского элемента
//document.body.append(div);
//document.querySelector('.wrapper').append(div);
div.innerHTML = "Hello world";// не рекомендуется использовать, т.к. можно вставить вредоностный код
//div.textContent = "Hello";
din.insertAdjacentHTML('',<h2>Hello</h2>);
wrapper.append(div);

//вставка элемента в начало родительского элемента
//wrapper.prepend(div);

//вставка элемента перед родительского элемента
//hearts[0].before(div);

//вставка элемента после родительского элемента
//hearts[0].after(div);

//удаление элемента
//circles[0].remove();

//замена одного элемента другим
  hearts[0].replaceWith(circles[0]);
