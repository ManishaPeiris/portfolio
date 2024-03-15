document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");

    // Function to toggle the visibility of the navigation menu
    function toggleMenu() {
        navMenu.classList.toggle("active");
    }

    // Event listener to show/hide the navigation menu when nav-toggle is clicked
    navToggle.addEventListener("click", function () {
        toggleMenu();
    });

    // Event listener to hide the navigation menu when clicking outside of it
    document.addEventListener("click", function (event) {
        const target = event.target;
        if (!navMenu.contains(target) && !navToggle.contains(target)) {
            navMenu.classList.remove("active");
        }
    });
});