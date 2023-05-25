const hamburger = document.querySelector('#hamburger');
const cancel = document.querySelector('#close');
const menu = document.querySelector('.navbar-links');

hamburger.addEventListener('click', function(){
    menu.setAttribute('id', 'menu-active');
    hamburger.classList.add('inactive');
    cancel.classList.remove('inactive')
})

cancel.addEventListener('click', function(){
    menu.removeAttribute('id', 'menu-active');
    cancel.classList.add('inactive');
    hamburger.classList.remove('inactive')
})