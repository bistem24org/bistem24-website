
document.addEventListener("DOMContentLoaded", function () {
  // Check local News Room images
  const newsImages = document.querySelectorAll(
    ".news-page img"
  );

  newsImages.forEach(function (image) {
    image.addEventListener("error", function () {
      console.warn(
        "News image could not be loaded:",
        image.getAttribute("src")
      );

      image.classList.add("news-image-error");
    });
  });

  // Keep external links safe
  document.querySelectorAll(
    '.news-page a[target="_blank"]'
  ).forEach(function (link) {
    link.setAttribute("rel", "noopener noreferrer");
  });
});
