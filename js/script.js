document.addEventListener('DOMContentLoaded', () => {
    gsap.from('header h1', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' });
    gsap.from('.news-item', { duration: 1, y: 50, opacity: 0, stagger: 0.3, ease: 'power2.out', delay: 0.5 });
    gsap.from('.start-btn', { duration: 1, scale: 0, ease: 'elastic.out(1, 0.5)', delay: 1 });

    document.querySelector('.start-btn').addEventListener('click', () => {
        window.open('/browser.html', '_blank', 'width=800,height=600');
    });
});
