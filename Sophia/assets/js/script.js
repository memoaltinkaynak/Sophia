const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Menüyü kapatma işlevi
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});
