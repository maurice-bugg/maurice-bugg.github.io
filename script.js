document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  // Exit early if button or nav not found
  if (!menuBtn || !navMobile) return;

  // Toggle mobile nav open/closed
  menuBtn.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
    });
  });
});
