document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  if (menuBtn && navMobile) {
    // Toggle mobile nav
    menuBtn.addEventListener('click', () => {
      navMobile.classList.toggle('open');
    });

    // Close mobile nav on link click
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('open');
      });
    });
  }

  // Reveal sections, cards, and timeline entries on scroll
  const sections = document.querySelectorAll('section');
  const cards = document.querySelectorAll('.card');
  const entries = document.querySelectorAll('.timeline-entry');

  const observer = new IntersectionObserver(items => {
    items.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  [...sections, ...cards, ...entries].forEach(el => observer.observe(el));
});
