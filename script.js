const btn = document.querySelector('.aside__btn');
const body = document.querySelector('body');

btn.addEventListener('click', function() {
  body.classList.toggle('open')
});