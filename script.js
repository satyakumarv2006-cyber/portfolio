// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===============================
// EMAILJS INITIALIZATION
// ===============================

emailjs.init("eN_NdGHxIxwWcjym0");


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.style.color = "red";
        formStatus.textContent = "Please complete all fields.";
        return;
    }

    formStatus.style.color = "#00bfff";
    formStatus.textContent = "Sending message...";

    emailjs.send(
        "service_jrh27o9",
        "template_rdfhwve",
        {
            name: name,
            email: email,
            message: message
        }
    )
    .then(function () {

        formStatus.style.color = "#00ff99";
        formStatus.textContent = "✅ Message sent successfully!";

        contactForm.reset();

    })
    .catch(function (error) {

        console.error("EmailJS Error:", error);

        formStatus.style.color = "red";
        formStatus.textContent = "❌ Failed to send message. Please try again.";

    });

});