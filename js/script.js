// script.js
// Toggle navigation menu on small screens
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('nav ul');

  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});
