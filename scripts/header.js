import { createScrollObserver } from './observers.js';

export function loadHeader() {
    const header = document.getElementById('header');
    const theme = {
        text: getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color'),
        body: getComputedStyle(document.documentElement)
            .getPropertyValue('--body-bg'),
        highlight: getComputedStyle(document.documentElement)
            .getPropertyValue('--highlight')
    };

    header.innerHTML = `
        <nav class="header section-hidden fade-down">
            <a href="/" class="logo">
                <span style="color: ${theme.text}">&lt;</span>
                <span class="logo-name" style="color: ${theme.text}">Hassan Ihsan</span>
                <span style="color: ${theme.text}">/&gt;</span>
            </a>
            <input class="menu-btn" type="checkbox" id="menu-btn">
            <label class="menu-icon" for="menu-btn">
                <span class="navicon"></span>
            </label>
            <ul class="menu" style="background-color: ${theme.body}">
                ${createMenuItems(theme)}
            </ul>
        </nav>
    `;

    const observer = createScrollObserver();
    observer.observe(document.querySelector('.header'));

    // Add interactions
    addMenuHoverEffects(theme);
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('change', toggleMenu);
    setActiveLink();
}

function createMenuItems(theme) {
    const menuItems = [
        { path: '/index', text: 'Home' },
        { path: '/pages/education', text: 'Education' },
        { path: '/experience', text: 'Experience' },
        { path: '/projects', text: 'Projects' },
        { path: '/opensource', text: 'Open Source' },
        { path: '/contact', text: 'Contact Me' }
    ];

    return menuItems.map(item => `
        <li>
            <a href="${item.path}" class="nav-link"
                style="color: ${theme.text}"
                data-path="${item.path}">
                ${item.text}
            </a>
        </li>
    `).join('');
}

function addMenuHoverEffects(theme) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = theme.highlight;
        });
        link.addEventListener('mouseleave', (e) => {
            e.target.style.backgroundColor = 'transparent';
        });
    });
}

function setActiveLink() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-path') === currentPath) {
            link.style.fontWeight = 'bold';
        }
    });
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.maxHeight = this.checked ? '370px' : '0';
}