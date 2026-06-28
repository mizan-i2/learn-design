(function () {
  var slider = document.querySelector(".hero-slider");
  if (!slider) {
    return;
  }

  var slides = slider.querySelectorAll(".hero-slide");
  var dots = slider.querySelectorAll(".hero-dot");
  var prevBtn = slider.querySelector(".hero-arrow-prev");
  var nextBtn = slider.querySelector(".hero-arrow-next");
  var current = 0;
  var timer = null;
  var delay = 5500;

  function goTo(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === current);
    });

    dots.forEach(function (dot, i) {
      var active = i === current;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = window.setInterval(next, delay);
  }

  function stopAutoplay() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      prev();
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      next();
      startAutoplay();
    });
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      goTo(parseInt(dot.getAttribute("data-slide"), 10));
      startAutoplay();
    });
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  goTo(0);
  startAutoplay();
})();
