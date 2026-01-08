document.addEventListener('DOMContentLoaded', () => {
    
    // --- FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-question');
        const icon = item.querySelector('.toggle-icon');

        header.addEventListener('click', () => {
            // Check if currently active
            const isActive = item.classList.contains('active');

            // Close all others (Accordion style - optional, but matches UI cleanliness)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherIcon = otherItem.querySelector('.toggle-icon');
                otherIcon.classList.remove('ri-indeterminate-circle-line');
                otherIcon.classList.add('ri-add-circle-line');
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                icon.classList.remove('ri-add-circle-line');
                icon.classList.add('ri-indeterminate-circle-line');
            }
        });
    });

    // --- Feedback Type Button Logic ---
    const typeButtons = document.querySelectorAll('.type-btn');

    typeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            typeButtons.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
            
            console.log(`Feedback type selected: ${btn.dataset.type}`);
        });
    });

    // --- Submit Form Logic ---
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const selectedType = document.querySelector('.type-btn.active').textContent.trim();
        const message = document.querySelector('.feedback-input').value;

        if (!message) {
            alert("Please enter a message before submitting.");
            return;
        }

        // Simulate submission
        const submitBtn = document.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = `<i class="ri-loader-4-line"></i> Sending...`;
        submitBtn.disabled = true;

        setTimeout(() => {
            alert(`Thank you! Your ${selectedType} has been received.`);
            form.reset();
            // Reset buttons to default (General)
            typeButtons.forEach(b => b.classList.remove('active'));
            typeButtons[2].classList.add('active'); // General is index 2
            
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });

    // --- Clear Button Logic ---
    const clearBtn = document.querySelector('.btn-clear');
    clearBtn.addEventListener('click', () => {
        // Reset type to General by default
        setTimeout(() => {
            typeButtons.forEach(b => b.classList.remove('active'));
            typeButtons[2].classList.add('active');
        }, 0);
    });

});