

let menuBtn = document.getElementsByClassName('menu-btn')[0];
let nav = document.getElementsByClassName('nav')[0];
let burger = document.getElementsByClassName('menu-btn__burger')[0];
let menuNav = document.querySelector('.menu-nav');
let navItems = document.querySelectorAll('.menu-nav__item');

let entireScreen = document.getElementsByTagName('body')[0];


let displayMenu = false;

menuBtn.addEventListener('click', menuToggle);

function menuToggle() {
    if (!displayMenu) {
        burger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(navItem => navItem.classList.add('open'));
        displayMenu = true;
    } else {
        burger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(navItem => navItem.classList.remove('open'));
        displayMenu = false;
    }
}