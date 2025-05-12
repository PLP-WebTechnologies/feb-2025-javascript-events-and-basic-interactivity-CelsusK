// Event Listeners Section
document.addEventListener('DOMContentLoaded', function() {
    // Click event
    const clickMeBtn = document.getElementById('click-me');
    const hoverMeBtn = document.getElementById('hover-me');
    const eventOutput = document.getElementById('event-output');
    
    clickMeBtn.addEventListener('click', function() {
        eventOutput.textContent = 'Button was clicked!';
        eventOutput.style.color = 'green';
    });
    
    // Mouseover and mouseout events
    hoverMeBtn.addEventListener('mouseover', function() {
        eventOutput.textContent = 'Mouse is over the button!';
        eventOutput.style.color = 'blue';
    });
    
    hoverMeBtn.addEventListener('mouseout', function() {
        eventOutput.textContent = 'Mouse left the button!';
        eventOutput.style.color = 'red';
    });
    
    // Form Validation
    const demoForm = document.getElementById('demo-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const formSuccess = document.getElementById('form-success');
    
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Name validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Password validation
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }
        
        // If form is valid
        if (isValid) {
            formSuccess.textContent = 'Form submitted successfully!';
            demoForm.reset();
            
            // Clear success message after 3 seconds
            setTimeout(() => {
                formSuccess.textContent = '';
            }, 3000);
        }
    });
    
    // Interactive Elements
    // Color picker
    const bgColorPicker = document.getElementById('bg-color');
    bgColorPicker.addEventListener('input', function() {
        document.body.style.backgroundColor = this.value;
    });
    
    // Counter
    const countDisplay = document.getElementById('count');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    let count = 0;
    
    incrementBtn.addEventListener('click', function() {
        count++;
        countDisplay.textContent = count;
    });
    
    decrementBtn.addEventListener('click', function() {
        if (count > 0) {
            count--;
            countDisplay.textContent = count;
        }
    });
    
    // Accordion
    const accordionBtn = document.querySelector('.accordion-btn');
    const accordionContent = document.querySelector('.accordion-content');
    
    accordionBtn.addEventListener('click', function() {
        accordionContent.classList.toggle('show');
        
        // Change button text based on state
        if (accordionContent.classList.contains('show')) {
            this.textContent = 'Hide Content';
        } else {
            this.textContent = 'Show Hidden Content';
        }
    });
});
