const revealElements = [...document.querySelectorAll('.reveal')];

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
});

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element) => observer.observe(element));
