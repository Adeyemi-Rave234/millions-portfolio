window.addEventListener("load", () => {
    document.body.classList.remove("loading");
});

// Create the observer FIRST
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        } else {

            entry.target.classList.remove("show");

        }

    });

}, {
    threshold: 0.2
});

// Select ALL animated elements
const animatedElements = document.querySelectorAll(
    ".hidden, .fade-up, .fade-left, .fade-right, .zoom"
);

// Observe them
animatedElements.forEach((el) => {
    observer.observe(el);
});

window.addEventListener("load", () => {

    document
        .querySelectorAll(".fade-up, .fade-left, .fade-right, .zoom")
        .forEach((el, index) => {

            setTimeout(() => {

                el.classList.add("show");

            }, index * 150);

        });

});
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(

        "service_u775vh4",

        "template_rdfkqed",

        this

    )
    .then(() => {

       const toast = document.getElementById("toast");

toast.classList.add("show");

setTimeout(() => {

    toast.classList.remove("show");

}, 3500);

        form.reset();

    })
    

       .catch((error)=>{

    console.error(error);

    const toast = document.getElementById("toast");

    toast.querySelector("h4").textContent = "Failed to Send";

    toast.querySelector("p").textContent =
    "Something went wrong. Please try again.";

    toast.querySelector(".toast-icon").textContent = "✕";

    toast.querySelector(".toast-icon").style.background = "#ff4d4d";

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

        toast.querySelector("h4").textContent = "Message Sent!";

        toast.querySelector("p").textContent =
        "Thanks! I'll get back to you soon.";

        toast.querySelector(".toast-icon").textContent = "✓";

        toast.querySelector(".toast-icon").style.background = "#A8FF3E";

    },3500);

});

    });

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop / scrollHeight) * 100;

progressBar.style.width =
`${progress}%`;

});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});