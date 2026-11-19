
// Booking Form
const form = document.getElementById("bookingForm");
const message = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const salonNumber = "917796926882";

    const whatsappMessage = `Hello, I want to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}`;

    const whatsappURL = `https://wa.me/${salonNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    message.textContent = "Your booking details are ready on WhatsApp!";
});


// Navigation
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigation clicked:", link.textContent);
    });
});
