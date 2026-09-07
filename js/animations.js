document.addEventListener('DOMContentLoaded', () => {

  // --- Typewriter Effect ---
  const typeWriterElement = document.querySelector('.typewriter');

  const typewriterTexts = {
    pt: [
      "próxima geração da Web.",
      "solução do seu problema.",
      "arquitetura ideal.",
      "experiência perfeita."
    ],
    en: [
      "next generation of the Web.",
      "solution to your problem.",
      "ideal architecture.",
      "perfect experience."
    ]
  };

  function getLang() {
    return localStorage.getItem('portfolio-lang') || 'pt';
  }

  if (typeWriterElement) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let currentLang = getLang();
    let texts = typewriterTexts[currentLang];

    function type() {
      // Check if language changed
      const newLang = getLang();
      if (newLang !== currentLang) {
        currentLang = newLang;
        texts = typewriterTexts[currentLang];
        textIndex = 0;
        charIndex = 0;
        isDeleting = false;
      }

      const currentText = texts[textIndex];

      if (isDeleting) {
        typeWriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typeWriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);

    // Listen for language changes
    window.addEventListener('languageChanged', (e) => {
      currentLang = e.detail;
      texts = typewriterTexts[currentLang];
    });
  }

  // --- Fade-Up Entrance Animations ---
  const fadeUpElements = document.querySelectorAll('.fade-up');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 100);
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  fadeUpElements.forEach(el => {
    appearOnScroll.observe(el);
  });

  // Trigger initial visible for elements already in viewport (like Hero)
  setTimeout(() => {
    fadeUpElements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 100);

  // --- Scroll Progress Bar ---
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    const mainContent = document.querySelector('.main-content');
    const scrollTarget = mainContent || window;

    function updateProgress() {
      const el = mainContent || document.documentElement;
      const scrollTop = el.scrollTop || window.scrollY;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    }

    if (mainContent) {
      mainContent.addEventListener('scroll', updateProgress);
    } else {
      window.addEventListener('scroll', updateProgress);
    }
  }

  // --- Theme Toggle ---
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // Initialize theme from storage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    if (theme === 'dark') {
      themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    } else {
      themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    }
  }

});
