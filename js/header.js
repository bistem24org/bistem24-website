
document.addEventListener("DOMContentLoaded", async function () {
  const headerContainer = document.getElementById("site-header");

  if (!headerContainer) return;

  try {
    const response = await fetch("includes/header.html");

    if (!response.ok) {
      throw new Error(`Header failed to load: ${response.status}`);
    }

    headerContainer.innerHTML = await response.text();

    const menuToggle = headerContainer.querySelector("#header-menu-toggle");
    const navigation = headerContainer.querySelector("#header-navigation");

    if (!menuToggle || !navigation) return;

    function closeMenu() {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }

    menuToggle.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeMenu();
    });

    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    navigation.querySelectorAll("a").forEach(function (link) {
      if (link.getAttribute("href") === currentPage) {
        link.setAttribute("aria-current", "page");
      }
    });

  } catch (error) {
    console.error("BiSTEM24 header loading error:", error);
  }
});
