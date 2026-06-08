/* ========================================
   ANIMATIONS - Animation controller and effects
   ======================================== */

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
});

// ========================================
// INITIALIZE ANIMATIONS
// ========================================

function initializeAnimations() {
    setupIntersectionObserver();
    setupParallaxEffect();
    setupHoverEffects();
}

// ========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ========================================

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class
                entry.target.classList.add('scroll-animate');

                // Animate individual cards with stagger
                const cards = entry.target.querySelectorAll('.card-animate');
                cards.forEach((card, index) => {
                    card.style.animation = `popIn 0.6s ease-out forwards`;
                    card.style.animationDelay = `${index * 0.1}s`;
                });

                // Animate list items
                const listItems = entry.target.querySelectorAll('li');
                listItems.forEach((item, index) => {
                    item.style.animation = `fadeSlideIn 0.6s ease-out forwards`;
                    item.style.animationDelay = `${(index + 1) * 0.1}s`;
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ========================================
// PARALLAX EFFECT
// ========================================

function setupParallaxEffect() {
    const heroAnimation = document.querySelector('.hero-animation');
    if (!heroAnimation) return;

    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate movement
        const moveX = (clientX / innerWidth - 0.5) * 20;
        const moveY = (clientY / innerHeight - 0.5) * 20;

        // Apply transform
        heroAnimation.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

// ========================================
// HOVER EFFECTS
// ========================================

function setupHoverEffects() {
    // Card hover effect
    setupCardHoverEffect();

    // Button hover effect
    setupButtonHoverEffect();

    // Link hover effect
    setupLinkHoverEffect();
}

function setupCardHoverEffect() {
    document.querySelectorAll('.skill-card, .project-card, .repo-card, .achievement-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

function setupButtonHoverEffect() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
}

function setupLinkHoverEffect() {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (!link.classList.contains('btn')) {
                link.style.color = 'var(--primary-color)';
            }
        });
    });
}

// ========================================
// COUNTER ANIMATION (for statistics)
// ========================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// TEXT ANIMATION
// ========================================

function animateTextOnScroll(element) {
    const text = element.textContent;
    element.textContent = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animation = `fadeSlideIn 0.5s ease-out forwards`;
        span.style.animationDelay = `${index * 30}ms`;
        element.appendChild(span);
    });
}

// ========================================
// STAGGER ANIMATIONS
// ========================================

function staggerAnimate(elements, animationName = 'fadeSlideIn', delayMs = 100) {
    elements.forEach((element, index) => {
        element.style.animation = `${animationName} 0.6s ease-out forwards`;
        element.style.animationDelay = `${index * delayMs}ms`;
    });
}

// ========================================
// REVEAL ANIMATIONS
// ========================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(element => observer.observe(element));
}

// ========================================
// SCROLL PROGRESS BAR
// ========================================

function setupScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00d4ff, #0099cc);
        z-index: 999;
        width: 0%;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// ========================================
// PARTICLE ANIMATION
// ========================================

function createParticles(x, y, count = 5) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            pointer-events: none;
            font-size: 10px;
            color: #00d4ff;
            left: ${x}px;
            top: ${y}px;
            z-index: 9999;
        `;
        particle.textContent = '✨';

        const angle = (Math.PI * 2 * i) / count;
        const velocity = 2 + Math.random() * 2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let tx = 0;
        let ty = 0;

        const animate = () => {
            tx += vx;
            ty += vy - 0.1; // gravity
            particle.style.transform = `translate(${tx}px, ${ty}px)`;
            particle.style.opacity = Math.max(0, 1 - (Math.sqrt(tx * tx + ty * ty) / 100));

            if (particle.style.opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        document.body.appendChild(particle);
        animate();
    }
}

// ========================================
// GRADIENT TEXT ANIMATION
// ========================================

function setupGradientText(element) {
    if (!element) return;

    element.style.backgroundImage = 'linear-gradient(90deg, #00d4ff, #0099cc)';
    element.style.backgroundClip = 'text';
    element.style.WebkitBackgroundClip = 'text';
    element.style.WebkitTextFillColor = 'transparent';
    element.style.backgroundSize = '200% 100%';
    element.style.animation = 'gradient-shift 3s ease infinite';
}

// ========================================
// SMOOTH SCROLL BEHAVIOR
// ========================================

function setupSmoothScrollBehavior() {
    document.documentElement.style.scrollBehavior = 'smooth';

    // Fallback for browsers that don't support smooth scroll
    if (!('scrollBehavior' in document.documentElement.style)) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();
                    smoothScrollTo(target);
                }
            });
        });
    }
}

function smoothScrollTo(element) {
    const targetTop = element.getBoundingClientRect().top + window.pageYOffset;
    const startTop = window.pageYOffset;
    const distance = targetTop - startTop;
    const duration = 1000;
    let start = null;

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeInOutCubic)
        const easeProgress = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startTop + distance * easeProgress);

        if (elapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ========================================
// INITIALIZE ALL SCROLL ANIMATIONS
// ========================================

setupScrollProgressBar();
setupSmoothScrollBehavior();
revealOnScroll();

// Export animations for use in other files
window.animateCounter = animateCounter;
window.staggerAnimate = staggerAnimate;
window.createParticles = createParticles;
window.setupGradientText = setupGradientText;
window.smoothScrollTo = smoothScrollTo;
