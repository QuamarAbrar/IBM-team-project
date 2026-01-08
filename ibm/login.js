document.addEventListener('DOMContentLoaded', () => {
    
    // UI Elements
    const emailInput = document.getElementById('email');
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const otpSection = document.getElementById('otpSection');
    const displayEmail = document.getElementById('displayEmail');
    const otpInput = document.getElementById('otpInput');
    const verifyBtn = document.getElementById('verifyBtn');
    const successMessage = document.getElementById('successMessage');
    const mainActionBtn = document.getElementById('mainActionBtn');
    const verifiedBadge = document.getElementById('verifiedBadge');
    
    // 1. Handle Send OTP
    sendOtpBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();

        if (!email || !email.includes('@')) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulate Sending Loading State
        const originalText = sendOtpBtn.innerHTML;
        sendOtpBtn.innerHTML = `<i class="ri-loader-4-line"></i> Sending...`;
        sendOtpBtn.disabled = true;

        setTimeout(() => {
            // Transition to State 2: OTP Sent
            emailInput.disabled = true;
            
            // Change button to "Resend" styling
            sendOtpBtn.innerHTML = "Resend OTP";
            sendOtpBtn.disabled = false;
            sendOtpBtn.classList.remove('btn-secondary');
            sendOtpBtn.classList.add('btn-primary'); 
            
            // Show OTP Section
            displayEmail.textContent = email;
            otpSection.classList.remove('hidden');
            otpInput.focus();
            
        }, 1000);
    });

    // 2. Handle Verify OTP
    verifyBtn.addEventListener('click', () => {
        const otp = otpInput.value.trim();

        if (otp.length !== 6) {
            alert("Please enter a valid 6-digit OTP.");
            return;
        }

        // Simulate Verification Loading State
        const originalText = verifyBtn.innerHTML;
        verifyBtn.innerHTML = `<i class="ri-loader-4-line"></i>`;
        verifyBtn.disabled = true;

        setTimeout(() => {
            // Transition to State 3: Verified
            
            // Hide OTP Section
            otpSection.classList.add('hidden');
            
            // Swap "Send/Resend" button for "Verified" Badge
            sendOtpBtn.classList.add('hidden');
            verifiedBadge.classList.remove('hidden');

            // Show Success Message
            successMessage.classList.remove('hidden');

            // Enable Main Enter Button
            mainActionBtn.disabled = false;
            mainActionBtn.textContent = "Enter Platform";
            mainActionBtn.classList.remove('btn-disabled'); // Remove grey styling
            
        }, 1000);
    });

    // 3. Handle Main Login Action
    mainActionBtn.addEventListener('click', () => {
        // Redirect to the Dashboard created in previous steps
        window.location.href = 'dashboard.html';
    });
});