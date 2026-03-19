document.addEventListener("DOMContentLoaded", () => {
    
    // Navbar scroll effect
    const navbar = document.getElementById("main-nav");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Make the dropdown accessible natively without overriding CSS hover behavior
    const dropdownToggle = document.getElementById("menu-dropdown");
    const dropdownMenu = document.querySelector(".dropdown-content");

    dropdownToggle.addEventListener("click", (e) => {
        // Prevent jumping to #menu if strictly using it to open the wrapper natively
        const isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
        dropdownToggle.setAttribute("aria-expanded", !isExpanded);
    });

    // Smooth reveal animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll(".menu-item-card, .story-text");
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(card);
    });
});
