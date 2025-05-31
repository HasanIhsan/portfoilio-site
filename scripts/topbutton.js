export function loadTopButton() {
    const topButton = document.getElementById('topButton');
    topButton.innerHTML = `
        <i class="fas fa-arrow-up"></i>
    `;
    
    // Add scroll functionality
    window.addEventListener('scroll', handleScroll);
    topButton.addEventListener('click', scrollToTop);
}

function handleScroll() {
    const topButton = document.getElementById('topButton');
    if (window.scrollY > 30) {
        topButton.style.visibility = 'visible';
    } else {
        topButton.style.visibility = 'hidden';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}