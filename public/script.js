document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Stop page from reloading

            // Get the ID of the form to know which URL to send to
            const formId = form.id;
            let url = "";
            let data = {};

            // Logic to pick the right data based on which HTML page we are on
            if (formId === 'contactForm') {
                url = '/submit-contact';
                data = {
                    name: document.querySelector('input[type="text"]').value,
                    email: document.querySelector('input[type="email"]').value,
                    message: document.querySelector('textarea').value
                };
            } 
            else if (formId === 'signupForm') {
                url = '/submit-signup';
                data = {
                    name: document.querySelector('input[name="username"]').value,
                    email: document.querySelector('input[name="email"]').value,
                    password: document.querySelector('input[name="password"]').value
                };
            }
            else if (formId === 'bookingForm') {
                url = '/submit-booking';
                data = {
                    name: document.querySelector('input[name="name"]').value,
                    date: document.querySelector('input[type="date"]').value,
                    time: document.querySelector('input[type="time"]').value
                };
            }

            // Send data to the server
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                
                // Show success message
                alert(result.message);
                form.reset(); 

            } catch (error) {
                console.error("Error:", error);
                alert("Something went wrong. Is the server running?");
            }
        });
    }
});