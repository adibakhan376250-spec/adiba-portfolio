/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.06)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================
   MOUSE PARALLAX EFFECT
========================================= */

const heroVisual = document.querySelector(".hero-visual");


if (window.innerWidth > 768) {

    heroVisual.addEventListener("mousemove", (event) => {

        const rect = heroVisual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left - rect.width / 2)
            / 30;

        const y =
            (event.clientY - rect.top - rect.height / 2)
            / 30;


        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });


    heroVisual.addEventListener("mouseleave", () => {

        heroVisual.style.transform =
            "translate(0, 0)";

    });

}


/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */

const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});
const cvButton = document.getElementById("cvButton");
const cvMenu = document.getElementById("cvMenu");

cvButton.addEventListener("click", function (e) {
    e.stopPropagation();
    cvMenu.classList.toggle("active");
});

document.addEventListener("click", function () {
    cvMenu.classList.remove("active");
});
/* ========================================
   ABOUT SECTION SCROLL ANIMATION
======================================== */

const aboutElements = document.querySelectorAll(
    ".reveal-left, .reveal-right"
);

const aboutObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

aboutElements.forEach((element) => {
    aboutObserver.observe(element);
});
/* ========================================
   SERVICES SCROLL ANIMATION
======================================== */

const serviceElements = document.querySelectorAll(
    ".service-reveal, .reveal-services"
);

const serviceObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                serviceObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


serviceElements.forEach((element) => {

    serviceObserver.observe(element);

});

/* ========================================
   SKILLS SCROLL ANIMATION
======================================== */

const skillsElements = document.querySelectorAll(
    ".skills-reveal"
);

const skillsObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                skillsObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


skillsElements.forEach((element) => {

    skillsObserver.observe(element);

});

/* ========================================
   PORTFOLIO FILTER
======================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active from all buttons
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioItems.forEach((item) => {

            const categories = item.dataset.category;

            if (
                filter === "all" ||
                categories.includes(filter)
            ) {

                item.classList.remove("hide");

                item.style.animation = "none";

                requestAnimationFrame(() => {
                    item.style.animation =
                        "portfolioIn 0.5s ease";
                });

            } else {

                item.classList.add("hide");

            }

        });

    });

});


/* ========================================
   PORTFOLIO SCROLL ANIMATION
======================================== */

const portfolioReveal =
    document.querySelectorAll(".portfolio-reveal");

const portfolioObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                portfolioObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);


portfolioReveal.forEach((element) => {

    portfolioObserver.observe(element);

});

/* ========================================
   WHY CHOOSE ME ANIMATION
======================================== */

const whyElements = document.querySelectorAll(
    ".why-reveal"
);

const whyObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                whyObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);


whyElements.forEach((element) => {

    whyObserver.observe(element);

});
/* ========================================
   WORK PROCESS SCROLL ANIMATION
======================================== */

const processElements = document.querySelectorAll(
    ".process-reveal"
);

const processObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                processObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);


processElements.forEach((element) => {

    processObserver.observe(element);

});
/* ========================================
   TESTIMONIALS SCROLL ANIMATION
======================================== */

const testimonialElements = document.querySelectorAll(
    ".testimonial-reveal"
);

const testimonialObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                testimonialObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);


testimonialElements.forEach((element) => {

    testimonialObserver.observe(element);

});
/* ========================================
   CONTACT SCROLL ANIMATION
======================================== */

const contactElements = document.querySelectorAll(
    ".contact-reveal"
);

const contactObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                contactObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);


contactElements.forEach((element) => {

    contactObserver.observe(element);

});


/* ========================================
   CONTACT FORM - FORMSPREE
======================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function () {

        const submitButton =
            contactForm.querySelector(".contact-submit");

        const buttonText =
            submitButton.querySelector("span");

        // Button loading state
        if (buttonText) {
            buttonText.textContent = "Sending...";
        }

        submitButton.disabled = true;

    });

}