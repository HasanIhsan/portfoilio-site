import { createDataScienceImg } from './skills/DataScienceImg.js';
import { createScrollObserver } from './observers.js';
import { createFullStackImg } from './skills/FullStackImg.js';

const skillsData = [
    {
        id: 1,
        fileName: 'DataScienceImg',
        title: 'AI',
        softwareSkills: [
            { skillName: 'Python', fontAwesomeClassname: 'fab fa-python' }, 
            { skillName: 'TensorFlow', fontAwesomeClassname: 'fas fa-network-wired' },
            { skillName: 'PyTorch', fontAwesomeClassname: 'fas fa-microchip' },
            { skillName: 'Deep Learning', fontAwesomeClassname: 'fas fa-brain' },
        ],
        skills: [
            'Deep learning model development',
            'Neural network architecture design',
            'Natural Language Processing (NLP)',
            'Computer vision implementations',
          
        ]
    },
    {
        id: 2,
        fileName: 'FullStackImg',
        title: 'Full Stack Development',
        softwareSkills: [
            {skillName: 'HTML', fontAwesomeClassname: 'fab fa-html5' },
            { skillName: 'CSS', fontAwesomeClassname: 'fab fa-css3-alt' },
            { skillName: 'JavaScript', fontAwesomeClassname: 'fab fa-js' },
            { skillName: 'ReactJS', fontAwesomeClassname: 'fab fa-react' },
            { skillName: 'NodeJS', fontAwesomeClassname: 'fab fa-node-js' },
            { skillName: 'MongoDB', fontAwesomeClassname: 'fas fa-database' },
        ],
        skills: [
            'Building responsive web applications',
            'RESTful API development',
            'Database management and integration',
            'Version control with Git',
        ]
    
    }
];

const componentMap = {
    DataScienceImg: createDataScienceImg,
    FullStackImg: createFullStackImg
}

export function loadSkills() {
    const skillsSection = document.getElementById('skills');
    skillsSection.innerHTML = `
        <div class="skills-header-div section-hidden fade-up">
            <h1 class="skills-header">What I Do?</h1>
        </div>
        <div class="skills-container"></div>
    `;

    const observer = createScrollObserver();
    observer.observe(document.querySelector('.skills-header-div'));

    skillsData.forEach((skill, index) => {
        const skillDiv = document.createElement('div');
        skillDiv.className = `skills-main-div section-hidden ${index % 2 === 0 ? 'fade-left' : 'fade-right'}`;
        
        const imageDiv = document.createElement('div');
        imageDiv.className = 'skills-image-div';
       // const svg = createDataScienceImg();
        
       // Get the correct image creator based on fileName
        let imageCreator;
        switch(skill.fileName) {
            case 'DataScienceImg':
                imageCreator = createDataScienceImg;
                break;
            case 'FullStackImg':
                imageCreator = createFullStackImg;
                break;
            default:
                imageCreator = createDataScienceImg;
        }
        
        const imageElement = imageCreator();
        imageDiv.appendChild(imageElement);

      

        const textDiv = document.createElement('div');
        textDiv.className = 'skills-text-div';
        textDiv.innerHTML = `
            <h1 class="skills-heading">${skill.title}</h1>
            <div class="software-skills">
                ${skill.softwareSkills.map(icon => `
                    <div class="skill-tooltip">
                        <i class="${icon.fontAwesomeClassname} skill-icon"></i>
                        <span class="tooltip-text">${icon.skillName}</span>
                    </div>
                `).join('')}
            </div>
            ${skill.skills.map(text => `
                <p class="skills-text">${text}</p>
            `).join('')}
        `;

        skillDiv.appendChild(imageDiv);
        skillDiv.appendChild(textDiv);
        document.querySelector('.skills-container').appendChild(skillDiv);
        observer.observe(skillDiv);
    });
}