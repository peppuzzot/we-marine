document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar-wemarine");
  const scrollThreshold = 85;

  function handleNavbarScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // esegue subito al load
  handleNavbarScroll();

  // ascolta scroll
  window.addEventListener("scroll", handleNavbarScroll);
});