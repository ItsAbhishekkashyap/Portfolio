
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create an object to store the form data
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Display the form data (you can replace this with your desired saving mechanism)
        console.log(formData);

        // Clear the form after submission (optional)
        form.reset();
    });
});
