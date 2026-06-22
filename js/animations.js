document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 6, 5) * 80}ms`;
    obs.observe(el);
  });
  document.querySelectorAll('.faq-q').forEach((button) => {
    button.addEventListener('click', () => button.closest('.faq-item').classList.toggle('open'));
  });
  const toggle = document.querySelector('#annual-toggle');
  if (toggle) toggle.addEventListener('click', () => document.body.classList.toggle('annual'));
});
