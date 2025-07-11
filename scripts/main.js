import { loadHeader } from './header.js';
import { loadGreeting } from './greeting.js';
import { loadSkills } from './skills.js';
import { loadTopButton } from './topButton.js';
import { loadEducation } from './education.js';
import { loadExperience } from './experience.js';

// Load components
document.addEventListener('DOMContentLoaded', () => {
    //load universal components
    loadHeader();
    loadTopButton();

    // page specific components
    if(document.getElementById('greeting')) {
        loadGreeting();
        loadSkills();
    }
    //check if on education page
    if(document.getElementById('education-content')) {
        loadEducation(); 
    }

    //check if on experience page
    if (document.getElementById('experience-content')) {
        loadExperience();
    }
});