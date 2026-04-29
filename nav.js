/* Fratelli's — mobile drawer behavior. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  function init() {
    var nav = document.getElementById('fr-nav');
    var toggle = document.querySelector('.fr-nav__toggle');
    if (!nav || !toggle) return;

    toggle.setAttribute('aria-controls', 'fr-nav');
    toggle.setAttribute('aria-expanded', 'false');

    function setOpen(isOpen) {
      nav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('fr-nav-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    }

    // Toggle button — replace any existing inline handler cleanly
    toggle.onclick = null;
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      setOpen(!nav.classList.contains('is-open'));
    });

    // Auto-close when any link in the drawer is tapped
    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
      link.addEventListener('click', function () {
        if (window.matchMedia('(max-width: 680px)').matches) {
          setOpen(false);
        }
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Reset state when resizing past mobile breakpoint
    var mql = window.matchMedia('(min-width: 681px)');
    mql.addEventListener('change', function (e) {
      if (e.matches) setOpen(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
