const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const listElements = document.querySelectorAll('.header .nav-bar .nav-list ul li');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

listElements.forEach(li => {
  li.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
  })
})