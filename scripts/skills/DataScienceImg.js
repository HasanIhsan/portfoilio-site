export function createDataScienceImg() {
    const img = document.createElement('img');
    img.src = 'assets/images/data_science.svg'; // Adjust path as needed
    img.alt = 'Data Science Illustration';
    img.className = 'skills-svg';
    return img;
}