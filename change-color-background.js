function changeBackgroundColorOnLoad() {
  const sections = document.querySelectorAll('[id^="kwd-section-"]');
  const body = document.body;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Seuil de visibilité de la section
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        const color = section.getAttribute('color');
        if (color) {
          body.style.transition = 'background-color 150ms ease';
          body.style.backgroundColor = color;
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

window.addEventListener('load', changeBackgroundColorOnLoad);
changeBackgroundColorOnLoad();
