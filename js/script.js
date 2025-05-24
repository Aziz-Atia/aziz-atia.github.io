// Portfolio - Nadia Mashiat
// JavaScript functionality

// DOM Elements
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');
const navItems = document.querySelectorAll('.nav-links li a');

// Toggle mobile menu
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate burger menu
    menuBtn.classList.toggle('open');
});

// Close mobile menu when clicking nav items
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('open');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for header
                behavior: 'smooth'
            });
        }
    });
});

// Handle contact form submission
if (contactForm) {
    // Get the form status element
    const formStatus = document.getElementById('form-status');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get the form data
        const formData = new FormData(contactForm);
        
        // Display sending message
        formStatus.innerHTML = '<p class="sending">Sending message...</p>';
        
        // Send the form data to Formspree
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // Success message
            formStatus.innerHTML = '<p class="success">Thank you! Your message has been sent successfully.</p>';
            // Reset form
            contactForm.reset();
        })
        .catch(error => {
            // Error message
            formStatus.innerHTML = '<p class="error">Oops! There was a problem sending your message. Please try again.</p>';
            console.error('Error:', error);
        });
    });
}

// Add active class to nav items on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Add scroll to top button functionality
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Add CSS for scroll to top button that we created dynamically
const style = document.createElement('style');
style.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 100;
    }
    
    .scroll-top-btn.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top-btn:hover {
        background-color: #236b43;
        transform: translateY(-3px);
    }
`;
document.head.appendChild(style);

// Simple fade-in animation for elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.edu-card, .timeline-content, .project-card, .training-card, .contact-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('fade-in');
        }
    });
};

// Add fade-in class with CSS
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
    .edu-card, .timeline-content, .project-card, .training-card, .contact-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(fadeStyle);

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll); 