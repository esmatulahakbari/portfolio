// script.js

// Utility: Debounce function for performance
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class
    document.body.classList.add('loading');

    // Remove loading class after 1s
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 1000);

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    if (!navLinks.length) {
        console.warn('Navigation links not found.');
        return;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            try {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        console.warn(`Target ${href} not found.`);
                    }
                }
            } catch (err) {
                console.error('Error in smooth scrolling:', err);
            }
        });
    });

    // Active Link Highlighting
    try {
        const currentPath = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').toLowerCase();
            const isHome = (currentPath === '' || currentPath === 'index.html' || currentPath === '/') && 
                           (linkPath === 'index.html' || linkPath === '/');
            const isActive = isHome || linkPath === currentPath;
            link.setAttribute('aria-current', isActive ? 'page' : 'false');
            if (isActive) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    } catch (err) {
        console.error('Error in active link highlighting:', err);
    }

    // Scroll Reveal Animations
    const sections = document.querySelectorAll('section');
    if (sections.length) {
        const revealSection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.1,
        });

        sections.forEach(section => {
            section.classList.add('section-hidden');
            sectionObserver.observe(section);
        });
    }

    // Card Hover Enhancements
    const cards = document.querySelectorAll('.skills-list > li, #experience > ul > li, #education ul li');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-3px)';
            card.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
        });
    });

    // Back-to-Top Button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑ Top';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    const toggleBackToTop = debounce(() => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, 100);

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleBackToTop);

// script.js (partial update)

// ... (keep debounce, DOMContentLoaded, smooth scrolling, etc.)

// Active Link Highlighting
try {
    const currentPath = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').toLowerCase();
        const isHome = (currentPath === '' || currentPath === 'index.html' || currentPath === '/') && 
                       (linkPath === 'index.html' || linkPath === '/');
        const isActive = isHome || linkPath === currentPath;
        link.setAttribute('aria-current', isActive ? 'page' : 'false');
        if (isActive) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
} catch (err) {
    console.error('Error in active link highlighting:', err);
}

// Contact Form
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            const name = contactForm.querySelector('#name')?.value.trim();
            const email = contactForm.querySelector('#email')?.value.trim();
            const message = contactForm.querySelector('#message')?.value.trim();

            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showNotification('Please enter a valid email.', 'error');
                return;
            }

            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'es.akbari.ak@gmail.com'
            })
            .then(() => {
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
            })
            .catch((error) => {
                showNotification('Failed to send message. Please try again.', 'error');
                console.error('EmailJS error:', error);
            });
        } catch (err) {
            showNotification('An error occurred. Please try again.', 'error');
            console.error('Error in form submission:', err);
        }
    });
}

// ... (keep showNotification, star ratings, lazy loading, etc.)

// ... (keep the rest of the script: showNotification, star ratings, lazy loading, etc.)

    // Notification Function (ARIA Live Region)
    const showNotification = (message, type) => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    };

    // Dynamic Star Ratings
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach(rating => {
        try {
            const stars = rating.textContent.match(/⭐/g)?.length || 0;
            if (stars > 0) {
                rating.innerHTML = '';
                for (let i = 0; i < 5; i++) {
                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.setAttribute('width', '16');
                    svg.setAttribute('height', '16');
                    svg.setAttribute('viewBox', '0 0 24 24');
                    svg.setAttribute('fill', i < stars ? 'var(--rating-color)' : '#d1d5db');
                    svg.setAttribute('aria-hidden', 'true');
                    svg.innerHTML = '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>';
                    rating.appendChild(svg);
                }
            }
        } catch (err) {
            console.error('Error in star ratings:', err);
        }
    });

    // Lazy Load Images
    const images = document.querySelectorAll('img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            if (img.dataset.src) {
                imageObserver.observe(img);
            }
        });
    }
});document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all fields.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});