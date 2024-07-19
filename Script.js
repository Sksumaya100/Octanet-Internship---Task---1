document.getElementById('learnMore').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('about').offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '! We will get back to you soon.');
    document.getElementById('contactForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 1.5s forwards`;
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
