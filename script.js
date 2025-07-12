document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Navigation and Scroll Effect
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        reveal(); // Call reveal on scroll
    });

    // Reveal on scroll (Corrected and Crucial Change)
    function reveal() {
        const reveals = document.querySelectorAll(".section, .hero");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else if (!reveals[i].classList.contains("hero")){
                reveals[i].classList.remove("active");
            }
        }
    }

    // Call reveal AFTER the entire page is fully loaded (CRUCIAL FIX)
    window.addEventListener('load', reveal);
});