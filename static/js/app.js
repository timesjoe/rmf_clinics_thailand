function toggleMenu() {
    const menu = document.querySelector('.hamburgerLink');
    menu.classList.toggle('show');
}

function handleResize() {
    const menu = document.querySelector('.hamburgerLink');
    if (window.innerWidth > 768) {
        menu.classList.remove('show');
    }
}

// Add event listener for resize
window.addEventListener('resize', handleResize);