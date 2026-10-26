
// Tareq Ahmad Shatnawi
// Student ID: 157235
// Contact Form Validation

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {

        // Stop the page from reloading
        event.preventDefault();

        // Get values from the contact form
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const country = document.getElementById("country").value;
        const comments = document.getElementById("comments").value.trim();

        // Check if any field is empty
        if (
            fullName === "" ||
            email === "" ||
            country === "" ||
            comments === ""
        ) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Check email address format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Display a success message
        alert("Your form has been submitted successfully!");

        // Clear the form
        contactForm.reset();

    });

});
