document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality
    const menuBtn = document.getElementById('mobile-menu-btn');
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        // In a real app, you would toggle a hidden class on a mobile navigation div
        alert('תפריט הניווט יפתח כאן (בגרסת מובייל)');
    });

    // Form submission simulation
    const searchButton = document.querySelector('button.bg-gray-900');
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('select, input');
        console.log('Searching with filters...');
        
        // Simple visual feedback
        searchButton.textContent = 'מחפש...';
        setTimeout(() => {
            searchButton.textContent = 'חיפוש רכבים';
            alert('החיפוש הושלם - נמצאו 12 רכבים תואמים');
        }, 800);
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    // Apply basic fade-in to car cards
    document.querySelectorAll('.bg-white.rounded-2xl').forEach(card => {
        card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(card);
    });
});