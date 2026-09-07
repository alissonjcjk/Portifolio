document.addEventListener('DOMContentLoaded', () => {
  // --- Smooth Scrolling para sidebar (desktop) e mobile nav ---
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Intersection Observer para highlight de seção ativa ---
  // Atualiza tanto .nav-link (sidebar) quanto .mobile-nav-link (mobile nav)
  const sections = document.querySelectorAll('.section');
  const sidebarLinks = document.querySelectorAll('.nav-link');
  const mobileLinks  = document.querySelectorAll('.mobile-nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // dispara quando seção ocupa o meio do viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute('id');

      // Remove active de todos os links em ambas as navs
      sidebarLinks.forEach(link => link.classList.remove('active'));
      mobileLinks.forEach(link  => link.classList.remove('active'));

      // Adiciona active ao link correspondente em cada nav
      const activeSidebar = document.querySelector(`.nav-link[href="#${id}"]`);
      const activeMobile  = document.querySelector(`.mobile-nav-link[href="#${id}"]`);

      if (activeSidebar) activeSidebar.classList.add('active');
      if (activeMobile)  activeMobile.classList.add('active');
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
});
