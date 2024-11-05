var skillHide = document.getElementById('skillHide');
var skillsSection = document.querySelector('.skills'); // Renamed variable to avoid conflicts
skillHide.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
