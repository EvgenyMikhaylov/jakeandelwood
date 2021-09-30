const closeButton = document.querySelector('.page-header__close-nav');
const openButton = document.querySelector('.page-header__open-nav');
const nav = document.querySelector('.page-header__nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('page-header__open-nav--navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('page-header__open-nav--navigation-open');
}); 