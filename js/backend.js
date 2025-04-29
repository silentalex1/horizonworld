function saveUser(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

const RATE_LIMIT = 5;
const TIME_WINDOW = 60 * 1000;

function rateLimit() {
    const now = Date.now();
    const requests = JSON.parse(localStorage.getItem('requests')) || [];
    const recentRequests = requests.filter(timestamp => now - timestamp < TIME_WINDOW);
    
    if (recentRequests.length >= RATE_LIMIT) {
        return false;
    }
    
    recentRequests.push(now);
    localStorage.setItem('requests', JSON.stringify(recentRequests));
    return true;
}
