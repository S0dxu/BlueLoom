const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');

menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.toggle('show');
});

closeSidebar.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.remove('show');
});

document.addEventListener('click', (e) => {
    const isClickInside = sidebar.contains(e.target) || menuToggle.contains(e.target);
    if (!isClickInside && sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
    }
});

let startX;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
    const currentX = e.touches[0].clientX;

    if (currentX > startX + 150 && !sidebar.classList.contains('show')) {
        sidebar.classList.add('show');
    }

    if (currentX < startX - 150 && sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
    }
});

const toggleLinks = document.querySelectorAll('.toggle');

toggleLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = link.nextElementSibling;

        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});
