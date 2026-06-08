/* ========================================
   MAIN JAVASCRIPT FILE
   ======================================== */

// Configuration
const CONFIG = {
    github: {
        username: 'your-username',
        token: ''  // Leave empty for public repos, or add GitHub token
    },
    contact: {
        email: 'your.email@example.com',
        phone: '+91 12345 67890'
    }
};

// Global State
const state = {
    isMenuOpen: false,
    currentSection: 'home',
    isDarkMode: true
};

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeNav();
    initializeScrollAnimation();
    setupEventListeners();
    setupScrollToTopButton();
    setupSmoothScroll();
    initializeContactForm();
});

// ========================================
// NAVIGATION
// ========================================

function initializeNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        state.isMenuOpen = !state.isMenuOpen;
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            state.isMenuOpen = false;
            updateActiveNav(link);
        });
    });

    // Close menu on scroll
    document.addEventListener('scroll', () => {
        if (state.isMenuOpen) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            state.isMenuOpen = false;
        }
    });
}

function updateActiveNav(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initializeScrollAnimation() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.animation = 'fadeSlideIn 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe skill cards
    setTimeout(() => {
        document.querySelectorAll('.skill-card, .project-card, .achievement-card, .repo-card').forEach((card, index) => {
            card.style.animation = `popIn 0.6s ease-out forwards`;
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 500);
}

// ========================================
// SMOOTH SCROLL
// ========================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

function setupScrollToTopButton() {
    const scrollBtn = document.getElementById('scroll-top-btn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Project filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects(btn.dataset.filter);
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', updateNavOnScroll);
}

function updateNavOnScroll() {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === current) {
            link.classList.add('active');
        }
    });
}

// ========================================
// PROJECT FILTERING
// ========================================

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.animation = 'fadeSlideIn 0.6s ease-out forwards';
            }, 10);
        } else {
            card.style.display = 'none';
        }
    });
}

// ========================================
// CONTACT FORM
// ========================================

function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validate form
            if (!name || !email || !message) {
                showNotification('Please fill all fields', 'error');
                return;
            }

            // Email validation
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email', 'error');
                return;
            }

            // Show loading state
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            try {
                // Send email via FormSubmit or EmailJS
                // For now, we'll just show a success message
                // To integrate with backend, uncomment the appropriate method below

                // Method 1: Using FormSubmit (no backend needed)
                // const formData = new FormData();
                // formData.append('name', name);
                // formData.append('email', email);
                // formData.append('message', message);
                // await fetch('https://formsubmit.co/your-email@example.com', {
                //     method: 'POST',
                //     body: formData
                // });

                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            } catch (error) {
                showNotification('Error sending message. Please try again.', 'error');
                console.error('Error:', error);
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create a simple notification (you can enhance this)
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#00d4ff' : type === 'error' ? '#ff4444' : '#0099cc'};
        color: #000;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideLeft 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========================================
// TYPING ANIMATION
// ========================================

function setupTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    const phrases = [
        'Full Stack Developer | AI Enthusiast | Problem Solver',
        'Building scalable web applications',
        'Passionate about Machine Learning & NLP'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (!isDeleting && charIndex < currentPhrase.length) {
            typingText.textContent += currentPhrase.charAt(charIndex);
            charIndex++;
            setTimeout(type, 50);
        } else if (isDeleting && charIndex > 0) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, 30);
        } else if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 500);
        }
    }

    type();
}

// Call typing animation after page load
window.addEventListener('load', setupTypingAnimation);

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy loading images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));

// ========================================
// EXPORT FOR USE IN OTHER FILES
// ========================================

window.CONFIG = CONFIG;
window.state = state;
window.showNotification = showNotification;
