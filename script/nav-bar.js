/**
 * Minimize Drowdown When Scroll Up
 * 2026 by Dilson Torrefiel
 */

// Initialize scroll tracker
let lastScrollTop = 0;

// Initialize the Bootstrap Collapse instance
const bsCollapse = new bootstrap.Collapse($("#navbarSupportedContent").get(0), {
  toggle: false,
});

// Window scroll event
window.addEventListener(
  "scroll",
  function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    // Detect Scroll Up
    if (currentScroll < lastScrollTop) {
      // Check if the menu is currently visible (Bootstrap adds the 'show' class)
      if ($("#navbarSupportedContent").hasClass("show")) {
        bsCollapse.hide();
      }
    }

    // Update last scroll position (avoiding negative values for mobile bounce)
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  },
  { passive: true },
);
