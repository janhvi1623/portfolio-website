// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight sections when scrolling
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.backgroundColor = '#ffe6e6';
            entry.target.style.transition = 'background-color 0.5s ease';
        } else {
            entry.target.style.backgroundColor = 'transparent';
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Console welcome message
console.log("Welcome to Janhvi Bhute's Portfolio!");

// Footer current year
const footer = document.querySelector('footer');
if (footer) {
    footer.innerHTML = `&copy; ${new Date().getFullYear()} Janhvi Bhute`;
}

// Greeting pop-up
window.addEventListener('load', () => {
    setTimeout(() => {
        alert("Hi there! Welcome to my portfolio. Explore my projects and skills.");
    }, 1000);
});
