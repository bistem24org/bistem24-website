
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("programs-gallery-grid");

  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCounter = document.getElementById("lightbox-counter");

  const closeButton = document.getElementById("lightbox-close");
  const previousButton = document.getElementById("lightbox-prev");
  const nextButton = document.getElementById("lightbox-next");

  if (!gallery || !lightbox || !lightboxImage) return;

  const captions = [
    "BiSTEM24 Program Activity",
    "STEM Education and Learning",
    "Supporting STEM Educators",
    "STEM Workshop",
    "Digital Learning Initiative",
    "Science and Mathematics Education",
    "",
    "STEM Learning Activity",
    "Educator Development",
    "Virtual Learning Initiative",
    "",
    "STEM Education Workshop",
    "Learning and Innovation",
    "Digital Education Activity",
    "BiSTEM24 Community Initiative"
  ];

  const images = Array.from({ length: 15 }, function (_, index) {
    return {
      src: `images/programs/event${index + 1}.jpeg`,
      caption: captions[index]
    };
  });

  let currentIndex = 0;
  let previousFocus = null;

  // Build gallery
  images.forEach(function (item, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "program-gallery-item";
    button.setAttribute(
      "aria-label",
      item.caption || `View program image ${index + 1}`
    );

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.caption || `BiSTEM24 program activity ${index + 1}`;
    image.loading = "lazy";

    image.addEventListener("error", function () {
      button.hidden = true;
    });

    button.appendChild(image);

    if (item.caption) {
      const caption = document.createElement("span");
      caption.className = "gallery-caption";
      caption.textContent = item.caption;
      button.appendChild(caption);
    }

    button.addEventListener("click", function () {
      openLightbox(index, button);
    });

    gallery.appendChild(button);
  });

  function updateLightbox() {
    const item = images[currentIndex];

    lightboxImage.src = item.src;
    lightboxImage.alt = item.caption || `BiSTEM24 program image ${currentIndex + 1}`;
    lightboxCaption.textContent = item.caption;
    lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;

    lightboxCaption.hidden = !item.caption;
  }

  function openLightbox(index, trigger) {
    currentIndex = index;
    previousFocus = trigger || document.activeElement;

    updateLightbox();

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    lightboxImage.src = "";

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  }

  function showPrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  }

  closeButton.addEventListener("click", closeLightbox);
  nextButton.addEventListener("click", showNext);
  previousButton.addEventListener("click", showPrevious);

  // Close when clicking the dark background
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard controls
  document.addEventListener("keydown", function (event) {
    if (!lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowRight") {
      showNext();
    } else if (event.key === "ArrowLeft") {
      showPrevious();
    }
  });
});
