(function () {
  var filterBtns = document.querySelectorAll(".category-filter-btn");
  var sections = document.querySelectorAll(".category-projects");
  var tiles = document.querySelectorAll(".category-tile");

  if (!filterBtns.length || !sections.length) {
    return;
  }

  function setFilter(category) {
    filterBtns.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === category);
    });

    sections.forEach(function (section) {
      var match = category === "all" || section.getAttribute("data-category") === category;
      section.classList.toggle("is-hidden", !match);
    });
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setFilter(btn.getAttribute("data-filter"));
    });
  });

  tiles.forEach(function (tile) {
    tile.addEventListener("click", function (e) {
      var category = tile.getAttribute("data-category");
      if (category) {
        e.preventDefault();
        setFilter(category);
        var target = document.getElementById(tile.getAttribute("href").slice(1));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  var hash = window.location.hash.replace("#cat-", "");
  var hashMap = {
    animation: "animation",
    mining: "mining",
    bridges: "bridges",
    commercial: "commercial",
    health: "health"
  };

  if (hashMap[hash]) {
    setFilter(hashMap[hash]);
  }
})();
