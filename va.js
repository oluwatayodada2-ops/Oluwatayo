// Portfolio Website - Interactive Features
// No inline JavaScript - everything is here

(function() {
    'use strict';
    
    console.log('Dada Oluwatayo Portfolio - Loaded successfully');
    
    // Smooth scroll for any anchor links (if added in future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '' && href !== 'javascript:void(0)') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add hover effect tracking for external links (optional analytics)
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('External link clicked:', this.href);
            // You can add Google Analytics or tracking here if needed
        });
    });
    
    // Track phone/email clicks for engagement metrics
    const phoneLink = document.querySelector('a[href^="tel:"]');
    const emailLink = document.querySelector('a[href^="mailto:"]');
    
    if (phoneLink) {
        phoneLink.addEventListener('click', function() {
            console.log('Phone number clicked - Call initiated');
            // Optional: Add analytics event
        });
    }
    
    if (emailLink) {
        emailLink.addEventListener('click', function() {
            console.log('Email address clicked - Compose email');
            // Optional: Add analytics event
        });
    }
    
    // Page load animation trigger
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        console.log('Portfolio fully loaded and ready');
    });
    
    // Optional: Add dynamic year to footer
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('footer .fa-copyright');
    if (copyrightElements.length > 0) {
        // Update copyright year if needed
        const footerText = document.querySelector('footer p:first-child');
        if (footerText && footerText.innerHTML.includes('2025')) {
            // Keep as is or update dynamically
        }
    }
})();