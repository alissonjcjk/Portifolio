document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const tabHighlight = document.querySelector('.tab-highlight');

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
      // Deactivate all
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(panel => {
        panel.classList.remove('active');
        panel.setAttribute('hidden', 'true');
      });

      // Activate clicked
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      
      const panelId = button.getAttribute('aria-controls');
      const targetPanel = document.getElementById(panelId);
      
      if (targetPanel) {
        targetPanel.removeAttribute('hidden');
        // Small delay for CSS transition to kick in
        setTimeout(() => targetPanel.classList.add('active'), 10);
      }

      updateHighlight(button);
    });
  });
});
