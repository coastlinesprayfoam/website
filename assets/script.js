// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Header Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.borderBottom = '1px solid var(--border-color)';
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Initial call
});

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-loading');
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy-loading');
        imageObserver.observe(img);
    });
});

// Animation on Scroll
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.benefit-card, .service-card, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Contact forms have been removed as requested

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Performance Monitoring and Analytics
document.addEventListener('DOMContentLoaded', function() {
    // Track page load time and performance metrics
    window.addEventListener('load', function() {
        const navigation = performance.getEntriesByType('navigation')[0];
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
        const firstPaint = performance.getEntriesByName('first-paint')[0];
        
        console.log('Performance Metrics:', {
            loadTime: `${loadTime}ms`,
            domContentLoaded: `${domContentLoaded}ms`,
            firstPaint: firstPaint ? `${firstPaint.startTime}ms` : 'N/A'
        });
        
        // Send to analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_performance', {
                load_time: loadTime,
                dom_content_loaded: domContentLoaded,
                page_path: window.location.pathname
            });
        }
    });
    
    // Track user interactions
    function trackInteraction(action, element) {
        console.log('User Interaction:', action, element);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'user_interaction', {
                action: action,
                element: element,
                page_path: window.location.pathname
            });
        }
    }
    
    // Track button clicks
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            trackInteraction('button_click', this.textContent.trim());
        });
    });
    
    // Track phone number clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            trackInteraction('phone_click', this.href);
        });
    });
    
    // Track scroll depth
    let maxScrollDepth = 0;
    function trackScrollDepth() {
        const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth && scrollDepth % 25 === 0) {
            maxScrollDepth = scrollDepth;
            trackInteraction('scroll_depth', `${scrollDepth}%`);
        }
    }
    
    window.addEventListener('scroll', Utils.throttle(trackScrollDepth, 500));
});

// Accessibility Enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation for mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const navMenu = document.querySelector('.nav-menu');
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.focus();
            }
        }
    });
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // Show user-friendly error message for critical errors
    if (e.error && e.error.message && e.error.message.includes('network')) {
        showNotification('Connection error. Please check your internet connection.', 'error');
    }
});

// Service Worker Registration (for caching)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Google Analytics (placeholder - replace with actual tracking ID)
function initAnalytics() {
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_TRACKING_ID', {
            page_title: document.title,
            page_location: window.location.href
        });
    }
}

// Call analytics on page load
document.addEventListener('DOMContentLoaded', initAnalytics);

// Utility Functions
const Utils = {
    // Debounce function for performance
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    
    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Format phone numbers
    formatPhone: function(phone) {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length === 10) {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
        }
        return phone;
    },
    
    // Scroll to element with offset
    scrollToElement: function(element, offset = 80) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};

// Export utils for other scripts
window.Utils = Utils;