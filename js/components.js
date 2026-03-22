// ===== SHARED COMPONENTS =====

const NAV_HTML = `
<nav class="navbar">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-icon">SS</div>
    <div class="nav-logo-text">Statistical Spectrum<span>Data · Statistics · ML</span></div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="videos.html">Videos</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="courses.html">Courses</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="https://www.youtube.com/@statisticalspectrum" target="_blank" class="nav-cta">▶ YouTube</a></li>
  </ul>
  <div class="hamburger"><span></span><span></span><span></span></div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="nav-logo" style="margin-bottom:1rem">
          <div class="nav-logo-icon">SS</div>
          <div class="nav-logo-text">Statistical Spectrum<span>Data · Statistics · ML</span></div>
        </div>
        <p>Making statistics accessible, insightful and practical for everyone — from students to professionals.</p>
        <div class="footer-social">
          <a href="https://www.youtube.com/@statisticalspectrum" target="_blank" title="YouTube">▶</a>
          <a href="https://www.linkedin.com/in/dnyaneshwar-darekar/" target="_blank" title="LinkedIn">in</a>
          <a href="mailto:contact@statisticalspectrum.com" title="Email">✉</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="courses.html">Courses</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Topics</h4>
        <ul>
          <li><a href="videos.html">Statistics Theory</a></li>
          <li><a href="videos.html">Data Science</a></li>
          <li><a href="videos.html">Machine Learning</a></li>
          <li><a href="videos.html">R Programming</a></li>
          <li><a href="videos.html">Python for Stats</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="courses.html">Free Courses</a></li>
          <li><a href="blog.html">Articles</a></li>
          <li><a href="contact.html">Newsletter</a></li>
          <li><a href="https://www.youtube.com/@statisticalspectrum" target="_blank">YouTube Channel</a></li>
          <li><a href="https://www.linkedin.com/in/dnyaneshwar-darekar/" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Statistical Spectrum · Dnyaneshwar Darekar · All rights reserved.</p>
      <p style="color:var(--gold);font-size:0.72rem;letter-spacing:0.1em">MAKING STATISTICS SIMPLE</p>
    </div>
  </div>
</footer>`;

// Inject nav & footer
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;
});
