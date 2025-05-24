import { loadHeader } from './header.js';
import { loadGreeting } from './greeting.js';
import { loadSkills } from './skills.js';
import { loadTopButton } from './topButton.js';

// Load components
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadGreeting();
    loadSkills();
    loadTopButton();
});