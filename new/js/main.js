// Main JavaScript file for Clube de Línguas / Clinguas website
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll offset for sticky header
    const header = document.querySelector('header');
    if (header) {
        const headerHeight = header.offsetHeight;
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
});
