function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '9071' && password === '1235') {
        showHome();
    } else {
        alert('Username atau sandi salah!');
    }
}

function showHome() {
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
}

function logout() {
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('login-page').classList.add('active');
    alert('Logged out!');
}

function startChat() {
    alert('Chat dimulai! (Integrasi dengan AI bisa ditambahkan di sini)');
}
