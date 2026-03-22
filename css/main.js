// ===== STATISTICAL SPECTRUM - MAIN JS =====

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 60);
});

// Active nav link
function setActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === current || (current === '' && href === 'index.html'));
  });
}
setActiveNav();

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  hamburger.classList.toggle('open');
});
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Toast notification
function showToast(title, msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<div class="toast-title">${title}</div><div>${msg}</div>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 4000);
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = newsletterForm.querySelector('input[type="email"]').value;
  if (email) {
    showToast('✓ Subscribed!', 'Thank you for joining Statistical Spectrum.');
    newsletterForm.reset();
  }
});

// Contact form
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('✓ Message Sent!', 'We will get back to you within 24 hours.');
  contactForm.reset();
});

// Search functionality for videos page
const searchInput = document.getElementById('videoSearch');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.video-card').forEach(card => {
      const title = card.querySelector('.video-title')?.textContent.toLowerCase() || '';
      const cat = card.querySelector('.video-category')?.textContent.toLowerCase() || '';
      card.style.display = (title.includes(q) || cat.includes(q) || q === '') ? '' : 'none';
    });
  });
}

// Search for blog
const blogSearch = document.getElementById('blogSearch');
if (blogSearch) {
  blogSearch.addEventListener('input', function () {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.blog-card').forEach(card => {
      const title = card.querySelector('.blog-title')?.textContent.toLowerCase() || '';
      const tag = card.querySelector('.blog-tag')?.textContent.toLowerCase() || '';
      card.style.display = (title.includes(q) || tag.includes(q) || q === '') ? '' : 'none';
    });
  });
}

// Filter tags
document.querySelectorAll('.filter-tag').forEach(tag => {
  tag.addEventListener('click', function () {
    const group = this.closest('.filter-tags');
    group?.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    if (!filter) return;
    const target = this.closest('section')?.querySelector('.videos-grid, .blog-grid, .courses-grid');
    if (!target) return;
    target.querySelectorAll('[data-category]').forEach(item => {
      item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
    });
  });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.video-card, .blog-card, .course-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
