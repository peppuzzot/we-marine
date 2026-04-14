document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar-wemarine");
  const scrollThreshold = 85;
  const mobileSidebar = document.getElementById("mobileSidebar");
  const root = document.documentElement;
  const lockedScrollClass = "offcanvas-open";

  function preventBackgroundScroll(event) {
    if (event.target.closest("#mobileSidebar")) return;
    event.preventDefault();
  }

  function lockBackgroundScroll() {
    root.classList.add(lockedScrollClass);
    document.body.classList.add(lockedScrollClass);
    document.addEventListener("touchmove", preventBackgroundScroll, { passive: false });
    document.addEventListener("wheel", preventBackgroundScroll, { passive: false });
  }

  function unlockBackgroundScroll() {
    root.classList.remove(lockedScrollClass);
    document.body.classList.remove(lockedScrollClass);
    document.removeEventListener("touchmove", preventBackgroundScroll);
    document.removeEventListener("wheel", preventBackgroundScroll);
  }

  if (mobileSidebar) {
    mobileSidebar.addEventListener("show.bs.offcanvas", lockBackgroundScroll);
    mobileSidebar.addEventListener("hidden.bs.offcanvas", unlockBackgroundScroll);
  }

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
