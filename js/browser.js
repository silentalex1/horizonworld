document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('username');
    if (!user) {
        alert('Please sign in from the main website.');
        window.close();
        return;
    }
    document.getElementById('browserUser').textContent = `Signed in as ${user}`;
    
    const modal = document.getElementById('permissionModal');
    const grantBtn = document.querySelector('.grant-btn');
    const denyBtn = document.querySelector('.deny-btn');
    const sidebarBtns = document.querySelectorAll('.sidebar-btn');
    const content = document.getElementById('browserContent');

    grantBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        localStorage.setItem('permission', 'granted');
        window.onbeforeunload = null;
    });

    denyBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        localStorage.setItem('permission', 'denied');
    });

    if (localStorage.getItem('permission')) {
        modal.style.display = 'none';
        if (localStorage.getItem('permission') === 'granted') {
            window.onbeforeunload = null;
        }
    }

    sidebarBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sidebarBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.textContent === 'Arcade') {
                content.innerHTML = '<h2>Latest Arcade Releases</h2><p>Play our first game, "Star Racer", now available in the arcade!</p>';
            } else if (btn.textContent === 'Changelogs') {
                content.innerHTML = '<h2>Changelogs</h2><p>Version 1.2: Added new arcade games and fixed bugs in "Pixel Quest".</p>';
            } else if (btn.textContent === 'Settings') {
                if (localStorage.getItem('permission') === 'granted') {
                    content.innerHTML = '<h2>Settings</h2><p>Manage Chrome extensions here.</p><ul><li>Extension 1 <button onclick="uninstallExtension(\'Extension 1\')">Uninstall</button></li><li>Extension 2 <button onclick="uninstallExtension(\'Extension 2\')">Uninstall</button></li></ul>';
                } else {
                    content.innerHTML = '<h2>Settings</h2><p>Please grant full permission to manage Chrome extensions.</p>';
                }
            }
        });
    });
});

function uninstallExtension(name) {
    alert(`${name} has been uninstalled.`);
}
