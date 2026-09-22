// Crown & Co. Hair Studio — shared behavior

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    // Close menu when a link is tapped (mobile)
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Appointment request form -> opens the visitor's email client, pre-filled.
  // This needs NO backend or database — replace SALON_EMAIL below with your real inbox.
  var SALON_EMAIL = "hello@yoursalon.com";

  var bookingForm = document.getElementById("booking-request-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = bookingForm.querySelector("#req-name").value.trim();
      var phone = bookingForm.querySelector("#req-phone").value.trim();
      var service = bookingForm.querySelector("#req-service").value;
      var date = bookingForm.querySelector("#req-date").value;
      var message = bookingForm.querySelector("#req-message").value.trim();

      var subject = "Appointment request — " + name;
      var body =
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Service: " + service + "\n" +
        "Preferred date/time: " + date + "\n\n" +
        "Notes:\n" + message;

      var mailto =
        "mailto:" + SALON_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  // Contact page general message form -> same mailto approach
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = contactForm.querySelector("#c-name").value.trim();
      var email = contactForm.querySelector("#c-email").value.trim();
      var message = contactForm.querySelector("#c-message").value.trim();

      var subject = "Website message — " + name;
      var body = "From: " + name + " (" + email + ")\n\n" + message;

      var mailto =
        "mailto:" + SALON_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  // Header shadow on scroll
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = "0 2px 12px rgba(43,25,18,0.08)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }
});
