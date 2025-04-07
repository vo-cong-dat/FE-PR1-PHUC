    const toggleBtn = document.querySelector('.toggle-menu');
    
    const overlay = document.querySelector('.menu-overlay');
    
    const drawer = document.querySelector('.menu-drawer');

    toggleBtn.addEventListener('click', () => {
        overlay.classList.add('show');
        drawer.classList.add('show');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
        drawer.classList.remove('show');
    });
