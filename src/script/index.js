// Carousel from splide
new Splide(".splide", {
  pagination: false,
  drag: false,
  keyboard: false,
  type: 'fade',
}).mount();

// mobile menu
const hamburgerButton = document.querySelector('.btn-hamburger');
const closeButton = document.querySelector('.btn-close');
const navMenu = document.querySelector('.nav-menu');

hamburgerButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});