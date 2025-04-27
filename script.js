// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
// Enhanced back to top button
const backToTopButton = document.querySelector('.back-to-top');

// Show/hide button with animation
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition > 300) {
        backToTopButton.classList.add('active');
        
        // Optional: Change button style based on how far scrolled
        const docHeight = document.body.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = (scrollPosition / (docHeight - winHeight)) * 100;
        
        // Add progress indicator (optional)
        backToTopButton.style.setProperty('--progress', `${scrollPercent}%`);
    } else {
        backToTopButton.classList.remove('active');
    }
});

// Smooth scroll with animation frame for better performance
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Check if smooth scroll is supported
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Fallback for older browsers
        const scrollToTop = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, currentPosition - currentPosition / 8);
            }
        };
        scrollToTop();
    }
    
    // Add click feedback animation
    backToTopButton.classList.add('clicked');
    setTimeout(() => {
        backToTopButton.classList.remove('clicked');
    }, 300);
});

// Animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    observer.observe(element);
});

// Enhanced Tilt Animation with Multiple Effects
document.querySelectorAll('.skill-card').forEach(card => {
// Mouse move for 3D tilt
card.addEventListener('mousemove', (e) => {
const cardRect = card.getBoundingClientRect();
const x = e.clientX - cardRect.left;
const y = e.clientY - cardRect.top;

const centerX = cardRect.width / 2;
const centerY = cardRect.height / 2;

const angleX = (y - centerY) / 20;
const angleY = (centerX - x) / 20;

// Apply tilt with existing transforms
card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px) scale(1.03)`;
});

// Mouse leave to reset
card.addEventListener('mouseleave', () => {
card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
});

// Click effect
card.addEventListener('click', () => {
card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-10px) scale(0.95)';
setTimeout(() => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-10px) scale(1.03)';
}, 150);
});
}); 

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.hero h1');
    const span = header.querySelector('span');
    const originalText = span.textContent;
    const speed = 100; // typing speed in ms
    const pause = 2000; // pause between animations in ms
    
    // Wrap each letter in a span
    span.innerHTML = '';
    
    function typeWriter() {
    let i = 0;
    let isDeleting = false;
    let currentText = '';
    
    function type() {
        if (!isDeleting && i < originalText.length) {
            // Typing forward
            currentText = originalText.substring(0, i + 1);
            span.textContent = currentText;
            i++;
            setTimeout(type, speed);
        } else if (isDeleting && i > 0) {
            // Deleting
            currentText = originalText.substring(0, i - 1);
            span.textContent = currentText;
            i--;
            setTimeout(type, speed / 2);
        } else {
            // Switch between typing and deleting
            isDeleting = !isDeleting;
            setTimeout(type, isDeleting ? pause : speed);
        }
    }
    
    type();
    }
    
    // Start the animation after a short delay
    setTimeout(typeWriter, 1000);
    });