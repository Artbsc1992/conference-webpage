const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');
const navItems = document.querySelectorAll('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});