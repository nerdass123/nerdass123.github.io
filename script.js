document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll for CTA button
    const ctaBtn = document.getElementById('cta-btn');
    ctaBtn.addEventListener('click', () => {
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
    });

    // Form submission handling (Preventing actual refresh)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks for reaching out! Since this is a static site, you would typically integrate this with a service like Formspree or Netlify Forms.');
        form.reset();
    });

    // Optional: Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#0f172a';
        } else {
            nav.style.backgroundColor = '#1e293b';
        }
    });
});
