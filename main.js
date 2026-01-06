// KNZ Academy - Main JavaScript File

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTypewriter();
    initializeCounters();
    initializeCalendar();
    initializeTestimonialSlider();
    initializeScrollAnimations();
    initializeSubjectFilter();
});

// Typewriter effect for hero section
function initializeTypewriter() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Excellence in Education',
            'Personalized Learning',
            'Academic Success',
            'Future Leaders'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: false
    });
}

// Animated counters for statistics
function initializeCounters() {
    const counters = [
        { id: 'students-count', target: 2500, suffix: '+' },
        { id: 'success-rate', target: 99, suffix: '%' },
        { id: 'experience', target: 25, suffix: '+' },
        { id: 'teachers-count', target: 5, suffix: '+' }
    ];

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        if (element) {
            animateCounter(element, counter.target, counter.suffix);
        }
    });
}

function animateCounter(element, target, suffix = '') {
    anime({
        targets: { count: 0 },
        count: target,
        duration: 2000,
        delay: 500,
        easing: 'easeOutExpo',
        update: function(anim) {
            element.textContent = Math.floor(anim.animatables[0].target.count) + suffix;
        }
    });
}

// Subject filter functionality
function initializeSubjectFilter() {
    const subjectRadios = document.querySelectorAll('input[name="subject"]');
    
    subjectRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            filterCalendarBySubject(this.value);
        });
    });
}

function filterCalendarBySubject(subject) {
    const calendarSlots = document.querySelectorAll('.calendar-day.available');
    
    calendarSlots.forEach(slot => {
        if (subject === 'all') {
            slot.style.display = 'flex';
        } else {
            // Simulate filtering based on subject availability
            const shouldShow = Math.random() > 0.4;
            slot.style.display = shouldShow ? 'flex' : 'none';
        }
    });

    // Animate the filter change
    anime({
        targets: '.calendar-day.available',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 400,
        delay: anime.stagger(50),
        easing: 'easeOutBack'
    });
}

// Testimonial slider
function initializeTestimonialSlider() {
    const splide = new Splide('#testimonial-slider', {
        type: 'loop',
        perPage: 2,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 1,
            }
        }
    });
    
    splide.mount();
}

// Scroll animations
function initializeScrollAnimations() {
    // Animate elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('card-hover')) {
                    anime({
                        targets: element,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        delay: Math.random() * 200,
                        easing: 'easeOutExpo'
                    });
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.card-hover').forEach(card => {
        observer.observe(card);
    });

    // Floating particles animation
    animateParticles();
}

function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        anime({
            targets: particle,
            translateY: [0, -100],
            translateX: [0, (Math.random() - 0.5) * 50],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            duration: 6000,
            delay: index * 1000,
            loop: true,
            easing: 'easeInOutSine'
        });
    });
}

// Utility functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-sage text-white' : 'bg-coral text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuad',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Line chart for progress over time
function createProgressLineChart(elementId, data) {
    const chartDom = document.getElementById(elementId);
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: data.months
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 100
        },
        series: data.subjects.map((subject, index) => ({
            name: subject.name,
            type: 'line',
            data: subject.scores,
            smooth: true,
            itemStyle: {
                color: subject.color
            }
        }))
    };
    
    myChart.setOption(option);
}

// Navigation functionality
function initializeNavigation() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Initialize navigation when DOM loads
document.addEventListener('DOMContentLoaded', initializeNavigation);

// Form validation and submission
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initializeLazyLoading);