(function () {
  var preloader = document.querySelector('[data-preloader]');
  function hidePreloader() {
    if (preloader) setTimeout(function () { preloader.classList.add('is-hidden'); }, 220);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hidePreloader);
  } else {
    hidePreloader();
  }
  window.addEventListener('load', hidePreloader);

  var toggle = document.querySelector('[data-nav-toggle]');
  var links = document.querySelector('[data-nav-links]');
  if (toggle && links) {
    toggle.addEventListener('click', function () { links.classList.toggle('open'); });
  }

  var revealTargets = document.querySelectorAll('.section-head, .card, .feature-band, .stat, .media-panel, .cta-inner');
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(function (el, index) {
      el.style.transitionDelay = Math.min(index % 6, 5) * 70 + 'ms';
      observer.observe(el);
    });
  }

  var hero = document.querySelector('[data-hero-slider]');
  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-bg-slide'));
    var current = 0;
    function replayHeroLayers() {
      hero.classList.remove('motion-in');
      hero.classList.add('motion-reset');
      void hero.offsetWidth;
      hero.classList.remove('motion-reset');
      hero.classList.add('motion-in');
    }
    function go(next) {
      if (!slides.length || next === current) return;
      slides[current].classList.remove('is-active');
      slides[current].classList.add('was-active');
      slides[next].classList.remove('was-active');
      slides[next].classList.add('is-active');
      current = next;
      replayHeroLayers();
      setTimeout(function () {
        slides.forEach(function (slide, index) { if (index !== current) slide.classList.remove('was-active'); });
      }, 1200);
    }
    replayHeroLayers();
    if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInterval(function () { go((current + 1) % slides.length); }, 6200);
    }
  }
})();