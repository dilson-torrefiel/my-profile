const navbar = document.getElementById("navbarSupportedContent");
const navigation = document.getElementById("navigation");
const navbarToggler = navigation.querySelector(".navbar-toggler");
const mobileViewport = window.matchMedia("(max-width: 991.98px)");

document.body.addEventListener("activate.bs.scrollspy", () => {
  navigation.querySelectorAll(".nav-link").forEach((link) => {
    if (link.classList.contains("active")) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
});

navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const menuIsOpen =
      navbar.classList.contains("show") ||
      (navbar.classList.contains("collapsing") &&
        navbarToggler.getAttribute("aria-expanded") === "true");

    if (!mobileViewport.matches || !menuIsOpen) {
      return;
    }

    event.preventDefault();
    const collapse = bootstrap.Collapse.getOrCreateInstance(navbar);
    navbar.addEventListener(
      "hidden.bs.collapse",
      () => {
        window.location.hash = link.hash;
      },
      { once: true },
    );

    if (navbar.classList.contains("collapsing")) {
      navbar.addEventListener(
        "shown.bs.collapse",
        () => collapse.hide(),
        { once: true },
      );
      return;
    }

    collapse.hide();
  });
});