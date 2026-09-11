document.addEventListener('DOMContentLoaded', () => {

  // --- Word-Drop Animation (palavra por palavra, de cima para baixo) ---
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

  // Injeta o CSS da animação sombra (shadow/névoa) dinamicamente
  const wordDropStyle = document.createElement('style');
  wordDropStyle.textContent = `
    .typewriter {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 0 0.28em;
      vertical-align: bottom;
    }
    .typewriter .word {
      display: inline-block;
      opacity: 0;
      filter: blur(14px);
      transform: translateY(6px);
      text-shadow:
        0 0 18px currentColor,
        0 0 40px currentColor;
      transition:
        opacity 0.55s ease,
        filter 0.55s ease,
        transform 0.55s ease,
        text-shadow 0.55s ease;
    }
    .typewriter .word.visible {
      opacity: 1;
      filter: blur(0px);
      transform: translateY(0);
      text-shadow:
        0 0 0px transparent;
    }
    .typewriter .word.exit {
      opacity: 0;
      filter: blur(16px);
      transform: translateY(-5px);
      text-shadow:
        0 0 22px currentColor,
        0 0 50px currentColor;
      transition:
        opacity 0.4s ease-in,
        filter 0.4s ease-in,
        transform 0.4s ease-in,
        text-shadow 0.4s ease-in;
    }
  `;
  document.head.appendChild(wordDropStyle);

  function getLang() {
    return localStorage.getItem('portfolio-lang') || 'pt';
  }

  if (typeWriterElement) {
    typeWriterElement.setAttribute('aria-live', 'polite');
    typeWriterElement.setAttribute('aria-atomic', 'true');

    let textIndex = 0;
    let currentLang = getLang();
    let texts = typewriterTexts[currentLang];
    let animTimer = null;

    function showPhrase(phraseIndex) {
      const phrase = texts[phraseIndex];
      const words = phrase.split(' ');

      // Monta os spans de cada palavra
      typeWriterElement.innerHTML = words
        .map(w => `<span class="word">${w}</span>`)
        .join('');
      typeWriterElement.setAttribute('aria-label', phrase);

      const wordEls = typeWriterElement.querySelectorAll('.word');

      // Anima cada palavra descendo de cima para baixo com delay escalonado
      wordEls.forEach((el, i) => {
        animTimer = setTimeout(() => {
          el.classList.add('visible');
        }, i * 160);
      });

      // Após todas as palavras aparecerem + pausa de 2.2s, faz saída
      const totalShowTime = words.length * 160 + 2200;
      animTimer = setTimeout(() => {
        // Saída: todas as palavras saem juntas com fade-down
        wordEls.forEach(el => {
          el.classList.remove('visible');
          el.classList.add('exit');
        });

        // Após a saída, carrega a próxima frase
        animTimer = setTimeout(() => {
          textIndex = (phraseIndex + 1) % texts.length;
          showPhrase(textIndex);
        }, 350);

      }, totalShowTime);
    }

    // Inicia após 800ms
    animTimer = setTimeout(() => showPhrase(textIndex), 800);

    // Reinicia ao mudar idioma
    window.addEventListener('languageChanged', (e) => {
      if (animTimer) clearTimeout(animTimer);
      currentLang = e.detail;
      texts = typewriterTexts[currentLang];
      textIndex = 0;
      typeWriterElement.innerHTML = '';
      animTimer = setTimeout(() => showPhrase(textIndex), 400);
    });
  }

  // --- Fade-Up Entrance Animations ---
  const fadeUpElements = document.querySelectorAll('.fade-up');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
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
    let ticking = false;

    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateProgress();
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
    const lang = localStorage.getItem('portfolio-lang') || 'pt';
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-label', isDark
      ? (lang === 'pt' ? 'Ativar tema claro' : 'Switch to light theme')
      : (lang === 'pt' ? 'Ativar tema escuro' : 'Switch to dark theme'));
    if (isDark) {
      themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    } else {
      themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    }
  }

  window.addEventListener('languageChanged', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateThemeIcon(currentTheme);
  });

});
