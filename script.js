
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

    message.textContent =
    "Thank you! Your demo booking has been received.";
});


// Navigation
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigation clicked:", link.textContent);
    });
});
