// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Auto-update footer year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Smooth scrolling for anchor links that reference IDs on this page
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetID = this.getAttribute('href');
        if (targetID && targetID.startsWith('#')) {
          e.preventDefault();
          const section = document.querySelector(targetID);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  });  