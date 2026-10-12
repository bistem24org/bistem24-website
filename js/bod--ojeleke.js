javascript
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for the profile link.
    const scrollLink = document.querySelector(
        '.ojeleke-scroll-link[href="#biography"]'
    );

    if (scrollLink) {
        scrollLink.addEventListener("click", function (event) {
            const biography = document.getElementById("biography");

            if (biography) {
                event.preventDefault();

                biography.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }

    // Add a class if the profile image cannot be loaded.
    const profileImage = document.querySelector(".ojeleke-photo");

    if (profileImage) {
        profileImage.addEventListener("error", function () {
            this.classList.add("image-unavailable");
            console.error(
                "Temitayo Ojeleke's image could not be loaded. Check the image path."
            );
        });
    }
});