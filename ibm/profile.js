document.addEventListener('DOMContentLoaded', () => {
    
    // --- Edit Profile Logic ---
    const editBtn = document.getElementById('editProfileBtn');
    const editableInputs = document.querySelectorAll('.input-field.editable');
    let isEditing = false;

    editBtn.addEventListener('click', () => {
        isEditing = !isEditing;

        if (isEditing) {
            // Enable editing
            editableInputs.forEach(input => {
                input.disabled = false;
            });
            // Focus on the first editable field
            editableInputs[0].focus();
            
            editBtn.textContent = 'Save Changes';
            editBtn.style.backgroundColor = '#16a34a'; // Green for save
        } else {
            // Save & Disable
            editableInputs.forEach(input => {
                input.disabled = true;
            });
            
            editBtn.textContent = 'Edit Profile';
            editBtn.style.backgroundColor = ''; // Revert to original
            
            // Mock Save Alert
            alert('Profile updated successfully!');
        }
    });

    // --- Password Validation ---
    const updatePasswordBtn = document.querySelector('.security-form-section .btn-primary');
    updatePasswordBtn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.security-form-section input');
        const currentPass = inputs[0].value;
        const newPass = inputs[1].value;
        const confirmPass = inputs[2].value;

        if(!currentPass || !newPass || !confirmPass) {
            alert("Please fill in all password fields.");
            return;
        }

        if(newPass !== confirmPass) {
            alert("New password and confirmation do not match.");
            return;
        }

        alert("Password updated successfully.");
        // Clear fields
        inputs.forEach(input => input.value = '');
    });

    // --- Toggle Switches Logic (Console Log simulation) ---
    const toggles = document.querySelectorAll('.switch input');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const settingName = e.target.closest('.toggle-item')
                .querySelector('h4').textContent;
            const status = e.target.checked ? 'Enabled' : 'Disabled';
            console.log(`${settingName}: ${status}`);
        });
    });
});