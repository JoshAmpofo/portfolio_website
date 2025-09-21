// Portfolio Website JavaScript

// Sample project data - in a real application, this would come from a CMS or API
const projects = [
    {
        id: 1,
        title: "Genomic Variant Analysis Pipeline",
        description: "Developed a comprehensive pipeline for analyzing genomic variants from whole-genome sequencing data, identifying potential disease-causing mutations.",
        category: "bioinformatics",
        tags: ["Python", "GATK", "BWA", "VCF", "Genomics"],
        icon: "fas fa-dna",
        github: "https://github.com/JoshAmpofo/variant-analysis",
        demo: "https://variant-demo.example.com",
        featured: true
    },
    {
        id: 2,
        title: "Protein Structure Prediction ML Model",
        description: "Built a deep learning model using transformer architecture to predict protein secondary structure from amino acid sequences.",
        category: "machine-learning",
        tags: ["PyTorch", "Transformers", "Protein", "Deep Learning", "Bioinformatics"],
        icon: "fas fa-atom",
        github: "https://github.com/JoshAmpofo/protein-prediction",
        demo: "https://protein-demo.example.com",
        featured: true
    },
    {
        id: 3,
        title: "Gene Expression Analysis Dashboard",
        description: "Interactive web dashboard for analyzing RNA-seq data with statistical analysis and visualization capabilities.",
        category: "data-analysis",
        tags: ["R", "Shiny", "RNA-seq", "DESeq2", "Visualization"],
        icon: "fas fa-chart-line",
        github: "https://github.com/JoshAmpofo/rnaseq-dashboard",
        demo: "https://rnaseq-demo.example.com",
        featured: true
    },
    {
        id: 4,
        title: "Drug-Target Interaction Predictor",
        description: "Machine learning model to predict drug-target interactions using molecular fingerprints and graph neural networks.",
        category: "machine-learning",
        tags: ["TensorFlow", "Graph Neural Networks", "Molecular Modeling", "Drug Discovery"],
        icon: "fas fa-pills",
        github: "https://github.com/JoshAmpofo/drug-target-prediction",
        demo: "https://drug-target-demo.example.com",
        featured: false
    },
    {
        id: 5,
        title: "Phylogenetic Tree Constructor",
        description: "Tool for constructing and visualizing phylogenetic trees from multiple sequence alignments with bootstrap support.",
        category: "bioinformatics",
        tags: ["Python", "Biopython", "Phylogenetics", "MUSCLE", "Visualization"],
        icon: "fas fa-project-diagram",
        github: "https://github.com/JoshAmpofo/phylo-tree",
        demo: "https://phylo-demo.example.com",
        featured: false
    },
    {
        id: 6,
        title: "Cancer Classification from Histology Images",
        description: "Convolutional neural network for classifying cancer types from histopathology images with 94% accuracy.",
        category: "machine-learning",
        tags: ["CNN", "Computer Vision", "Medical Imaging", "TensorFlow", "Pathology"],
        icon: "fas fa-microscope",
        github: "https://github.com/JoshAmpofo/cancer-classification",
        demo: "https://cancer-demo.example.com",
        featured: true
    }
];

// DOM elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderProjects('all');
    initializeScrollEffects();
    initializeContactForm();
    initializeSmoothScrolling();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Add navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Project rendering and filtering
function renderProjects(filter = 'all') {
    let filteredProjects = projects;
    
    if (filter !== 'all') {
        filteredProjects = projects.filter(project => project.category === filter);
    }

    projectsGrid.innerHTML = '';

    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });

    // Add fade-in animation
    const cards = projectsGrid.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);

    card.innerHTML = `
        <div class="project-image">
            <i class="${project.icon}"></i>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i>
                    <span>Code</span>
                </a>
                <a href="${project.demo}" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    <span>Demo</span>
                </a>
            </div>
        </div>
    `;

    return card;
}

// Project filtering functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value and render projects
        const filter = this.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// Scroll effects and animations
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const fadeElements = document.querySelectorAll('.about-content, .skill-category, .contact-info, .contact-form');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Stats counter animation
    const stats = document.querySelectorAll('.stat h3');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Contact form functionality
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate form
        if (!validateForm(data)) {
            return;
        }

        // Simulate form submission
        submitForm(data);
    });
}

function validateForm(data) {
    let isValid = true;
    
    // Remove existing error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.remove());
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate required fields
    Object.keys(data).forEach(key => {
        if (!data[key].trim()) {
            showError(key, `${key.charAt(0).toUpperCase() + key.slice(1)} is required`);
            isValid = false;
        }
    });
    
    return isValid;
}

function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = 'var(--error-color)';
}

function submitForm(data) {
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = 'Thank you for your message! I\'ll get back to you soon.';
        
        contactForm.appendChild(successDiv);
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
        
        // Reset field styles
        document.querySelectorAll('input, textarea').forEach(field => {
            field.style.borderColor = 'var(--border-color)';
        });
        
    }, 1500);
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function to debounce scroll events
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

// Add active navigation highlighting based on scroll position
window.addEventListener('scroll', debounce(function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 100));

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add loading animation to external links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[target="_blank"]')) {
        e.target.style.opacity = '0.7';
        setTimeout(() => {
            e.target.style.opacity = '1';
        }, 200);
    }
});

// Performance optimization: Lazy load project images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    });

    // This would be used for actual images in a real implementation
    document.querySelectorAll('.project-image').forEach(img => {
        imageObserver.observe(img);
    });
}