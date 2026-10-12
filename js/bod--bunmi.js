document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling to the biography section
    const scrollLink = document.querySelector(
        '.bunmi-scroll-link[href="#bunmi-biography"]'
    );

    const biographySection = document.getElementById("bunmi-biography");

    if (scrollLink && biographySection) {
        scrollLink.addEventListener("click", function (event) {
            event.preventDefault();

            biographySection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    // Check whether the profile image loads successfully
    const profileImage = document.querySelector(".bunmi-profile-image");

    if (profileImage) {
        profileImage.addEventListener("error", function () {
            console.error(
                "Bunmi's profile image could not be loaded. Check: images/bod--bunmi/bunmi.png"
            );
        });
    }
});
