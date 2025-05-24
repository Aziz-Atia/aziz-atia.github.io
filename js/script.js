// Portfolio - Atia Binti Aziz
// JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contactForm');
    const navItems = document.querySelectorAll('.nav-links li a');

    // Toggle mobile menu
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('open');
        });
    }

    // Close mobile menu when clicking nav items
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('active');
            if (menuBtn) menuBtn.classList.remove('open');
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
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle contact form submission
    if (contactForm) {
        const formStatus = document.getElementById('form-status');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Display sending message
            if (formStatus) {
                formStatus.innerHTML = '<p class="sending">Sending message...</p>';
            }
            
            // Simulate form submission (replace with actual form handler)
            setTimeout(() => {
                if (formStatus) {
                    formStatus.innerHTML = '<p class="success">Thank you! Your message has been sent successfully.</p>';
                }
                contactForm.reset();
            }, 1000);
        });
    }

    // Add active class to nav items on scroll
    function setActiveNav() {
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNav);

    // Add scroll class to header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3D Tilt effect for cards
    function setupTiltEffect() {
        const tiltElements = document.querySelectorAll('.tilt-effect');
        
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', function(e) {
                const inner = this.querySelector('.tilt-effect-inner');
                if (!inner) return;
                
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const xPercent = (x / rect.width - 0.5) * 20;
                const yPercent = (y / rect.height - 0.5) * 20;
                
                inner.style.transform = `rotateY(${xPercent}deg) rotateX(${-yPercent}deg) translateZ(20px)`;
            });
            
            element.addEventListener('mouseleave', function() {
                const inner = this.querySelector('.tilt-effect-inner');
                if (inner) {
                    inner.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0)';
                }
            });
        });
    }
    
    setupTiltEffect();

    // Setup tilt effect for hero buttons
    function setupButtonTiltEffect() {
        const buttons = document.querySelectorAll('.hero-btns .tilt-effect');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const xPercent = (x / rect.width - 0.5) * 10;
                const yPercent = (y / rect.height - 0.5) * 10;
                
                this.style.transform = `perspective(1000px) rotateY(${xPercent}deg) rotateX(${-yPercent}deg) scale(1.05) translateY(-5px)`;
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1) translateY(0)';
            });
        });
    }
    
    setupButtonTiltEffect();

    // Intersection Observer for staggered animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.stagger-fade-in').forEach(el => {
        observer.observe(el);
    });

    // Rotating text animation
    function setupRotatingText() {
        const rotatingText = document.querySelector('.rotating-text');
        const items = document.querySelectorAll('.rotate-item');
        let currentIndex = 0;
        
        if (items.length > 0) {
            setInterval(() => {
                items[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % items.length;
                items[currentIndex].classList.add('active');
            }, 3000); // Change every 3 seconds
        }
    }
    
    setupRotatingText();

    // Enhanced project card interactions
    function setupProjectCards() {
        const projectCards = document.querySelectorAll('.enhanced-project');
        
        projectCards.forEach(card => {
            const overlay = card.querySelector('.project-overlay');
            
            card.addEventListener('mouseenter', () => {
                if (overlay) overlay.style.opacity = '1';
            });
            
            card.addEventListener('mouseleave', () => {
                if (overlay) overlay.style.opacity = '0';
            });
        });
    }
    
    setupProjectCards();

    // Scroll to top button
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

    // Add CSS for scroll to top button
    const scrollTopStyle = document.createElement('style');
    scrollTopStyle.textContent = `
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
            box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.4);
            z-index: 100;
        }
        
        .scroll-top-btn.show {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-top-btn:hover {
            background-color: var(--primary-dark);
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.6);
        }
    `;
    document.head.appendChild(scrollTopStyle);

    // Intersection Observer for scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.edu-card, .timeline-content, .project-card, .training-card, .contact-card, .award-card');
        
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
        .edu-card, .timeline-content, .project-card, .training-card, .contact-card, .award-card {
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

    // Add animated background particles
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles';
    document.body.appendChild(particlesContainer);
    
    const particlesStyle = document.createElement('style');
    particlesStyle.textContent = `
        #particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }
        
        .particle {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(var(--primary-rgb), 0.2);
            pointer-events: none;
            animation: float 6s ease-in-out infinite;
        }
        
        .particle:nth-child(2n) {
            animation-delay: -2s;
            animation-duration: 8s;
        }
        
        .particle:nth-child(3n) {
            animation-delay: -4s;
            animation-duration: 10s;
        }
    `;
    document.head.appendChild(particlesStyle);
    
    // Create particles
    function createParticles() {
        const particlesCount = 20;
        const container = document.getElementById('particles');
        
        for (let i = 0; i < particlesCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size between 3 and 8 pixels
            const size = Math.random() * 5 + 3;
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random animation duration between 10 and 25 seconds
            const duration = Math.random() * 15 + 10;
            
            // Random opacity between 0.1 and 0.3
            const opacity = Math.random() * 0.2 + 0.1;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = opacity;
            particle.style.animation = `float ${duration}s infinite ease-in-out`;
            
            container.appendChild(particle);
        }
    }
    
    createParticles();

    // Add enhanced styles for new features
    const enhancedStyles = document.createElement('style');
    enhancedStyles.textContent = `
        /* Rotating Text Animation */
        .rotating-text {
            position: relative;
            display: inline-block;
            height: 1.5em;
            overflow: hidden;
        }
        
        .rotate-item {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transform: translateY(100%);
            transition: all 0.5s ease;
            color: var(--primary-color);
            font-weight: 600;
        }
        
        .rotate-item.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Enhanced Project Cards */
        .enhanced-project {
            position: relative;
            overflow: hidden;
        }
        
        .project-status {
            position: absolute;
            top: 15px;
            right: 15px;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            z-index: 10;
        }
        
        .project-status.latest {
            background: linear-gradient(45deg, #ff6b6b, #ee5a5a);
            color: white;
        }
        
        .project-status.ongoing {
            background: linear-gradient(45deg, #4ecdc4, #44a08d);
            color: white;
        }
        
        .project-status.completed {
            background: linear-gradient(45deg, #a8e6cf, #7fcdcd);
            color: white;
        }
        
        .project-status.research {
            background: linear-gradient(45deg, #ffd93d, #ff6b6b);
            color: white;
        }
        
        .project-status.award {
            background: linear-gradient(45deg, #ffd700, #ffed4e);
            color: #333;
        }
        
        .project-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            background: linear-gradient(45deg, var(--primary-color), var(--primary-dark));
            color: white;
            z-index: 10;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 15px;
        }
        
        .tech-tag {
            background: linear-gradient(45deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.2));
            border: 1px solid rgba(var(--primary-rgb), 0.3);
            color: var(--primary-color);
            padding: 4px 8px;
            border-radius: 15px;
            font-size: 0.75rem;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .tech-tag:hover {
            background: var(--primary-color);
            color: white;
            transform: translateY(-2px);
        }
        
        .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            opacity: 0;
            transition: all 0.3s ease;
            border-radius: var(--border-radius);
        }
        
        .project-overlay .btn {
            padding: 8px 16px;
            font-size: 0.9rem;
        }
        
        /* Awards Section */
        .awards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .award-card {
            background-color: var(--light-color);
            padding: 30px;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            transition: var(--transition);
            text-align: center;
            position: relative;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .award-card:hover {
            transform: translateY(-5px);
        }
        
        .award-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            padding: 20px;
            border-radius: 50%;
            display: inline-block;
            background: linear-gradient(45deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.2));
            border: 3px solid rgba(var(--primary-rgb), 0.3);
        }
        
        .award-icon.gold {
            color: #ffd700;
            background: linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.1));
            border-color: #ffd700;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
        }
        
        .award-icon.silver {
            color: #c0c0c0;
            background: linear-gradient(45deg, rgba(192, 192, 192, 0.2), rgba(192, 192, 192, 0.1));
            border-color: #c0c0c0;
            box-shadow: 0 0 20px rgba(192, 192, 192, 0.3);
        }
        
        .award-icon.bronze {
            color: #cd7f32;
            background: linear-gradient(45deg, rgba(205, 127, 50, 0.2), rgba(205, 127, 50, 0.1));
            border-color: #cd7f32;
            box-shadow: 0 0 20px rgba(205, 127, 50, 0.3);
        }
        
        .award-icon.honor {
            color: #9966cc;
            background: linear-gradient(45deg, rgba(153, 102, 204, 0.2), rgba(153, 102, 204, 0.1));
            border-color: #9966cc;
            box-shadow: 0 0 20px rgba(153, 102, 204, 0.3);
        }
        
        .award-icon.champion {
            color: #ff6b6b;
            background: linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(255, 107, 107, 0.1));
            border-color: #ff6b6b;
            box-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
        }
        
        .award-icon.scholarship {
            color: var(--primary-color);
            background: linear-gradient(45deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.1));
            border-color: var(--primary-color);
            box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
        }
        
        .award-card h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 1.3rem;
        }
        
        .award-card p {
            margin-bottom: 8px;
            color: var(--gray-color);
        }
        
        .award-card p:last-child {
            margin-top: 15px;
            font-style: italic;
            color: var(--dark-color);
        }
        
        /* Enhanced mobile responsiveness */
        @media screen and (max-width: 768px) {
            .rotating-text {
                font-size: 0.9rem;
            }
            
            .tech-stack {
                justify-content: center;
            }
            
            .awards-grid {
                grid-template-columns: 1fr;
            }
            
            .project-overlay {
                position: static;
                background: transparent;
                opacity: 1;
                margin-top: 15px;
                flex-direction: column;
            }
            
            .project-overlay .btn {
                font-size: 0.8rem;
                padding: 6px 12px;
            }
        }
    `;
    document.head.appendChild(enhancedStyles);

    // Run fade animations on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});