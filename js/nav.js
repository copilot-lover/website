document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('.nav-hamburger');
  const menu = document.querySelector('.mobile-menu');
  const update = () => nav && nav.classList.toggle('scrolled', scrollY > 12);
  update();
  addEventListener('scroll', update, { passive: true });
  btn && btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.classList.toggle('open');
  });
  menu && menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.classList.remove('open');
  }));
});
