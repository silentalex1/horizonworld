document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('lobby.html')) {
        const user = localStorage.getItem('username');
        if (!user) {
            window.location.href = '/index.html';
            return;
        }
        document.getElementById('welcomeUser').textContent = `Welcome, ${user}!`;
        gsap.from('header h1', { duration: 1.3, y: -70, opacity: 0, ease: 'power3.out' });
        gsap.from('.user-info', { duration: 1.3, x: 50, opacity: 0, ease: 'power3.out', delay: 0.3 });
        gsap.from('.news-item', { duration: 1.2, y: 70, opacity: 0, stagger: 0.4, ease: 'power3.out', delay: 0.7 });
        gsap.from('.start-btn', { duration: 1.3, scale: 0, ease: 'elastic.out(1, 0.5)', delay: 1.5 });
    } else {
        gsap.from('.auth-container h1', { duration: 1.3, y: -50, opacity: 0, ease: 'power3.out' });
        gsap.from('.auth-form', { duration: 1.3, y: 50, opacity: 0, ease: 'power3.out', delay: 0.5 });
    }
});

function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        saveUser(username, password);
        window.location.href = '/lobby.html';
    } else {
        alert('Please enter both username and password.');
    }
}

function signOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = '/index.html';
}
