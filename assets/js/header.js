document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const btn = header && header.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (!btn || !header || !nav) return;


  const focusableSelector = 'a, button, input, [tabindex]:not([tabindex="-1"])';

  function openMenu() {
    header.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'メニューを閉じる');
    // move focus to first focusable in nav
    const first = nav.querySelector(focusableSelector);
    if (first) first.focus();
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeMenu() {
    header.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'メニューを開く');
    btn.focus();
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    if (header.classList.contains('open')) closeMenu();
    else openMenu();
  });

  // Backdrop click: nav covers full viewport when open; clicking outside UL should close
  nav.addEventListener('click', function (e) {
    if (!header.classList.contains('open')) return;
    // if clicked directly on nav (not on a child) or on the nav background, close
    const ul = nav.querySelector('ul');
    if (e.target === nav || (ul && !ul.contains(e.target))) {
      closeMenu();
    }
  });

  // ESC to close and focus trapping
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('open')) {
      closeMenu();
    }

    if (e.key === 'Tab' && header.classList.contains('open')) {
      const focusables = Array.from(nav.querySelectorAll(focusableSelector)).filter(el => !el.hasAttribute('disabled'));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
});
