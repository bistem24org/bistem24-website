
document.addEventListener("DOMContentLoaded", async function () {
  const footerContainer = document.getElementById("site-footer");

  if (!footerContainer) return;

  try {
    const response = await fetch("includes/footer.html");

    if (!response.ok) {
      throw new Error(`Footer failed to load: ${response.status}`);
    }

    const footerHTML = await response.text();
    footerContainer.innerHTML = footerHTML;

    const yearElement = footerContainer.querySelector("#footer-year");

    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  } catch (error) {
    console.error("BiSTEM24 footer loading error:", error);
  }
});
