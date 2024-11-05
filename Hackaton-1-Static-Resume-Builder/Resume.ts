const skillHide = document.getElementById('skillHide') as HTMLButtonElement;
const skillsSection = document.querySelector('.skills') as HTMLElement; // Renamed variable to avoid conflicts

skillHide.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
