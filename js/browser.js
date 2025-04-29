document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.permission-modal');
    const grantBtn = document.querySelector('.grant-btn');
    const denyBtn = document.querySelector('.deny-btn');
    const sidebarBtns = document.querySelectorAll('.sidebar-btn');
    const content = document.querySelector('.content');

    grantBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        localStorage.setItem('permission', 'granted');
    });

    denyBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        localStorage.setItem('permission', 'denied');
    });

    if (localStorage.getItem('permission')) {
        modal.style.display = 'none';
    }

    sidebarBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sidebarBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.textContent === 'Arcade') {
                content.innerHTML = '<h2>Latest Arcade Releases</h2><p>Explore "Star Racer" and "Pixel Quest" in our arcade section!</p>';
            } else if (btn.textContent === 'Changelogs') {
                content.innerHTML = '<h2>Changelogs</h2><p>Version 1.2: Added new arcade games and fixed bugs in "Pixel Quest".</p>';
            } else if (btn.textContent === 'Settings') {
                content.innerHTML = '<h2>Settings</h2><p>Adjust your game preferences here.</p>';
            }
        });
    });
});
