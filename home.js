// Description: Javascript for home page
const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

const nav = document.getElementsByClassName('toggle-btn')[0];
const navLinks = document.getElementsByClassName('navbar-links')[0];

nav.addEventListener('click', () => {
  navLinks.classList.toggle('responsive');
});
