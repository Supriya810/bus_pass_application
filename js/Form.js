document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            mob: document.getElementById("mob").value,
            validity: document.getElementById("expdate").value,
            destination: document.getElementById("destination").value
        };

        // Send form data to the Google Apps Script web app
        fetch('https://script.google.com/macros/s/AKfycbyQQm1_MIZNR_Jdgwhb1f3SrkZ90hHk-5O7tcz23x3CDtwwCchpjfFUFwdpdrtCZehv/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors', 
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            console.log('Form submission successful:', data);
            // Handle success, e.g., show a success message
            window.location.href = "Payment.html";  // Redirect to Payment.html on success
        })
        .catch(error => {
            console.error('Form submission error:', error);
            // Handle error, e.g., show an error message
        });
    });
});
