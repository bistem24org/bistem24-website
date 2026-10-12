document.addEventListener("DOMContentLoaded", function () {
  /* =========================================
     HERO SLIDER
     3 original slides + 1 cloned first slide
  ========================================= */
  const heroTrack = document.getElementById("heroTrack");

  if (heroTrack) {
    const originalSlideCount = 3;
    let currentSlide = 0;
    let isAnimating = false;

    function moveHeroSlide(index, animate = true) {
      heroTrack.style.transition = animate ? "transform 0.9s ease-in-out" : "none";
      heroTrack.style.transform = `translateX(-${index * 25}%)`;
    }

    heroTrack.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      isAnimating = false;

      if (currentSlide === originalSlideCount) {
        currentSlide = 0;
        moveHeroSlide(0, false);
      }
    });

    window.setInterval(function () {
      if (isAnimating) return;
      isAnimating = true;
      currentSlide += 1;
      moveHeroSlide(currentSlide, true);
    }, 5000);
  } else {
    console.warn("Home page: #heroTrack was not found.");
  }

  /* =========================================
     NEWS HIGHLIGHTS SLIDER
     5 original slides + 1 cloned first slide
  ========================================= */
  const newsTrack = document.getElementById("newsTrack");

  if (newsTrack) {
    const originalNewsSlideCount = 5;
    let currentNewsSlide = 0;
    let isNewsAnimating = false;

    function moveNewsSlide(index, animate = true) {
      newsTrack.style.transition = animate ? "transform 0.8s ease-in-out" : "none";
      newsTrack.style.transform = `translateX(-${index * (100 / 6)}%)`;
    }

    newsTrack.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      isNewsAnimating = false;

      if (currentNewsSlide === originalNewsSlideCount) {
        currentNewsSlide = 0;
        moveNewsSlide(0, false);
      }
    });

    window.setInterval(function () {
      if (isNewsAnimating) return;
      isNewsAnimating = true;
      currentNewsSlide += 1;
      moveNewsSlide(currentNewsSlide, true);
    }, 5000);
  } else {
    console.warn("Home page: #newsTrack was not found.");
  }
});
