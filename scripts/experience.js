import { experience } from './portfolio.js';
import { createScrollObserver } from './observers.js';
import { createExperienceImg } from './experience/ExperienceImg.js';

export function loadExperience() {
    const experienceContent = document.getElementById('experience-content');
    experienceContent.innerHTML = `
        <div class="experience-main">
            <div class="basic-experience ">
                <div class="experience-heading-div section-hidden fade-up">
                    <div class="experience-heading-img-div">
                        <div id="experience-svg-container" class="experience-img"></div>
                    </div>
                    <div class="experience-heading-text-div">
                        <h1 class="experience-heading-text">${experience.title}</h1>
                        <h3 class="experience-heading-sub-text">${experience.subtitle}</h3>
                        <p class="experience-header-detail-text">${experience.description}</p>
                    </div>
                </div>
            </div>
            <div id="experience-accordion"></div>
        </div>
    `;

    // Add the SVG to the DOM
    const experienceImgContainer = document.getElementById('experience-svg-container');
    const experienceSvg = createExperienceImg();
    experienceImgContainer.appendChild(experienceSvg);

    // Load experience accordion
    loadExperienceAccordion();

     // Set up scroll animations
    const observer = createScrollObserver();
    document.querySelectorAll('.section-hidden').forEach(el => {
        observer.observe(el);
    });
}

 

function loadExperienceAccordion() {
    const accordionContainer = document.getElementById('experience-accordion');
    
    accordionContainer.innerHTML = experience.sections.map(section => `
        <div class="accordion-section">
            <div class="accordion-header">${section.title}</div>
            <div class="accordion-content section-hidden fade-up">
                ${section.experiences.map((exp, index) => 
                    createExperienceCard(exp, index, section.experiences.length)
                ).join('')}
            </div>
        </div>
    `).join('');

    // Add accordion functionality
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('active');
        });
    });

    // Open first accordion by default
    //if (accordionContainer.firstElementChild) {
    //    const firstContent = accordionContainer.firstElementChild.querySelector('.accordion-content');
    //    firstContent.classList.add('active');
   // }

    // Set up scroll animations for new elements
    document.querySelectorAll('.section-hidden').forEach(el => {
        if (!el.isConnected) return;
        createScrollObserver().observe(el);
    });
}

function createExperienceCard(exp, index, total) {
    const isFirst = index === 0;
    const isLast = index === total - 1;
    const showStepper = total > 1;

    return `
        <div class="experience-list-item">
            <div class="experience-card-logo-div">
                <img class="experience-card-logo" 
                     src="${exp.logo_path}" 
                     alt="${exp.company}">
            </div>
            
             ${showStepper ? `
            <div class="experience-card-stepper">
                <div class="stepper-dot"></div>
                <div class="stepper-line ${isFirst ? 'hide-top' : ''} ${isLast ? 'hide-bottom' : ''}"></div>
            </div>
            ` : '<div class="experience-card-stepper"></div>'}

            <div class="experience-card">
                <div class="experience-card-header-div">
                    <div>
                        <h3 class="experience-card-title">${exp.title}</h3>
                        <p class="experience-card-company">
                            <a href="${exp.company_url}" target="_blank" rel="noopener noreferrer">
                                ${exp.company}
                            </a>
                        </p>
                    </div>
                    <div class="experience-card-heading-right">
                        <p class="experience-card-duration">${exp.duration}</p>
                        <p class="experience-card-location">${exp.location}</p>
                    </div>
                </div>
                <p class="experience-card-description">${exp.description}</p>
            </div>
        </div>
    `;
}