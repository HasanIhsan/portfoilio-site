export function createExperienceImg() {
    const img = document.createElement('img');
    img.src = '../assets/images/experience.svg'; // Adjust path as needed
    img.alt = 'Experience Illustration';
    img.className = 'skills-svg';
    return img;
}