// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations - fade in elements when they appear in the viewport
const fadeInElements = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeInElements.forEach(fadeInElement => {
    appearOnScroll.observe(fadeInElement);
});

// Add glow effect to buttons on hover
document.querySelectorAll('.glow-button').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.classList.add('glow');
    });
    button.addEventListener('mouseleave', function () {
        this.classList.remove('glow');
    });
});
