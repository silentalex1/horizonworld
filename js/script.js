document.addEventListener('DOMContentLoaded', () => {
    gsap.from('header h1', { duration: 1.2, y: -60, opacity: 0, ease: 'power3.out' });
    gsap.from('.news-item', { duration: 1, y: 60, opacity: 0, stagger: 0.4, ease: 'power3.out', delay: 0.6 });
    gsap.from('.start-btn', { duration: 1.2, scale: 0, ease: 'elastic.out(1, 0.6)', delay: 1.2 });
});
