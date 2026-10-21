const hero = document.querySelector('.hero');
function updateNavbar() {
    const batas = hero.offsetHeight - navbar.offsetHeight;
    navbar.classList.toggle('scrolled', window.scrollY > batas);
}
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('hide');
    });
});
navbar.addEventListener('mouseenter', () => navbar.classList.remove('hide'));
if (Math.abs(current - lastScroll) < 8) return;