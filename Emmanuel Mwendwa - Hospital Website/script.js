// ============================================
// DATA SECTION
// ============================================

// Services Data
const services = [
    {
        title: "Cardiology",
        description: "Advanced heart care with state-of-the-art diagnostic and treatment facilities.",
        features: ["ECG & Echo", "Cardiac Catheterization", "Heart Surgery", "Preventive Care"]
    },
    {
        title: "Neurology",
        description: "Comprehensive neurological care for brain and nervous system disorders.",
        features: ["MRI & CT Scans", "Stroke Care", "Epilepsy Treatment", "Headache Clinic"]
    },
    {
        title: "Orthopedics",
        description: "Expert bone and joint care with minimally invasive procedures.",
        features: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Spine Surgery"]
    },
    {
        title: "Pediatrics",
        description: "Specialized care for infants, children, and adolescents.",
        features: ["Well-Child Visits", "Vaccinations", "Growth Monitoring", "Emergency Care"]
    },
    {
        title: "Emergency Medicine",
        description: "24/7 emergency services for urgent medical conditions.",
        features: ["Trauma Care", "Critical Care", "Ambulance Service", "Immediate Treatment"]
    },
    {
        title: "General Medicine",
        description: "Primary care for prevention, diagnosis, and treatment of common conditions.",
        features: ["Health Checkups", "Chronic Disease Management", "Preventive Care", "Health Counseling"]
    }
];

// Doctors Data
const doctors = [
    { name: "Dr. Sarah Johnson", specialty: "Cardiologist", icon: "👩‍⚕️" },
    { name: "Dr. Michael Chen", specialty: "Neurologist", icon: "👨‍⚕️" },
    { name: "Dr. Emily Rodriguez", specialty: "Pediatrician", icon: "👩‍⚕️" },
    { name: "Dr. David Williams", specialty: "Orthopedic Surgeon", icon: "👨‍⚕️" }
];

// Patient Journey Data
const journeySteps = [
    {
        number: 1,
        icon: "📞",
        title: "Initial Consultation",
        description: "Book your appointment online or call us. Our friendly staff will guide you through the process and answer any questions."
    },
    {
        number: 2,
        icon: "🏥",
        title: "Arrival & Check-in",
        description: "Arrive at our modern facility and complete a quick check-in. Our team ensures a comfortable waiting experience."
    },
    {
        number: 3,
        icon: "🩺",
        title: "Medical Examination",
        description: "Meet with our expert physicians who conduct thorough examinations using state-of-the-art medical equipment."
    },
    {
        number: 4,
        icon: "🔬",
        title: "Diagnosis & Testing",
        description: "If needed, undergo advanced diagnostic tests with results processed quickly by our in-house laboratory."
    },
    {
        number: 5,
        icon: "💊",
        title: "Treatment Plan",
        description: "Receive a personalized treatment plan tailored to your specific needs and health goals."
    },
    {
        number: 6,
        icon: "❤️",
        title: "Follow-up Care",
        description: "We stay with you throughout recovery with regular follow-ups, monitoring, and ongoing support."
    }
];

// Patient Testimonials Data
const testimonials = [
    {
        name: "Jennifer Martinez",
        treatment: "Cardiac Surgery Patient",
        avatar: "👩",
        rating: 5,
        text: "The care I received during my heart surgery was exceptional. The medical team was professional, compassionate, and kept me informed every step of the way. I'm grateful for their expertise!"
    },
    {
        name: "Robert Thompson",
        treatment: "Orthopedic Treatment",
        avatar: "👨",
        rating: 5,
        text: "After my knee replacement surgery, the physical therapy team helped me recover faster than I expected. The facilities are world-class and the staff truly cares about patient outcomes."
    },
    {
        name: "Aisha Patel",
        treatment: "Pediatric Care",
        avatar: "👩",
        rating: 5,
        text: "As a mother, finding the right pediatrician was crucial. Dr. Rodriguez and her team have been amazing with my children. They're patient, thorough, and make every visit comfortable."
    },
    {
        name: "Michael Chang",
        treatment: "Neurology Patient",
        avatar: "👨",
        rating: 5,
        text: "The neurology department diagnosed and treated my condition with incredible precision. The advanced imaging technology and expert analysis gave me peace of mind during a difficult time."
    },
    {
        name: "Sarah Williams",
        treatment: "Emergency Care",
        avatar: "👩",
        rating: 5,
        text: "When I had a medical emergency, the ER team acted swiftly and professionally. Their quick response and excellent care made all the difference. Highly recommend MediCare Plus!"
    },
    {
        name: "David Lee",
        treatment: "General Medicine",
        avatar: "👨",
        rating: 5,
        text: "My annual checkups here are always thorough and informative. The doctors take time to explain everything and focus on preventive care. It's reassuring to have such a dedicated healthcare partner."
    }
];

// ============================================
// INITIALIZATION & THEME MANAGEMENT
// ============================================

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const savedTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on load
document.documentElement.setAttribute('data-theme', savedTheme);
themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Loading Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 1500);
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

// Intersection Observer for Section Animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section-animate').forEach(section => {
    sectionObserver.observe(section);
});

// ============================================
// CONTENT LOADING FUNCTIONS
// ============================================

// Load Services with staggered animation
setTimeout(() => {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = '';
    
    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        
        const featuresHTML = service.features.map(feature => `<li>${feature}</li>`).join('');
        
        card.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul>${featuresHTML}</ul>
        `;
        
        servicesGrid.appendChild(card);
        
        // Trigger animation with delay
        setTimeout(() => {
            card.classList.add('loaded');
        }, index * 100);
    });
}, 800);

// Load Patient Journey
setTimeout(() => {
    const journeyContainer = document.getElementById('journeyContainer');
    journeyContainer.innerHTML = '<div class="journey-timeline"></div>';
    const timeline = journeyContainer.querySelector('.journey-timeline');
    
    journeySteps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'journey-step';
        
        stepElement.innerHTML = `
            <div class="journey-number">${step.number}</div>
            <div class="journey-content">
                <div class="journey-icon">${step.icon}</div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        `;
        
        timeline.appendChild(stepElement);
        
        // Trigger animation with delay
        setTimeout(() => {
            stepElement.classList.add('loaded');
        }, index * 150);
    });
}, 1000);

// Load Testimonials
setTimeout(() => {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    testimonialsGrid.innerHTML = '';
    
    testimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        const stars = '⭐'.repeat(testimonial.rating);
        
        card.innerHTML = `
            <div class="quote-icon">"</div>
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="patient-info">
                <div class="patient-avatar">${testimonial.avatar}</div>
                <div class="patient-details">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.treatment}</p>
                    <div class="rating">${stars}</div>
                </div>
            </div>
        `;
        
        testimonialsGrid.appendChild(card);
        
        // Trigger animation with delay
        setTimeout(() => {
            card.classList.add('loaded');
        }, index * 120);
    });
}, 1200);

// Load Doctors with delay
setTimeout(() => {
    const doctorsGrid = document.getElementById('doctorsGrid');
    doctorsGrid.innerHTML = '';
    
    doctors.forEach((doctor, index) => {
        const card = document.createElement('div');
        card.className = 'doctor-card';
        
        card.innerHTML = `
            <div class="doctor-image">${doctor.icon}</div>
            <div class="doctor-info">
                <h3>${doctor.name}</h3>
                <p class="specialty">${doctor.specialty}</p>
                <p>Board certified with over 15 years of experience in providing exceptional patient care.</p>
            </div>
        `;
        
        doctorsGrid.appendChild(card);
        
        // Trigger animation with delay
        setTimeout(() => {
            card.classList.add('loaded');
        }, index * 150);
    });
}, 1400);

// ============================================
// FORM HANDLING
// ============================================

// Form Submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        department: document.getElementById('department').value,
        message: document.getElementById('message').value
    };
    
    console.log('Appointment booked:', formData);
    
    // Show success modal
    document.getElementById('successModal').classList.add('active');
    
    // Reset form
    this.reset();
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Close Modal
function closeModal() {
    document.getElementById('successModal').classList.remove('active');
}

// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Emergency Alert
function showEmergencyAlert() {
    alert('Emergency: Call 911 immediately or visit our Emergency Room at 123 Medical Center Drive');
}

// Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// END OF SCRIPT
// ============================================