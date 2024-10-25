// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert on Button Click
document.querySelector('.btn').addEventListener('click', function() {
    if (confirm('Do you want to go to the shop page?')) {
        window.location.href = 'shop.html';
    }
});

// Navigation Link Alerts
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            alert('You clicked on ' + link.textContent + '!');
        });
    });
});

// Welcome Message on Page Load
window.onload = function() {
    alert("Welcome to Lesotho Shoes Hub!");
};
