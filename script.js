// ===== UB-Apartments — Main JavaScript =====

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  // Animate hamburger to X
  const spans = navToggle.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active nav link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-links a[href^="#"]');

function setActiveNavLink() {
  let current = '';
  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinkItems.forEach(function(link) {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#c8a96e';
    }
  });
}

window.addEventListener('scroll', setActiveNavLink);

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll(
  '.about-grid, .gallery-item, .location-photo, .features-col, .testimonial-card, .contact-card, .footer-col'
);

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeElements.forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
