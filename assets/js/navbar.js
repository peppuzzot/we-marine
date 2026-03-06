document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 600) {
      navbar.classList.add("navbar-scrolled");
      navbar.classList.remove("tw-bg-transparent");
    } else {
      navbar.classList.remove("navbar-scrolled");
      navbar.classList.add("tw-bg-transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});