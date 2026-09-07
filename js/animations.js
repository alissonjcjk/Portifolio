document.addEventListener('DOMContentLoaded', () => {
  
  // --- Typewriter Effect ---
  const typeWriterElement = document.querySelector('.typewriter');
  
  if (typeWriterElement) {
    const words = [
      'Web',
      'Web.',
      'Web', // Repeat to simulate a pause
      'Web',
      'próxima geração da Web.',
      'próxima geração da Web',
      'solução do seu problema.',
      'solução do seu problema'
    ];
    
    // A simpler typewriter approach for a portfolio
    const texts = [
      "próxima geração da Web.",
      "solução do seu problema.",
      "arquitetura ideal.",
      "experiência perfeita."
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typeWriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // delete faster
      } else {
        typeWriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100; // type normal
      }

      // If word is complete
      if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000; // pause at the end
        isDeleting = true;
      } 
      // If word is completely deleted
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // pause before next word
      }

      setTimeout(type, typingSpeed);
    }
    
    // Start typing effect after a small delay to sync with fade-in
    setTimeout(type, 1000);
  }

  // --- Fade-Up Entrance Animations ---
  const fadeUpElements = document.querySelectorAll('.fade-up');
  
  // Create an intersection observer for fade-up elements
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        // Add a slight delay based on the inline style animation-delay if it exists
        // Actually, CSS handles the delay, we just need to add the class
        setTimeout(() => {
           entry.target.classList.add('visible');
        }, 100);
        
        // Stop observing once it has appeared
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  fadeUpElements.forEach(el => {
    appearOnScroll.observe(el);
  });
  
  // Trigger initial visible for elements already in viewport (like Hero)
  setTimeout(() => {
    fadeUpElements.forEach(el => {
       if(el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visible');
       }
    });
  }, 100);

});
