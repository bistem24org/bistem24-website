/* =========================================
   BISTEM24 WEBSITE
   HEADER + FOOTER + NAVIGATION
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       LOAD HEADER
       ===================================== */

    const headerContainer =
        document.getElementById("site-header");

    if (headerContainer) {

        fetch("includes/header.html")
            .then(function (response) {

                if (!response.ok) {
                    throw new Error(
                        "Header could not be loaded."
                    );
                }

                return response.text();

            })
            .then(function (html) {

                headerContainer.innerHTML = html;

                setupNavigation();

            })
            .catch(function (error) {

                console.error(
                    "Header loading error:",
                    error
                );

            });

    }


    /* =====================================
       LOAD FOOTER
       ===================================== */

    const footerContainer =
        document.getElementById("site-footer");

    if (footerContainer) {

        fetch("includes/footer.html")
            .then(function (response) {

                if (!response.ok) {
                    throw new Error(
                        "Footer could not be loaded."
                    );
                }

                return response.text();

            })
            .then(function (html) {

                footerContainer.innerHTML = html;

            })
            .catch(function (error) {

                console.error(
                    "Footer loading error:",
                    error
                );

            });

    }

});


/* =========================================
   NAVIGATION SETUP
   ========================================= */

function setupNavigation() {

    const menuButton =
        document.getElementById("mobileMenuButton");

    const navigation =
        document.getElementById("mainNavigation");

    const aboutDropdown =
        document.querySelector(".nav-dropdown");

    const aboutLink =
        document.querySelector(".nav-dropdown-link");


    if (!menuButton || !navigation) {
        return;
    }


    /* =====================================
       CURRENT PAGE
       ===================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const navigationLinks =
        navigation.querySelectorAll(
            ".nav-link"
        );


    /* Remove hardcoded active */

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

    });


    /* Find correct active page */

    navigationLinks.forEach(function (link) {

        const href =
            link.getAttribute("href");

        if (!href) {
            return;
        }


        const linkPage =
            href.split("/")
                .pop()
                .toLowerCase();


        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            link.classList.add("active");

        }

    });


    /* =====================================
       THE BOARD ACTIVE STATE
       ===================================== */

    if (
        currentPage === "the-board.html" &&
        aboutLink
    ) {

        aboutLink.classList.add("active");

    }


    /* =====================================
       MOBILE MENU
       ===================================== */

    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                navigation.classList.toggle(
                    "mobile-open"
                );


            menuButton.classList.toggle(
                "menu-open",
                isOpen
            );


            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        }
    );


    /* =====================================
       ABOUT DROPDOWN
       ===================================== */

    if (aboutDropdown && aboutLink) {

        aboutLink.addEventListener(
            "click",
            function (event) {

                /*
                 * On mobile:
                 * clicking ABOUT opens submenu.
                 */

                if (window.innerWidth <= 767) {

                    event.preventDefault();

                    aboutDropdown.classList.toggle(
                        "mobile-dropdown-open"
                    );

                }

            }
        );

    }


    /* =====================================
       CLOSE MENU AFTER CLICK
       ===================================== */

    const linksToClose =
        navigation.querySelectorAll(
            ".dropdown-menu a, " +
            ".nav-link:not(.nav-dropdown-link)"
        );


    linksToClose.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navigation.classList.remove(
                    "mobile-open"
                );

                menuButton.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


    /* =====================================
       RESIZE
       ===================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 767) {

                navigation.classList.remove(
                    "mobile-open"
                );

                menuButton.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                if (aboutDropdown) {

                    aboutDropdown.classList.remove(
                        "mobile-dropdown-open"
                    );

                }

            }

        }
    );

}