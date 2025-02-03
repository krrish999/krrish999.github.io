// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Example form submission handling (Add your backend integration here)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    form.reset();
});
