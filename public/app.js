let connect = document.querySelector('.connect');
let connectList = document.querySelector('.connect-list');
let connectIcon = document.querySelector('.head .menu .connect i');
let menu = document.querySelector('.head > div');
let burgerIcon = document.querySelector('.head .burger');

connect.addEventListener('click', () => {
    connectList.classList.toggle('active');
    connectIcon.classList.toggle('active');
});

burgerIcon.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    menu.classList.contains('active') ? burgerIcon.src = 'images/icon-close.svg' : burgerIcon.src = 'images/icon-hamburger.svg';
});

