document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const tabHighlight = document.querySelector('.tab-highlight');

  function activateTab(button, moveFocus = false) {
    tabButtons.forEach(btn => {
      const isActive = btn === button;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
      btn.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    tabPanels.forEach(panel => {
      const isActive = panel.id === button.getAttribute('aria-controls');
      panel.classList.toggle('active', isActive);
      panel.toggleAttribute('hidden', !isActive);
    });

    if (moveFocus) button.focus();
    updateHighlight(button);
  }

  function updateHighlight(activeButton) {
    if (!tabHighlight || !activeButton) return;
    
    // Desktop layout (vertical tabs) vs Mobile layout (horizontal scroll)
    // We assume desktop by default if flex-direction is column
    const tabsContainer = activeButton.parentElement;
    const isHorizontal = window.getComputedStyle(tabsContainer).flexDirection === 'row';

    if (isHorizontal) {
      tabHighlight.style.transform = `translateX(${activeButton.offsetLeft}px)`;
      tabHighlight.style.width = `${activeButton.offsetWidth}px`;
      tabHighlight.style.height = `2px`;
      tabHighlight.style.top = `auto`;
      tabHighlight.style.bottom = `0`;
    } else {
      tabHighlight.style.transform = `translateY(${activeButton.offsetTop}px)`;
      tabHighlight.style.height = `${activeButton.offsetHeight}px`;
      tabHighlight.style.width = `2px`;
      tabHighlight.style.left = `0`;
      tabHighlight.style.top = `0`;
    }
  }

  // Initialize highlight position
  const activeTab = document.querySelector('.tab-button.active');
  if (activeTab) {
    // Slight delay to ensure layout is computed
    setTimeout(() => updateHighlight(activeTab), 100);
  }

  // Handle Window Resize
  window.addEventListener('resize', () => {
    const currentActive = document.querySelector('.tab-button.active');
    updateHighlight(currentActive);
  });

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      activateTab(button);
    });

    button.addEventListener('keydown', (event) => {
      const currentIndex = Array.from(tabButtons).indexOf(button);
      let nextIndex;

      if (['ArrowRight', 'ArrowDown'].includes(event.key)) {
        nextIndex = (currentIndex + 1) % tabButtons.length;
      } else if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
        nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
      } else if (event.key === 'Home') {
        nextIndex = 0;
      } else if (event.key === 'End') {
        nextIndex = tabButtons.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      activateTab(tabButtons[nextIndex], true);
    });
  });
});
