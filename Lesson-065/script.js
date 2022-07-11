const btn = document.querySelector('.btn');
let timerId,
  i = 0;

function myAnimation() {
  const elem = document.querySelector('.box');
  let post = 0;

  const id = setInterval(frame, 10);

  function frame() {
    if (post == 300) {
      clearInterval();
    } else {
      post++;
      elem.style.top = post + 'px';
      elem.style.left = post + 'px';
    }
  }
}
btn.addEventListener('click', myAnimation);

/*
function logger() {
  if (i === 3) {
    clearInterval(timerId);
  }
  console.log('text');
  i++;
}

let id = setTimeout(function log(){
  console.log('Hello');
  id = setTimeout(log,500);
},500);
*/
