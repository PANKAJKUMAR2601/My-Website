// Responsive Navbar toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ScrollReveal setup
ScrollReveal({
  reset: false,            // animations happen only once
  distance: '50px',        // how far elements move into view
  duration: 1000,          // animation time (ms)
  delay: 100,              // delay before reveal
});

// Reveal animations for sections
ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-text', { origin: 'right' });
ScrollReveal().reveal('.projects-grid .project-card', { interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.contact-form', { origin: 'left' });
ScrollReveal().reveal('.contact-details', { origin: 'right' });

