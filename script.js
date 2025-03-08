document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-progress");

    function animateBars() {
        skillBars.forEach((bar) => {
            const progress = bar.getAttribute("data-progress");
            bar.style.width = progress;
        });
    }

    function checkScroll() {
        const section = document.getElementById("service");
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            animateBars();
            window.removeEventListener("scroll", checkScroll); // Run animation only once
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check on load in case section is already visible
});
