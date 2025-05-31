export function createScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25,
        rootMargin: '0px 0px -100px 0px'
    });

    return observer;
}