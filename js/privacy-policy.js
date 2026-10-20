
/* =========================================
   BiSTEM24 Privacy Policy Page
   Reading progress indicator
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const page = document.querySelector(".privacy-page");

  if (!page) return;

  const progressBar = document.createElement("div");
  progressBar.className = "privacy-reading-progress";
  progressBar.setAttribute("aria-hidden", "true");

  document.body.appendChild(progressBar);

  function updateReadingProgress() {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (scrollableHeight <= 0) {
      progressBar.style.width = "0%";
      return;
    }

    const scrollPosition =
      window.scrollY || document.documentElement.scrollTop;

    const progress = Math.min(
      100,
      Math.max(0, (scrollPosition / scrollableHeight) * 100)
    );

    progressBar.style.width = progress + "%";
  }

  window.addEventListener("scroll", updateReadingProgress, {
    passive: true
  });

  window.addEventListener("resize", updateReadingProgress);

  updateReadingProgress();
});
