import { createScrollObserver } from './observers.js';

export function loadGreeting() {
    const greetingSection = document.getElementById('greeting');

    if(!greetingSection) return; // Ensure the section exists

    greetingSection.innerHTML = `
        <div class="greet-main section-hidden fade-up">
            <div class="greeting-main">
                <div class="greeting-text-div">
                    <h1 class="greeting-text">Hi, I'm Hassan Ihsan</h1>
                    <p class="greeting-text-p subTitle">A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact</p>
                    <div class="social-media-div">
                        ${socialMediaLinks()}
                    </div>
                </div>
                <div class="greeting-image-div section-hidden fade-down">
                    <img src="assets/images/feelingProud.svg" alt="Developer" />
                </div>
            </div>
        </div>
    `;

    const observer = createScrollObserver();
    document.querySelectorAll('.greet-main, .greeting-image-div').forEach(el => {
        observer.observe(el);
    });
}

function socialMediaLinks() {
    return `
        <a href="https://github.com" target="_blank" class="social-icon">
            <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
        </a>
    `;
}