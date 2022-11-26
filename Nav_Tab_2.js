const nav = document.querySelectorAll('.navContent li');
function listActive(){
  nav.forEach((link)=>
  link.classList.remove('active__item'));
  this.classList.add('active__item');
}
nav.forEach((link)=>link.addEventListener('click', listActive));