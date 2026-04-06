document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar-wemarine");
  const scrollThreshold = 85;

  function handleNavbarScroll() {
    if (!navbar) return;

    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  function initReveal() {
    const revealItems = document.querySelectorAll("[data-reveal]");

    if (!revealItems.length) return;

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  function initPortfolioFilters() {
    const filterGroups = document.querySelectorAll("[data-filter-group]");

    filterGroups.forEach((group) => {
      const section = group.closest("section");
      const grid = section ? section.querySelector("[data-filter-target]") : null;

      if (!grid) return;

      const cards = grid.querySelectorAll("[data-category]");
      const buttons = group.querySelectorAll("[data-filter]");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const filter = button.dataset.filter || "all";

          buttons.forEach((item) => item.classList.remove("is-active"));
          button.classList.add("is-active");

          cards.forEach((card) => {
            const categories = (card.dataset.category || "").split(" ");
            const isVisible = filter === "all" || categories.includes(filter);

            card.classList.toggle("is-hidden", !isVisible);
          });
        });
      });
    });
  }

  const yearTarget = document.getElementById("year");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  handleNavbarScroll();
  initReveal();
  initPortfolioFilters();

  window.addEventListener("scroll", handleNavbarScroll);
});
