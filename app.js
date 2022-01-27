let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.burger__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__inner-list');

header__burger.onclick = function(){
    header__burger.classList.toggle('header__burger__btn--active');
    header_menu.classList.toggle('header__burger__btn--active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('header__burger__btn--active');
    back.classList.toggle('lock');
}