
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // Smooth scrolling for links that point to sections on this page.
    document.querySelectorAll('.featured-program a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                        ? "auto"
                        : "smooth",
                    block: "start"
                });
            }
        });
    });

    // Report missing images in the browser console for easier debugging.
    document.querySelectorAll(".featured-program img").forEach(function (img) {
        img.addEventListener("error", function () {
            console.warn("Feature Program image could not be loaded:", img.getAttribute("src"));
        });
    });
});
