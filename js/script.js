document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('lobby')) {
        const user = localStorage.getItem('username');
        if (!user) {
            window.location.href = '/index.html';
            return;
        }
        document.getElementById('welcomeUser').textContent = `Welcome, ${user}!`;
        gsap.from('header h1', { duration: 1.4, y: -80, opacity: 0, ease: 'power4.out' });
        gsap.from('.user-info', { duration: 1.4, x: 60, opacity: 0, ease: 'power4.out', delay: 0.4 });
        gsap.from('.news-item', { duration: 1.3, y: 80, opacity: 0, stagger: 0.5, ease: 'power4.out', delay: 0.8 });
        gsap.from('.start-btn', { duration: 1.4, scale: 0, ease: 'elastic.out(1, 0.4)', delay: 1.6 });
        document.querySelector('.start-btn').addEventListener('click', () => {
            window.open('/browser.html', '_blank', 'width=1100,height=900');
        });
        document.getElementById('signOutBtn').addEventListener('click', () => {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            window.location.href = '/index.html';
        });
    } else {
        gsap.from('.auth-container h1', { duration: 1.4, y: -60, opacity: 0, ease: 'power4.out' });
        gsap.from('.auth-form', { duration: 1.4, y: 60, opacity: 0, ease: 'power4.out', delay: 0.6 });
        document.getElementById('signInBtn').addEventListener('click', () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                if (rateLimit()) {
                    saveUser(username, password);
                    window.location.href = '/lobby';
                } else {
                    alert('Too many requests. Please try again later.');
                }
            } else {
                alert('Please enter both username and password.');
            }
        });
    }
});
