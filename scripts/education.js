import { createScrollObserver } from './observers.js';
import { competitiveSites, degrees, certifications } from './portfolio.js';
import { createGraduationImg } from './education/GraduationImg.js';

export function loadEducation() {
    const educationContent = document.getElementById('education-content');
    educationContent.innerHTML = `
        <div class="education-main">
            <div class="basic-education">
                <div class="heading-div section-hidden fade-up">
                    <div class="heading-img-div">
                        <div id="graduation-svg-container" class="education-img"></div>
                    </div>
                    <div class="heading-text-div">
                        <h1 class="heading-text">Education</h1>
                        <h3 class="heading-sub-text">Basic Qualification and Certifications</h3>
                        <div id="competitive-sites"></div>
                    </div>
                </div>
                <div id="educations"></div>
                <div id="certifications"></div>
            </div>
        </div>
    `;

    // Add the SVG to the DOM
    const graduationImgContainer = document.getElementById('graduation-svg-container');
    const graduationSvg = createGraduationImg();
    graduationImgContainer.appendChild(graduationSvg);
 

    // Load competitive sites
    loadCompetitiveSites();
    
    // Load degrees
    loadDegrees();

    // Load certifications
    loadCertifications();
    
    // Set up scroll animations
    const observer = createScrollObserver();
    document.querySelectorAll('.section-hidden').forEach(el => {
        observer.observe(el);
    });
}

function loadCompetitiveSites() {
    const container = document.getElementById('competitive-sites');
    console.log(competitiveSites);

    container.innerHTML = `
        <div class="competitive-sites">
            ${competitiveSites.competitiveSites.map(site => `
                <a href="${site.profileLink}" target="_blank" rel="noopener noreferrer"> 
                    <img class="${site.iconifyClassname} competitive-site-icon" src="${site.img}" style="color: ${site.style.color}"/>
                   <!-- <span class="tooltiptext">Tooltip text</span> -->
                </a>
            `).join('')}
        </div>
    `;
}

function loadDegrees() {
    const container = document.getElementById('educations');
    container.innerHTML = `
        <div class="educations-header-div section-hidden fade-up">
            <h1 class="educations-header">Degrees Received</h1>
        </div>
        <div class="educations-body-div">
            ${degrees.degrees.map(degree => createDegreeCard(degree)).join('')}
        </div>
    `;
}

function createDegreeCard(degree) {
    return `
        <div class="degree-card section-hidden fade-up">
            ${degree.logo_path ? `
                <div class="card-img">
                    <img src="../assets/images/${degree.logo_path}" 
                         alt="${degree.alt_name}"
                         class="degree-logo">
                </div>
            ` : ''}
            <div class="card-body" ${degree.logo_path ? 'style="width: 90%"' : 'style="width: 100%"'}>
                <div class="body-header">
                    <div class="body-header-title">
                        <h2 class="card-title">${degree.title}</h2>
                        <h3 class="card-subtitle">${degree.subtitle}</h3>
                    </div>
                    <div class="body-header-duration">
                        <h3 class="duration">${degree.duration}</h3>
                    </div>
                </div>
                <div class="body-content">
                    ${degree.descriptions.map(desc => `
                        <p class="content-list">${desc}</p>
                    `).join('')}
                    ${degree.website_link ? `
                        <a href="${degree.website_link}" target="_blank" rel="noopener noreferrer">
                            <div class="visit-btn">
                                <p class="btn">Visit Website</p>
                            </div>
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

function loadCertifications() {
    const container = document.getElementById('certifications');
    container.innerHTML = `
        <div class="educations-header-div section-hidden fade-up">
            <h1 class="educations-header">Certifications</h1>
        </div>
        <div class="certs-body-div">
            ${certifications.certifications.map(cert => createCertificationCard(cert)).join('')}
        </div>
    `;

    // Set up scroll animations for new elements
    document.querySelectorAll('.section-hidden').forEach(el => {
        if (!el.isConnected) return;
        createScrollObserver().observe(el);
    });
}

function createCertificationCard(certificate) {
    return `
    <div class="cert-card section-hidden fade-up">
        <div class="content">
            <a href="${certificate.certificate_link}" target="_blank" rel="noopener noreferrer">
                <div class="content-overlay"></div>
                <div class="cert-header" style="background-color: ${certificate.color_code}">
                    <img class="logo_img" 
                         src="../assets/images/${certificate.logo_path}" 
                         alt="${certificate.alt_name}">
                </div>
                <div class="content-details fadeIn-top">
                    <h3 class="content-title">Certificate</h3>
                </div>
            </a>
        </div>
        <div class="cert-body">
            <h2 class="cert-body-title">${certificate.title}</h2>
            <h3 class="cert-body-subtitle">${certificate.subtitle}</h3>
        </div>
    </div>
    `;
}