// Gestion de l'icône du menu pour le mobile
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animation de machine à écrire
$(document).ready(function () {
    if ($('.typed-text-output').length === 1) {
        var typed_strings = [
            "I AM A STUDENT IN AI",
            "I AM A YOUTUBER",
            "I AM A JUNIOR MULTIMODAL AI ENGINEER"
        ];
        
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000, // Délai avant de commencer à effacer
            smartBackspace: true,
            loop: true,
            cursorChar: '', // Curseur pour le style de la machine à écrire
            showCursor: true
        });
    }
});
// Affiche automatiquement l'année en cours dans le footer
document.getElementById("year").textContent = new Date().getFullYear();
