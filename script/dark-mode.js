/**
 * Dark Mode Enable Logic
 * 2026 by Dilson Torrefiel
 */

// Initialize Toggle Counter
let count = 0;

function enableDarkMode() {
  // Increment
  count++;

  // Modulo logic
  if (count % 2 !== 0) {
    // Add a new data property: data-theme="dark"
    $("html").get(0).setAttribute("data-bs-theme", "dark");
    $("#btn").get(0).setAttribute("class", "btn btn-dark dark-mode-btn");
  } else {
    $("html").get(0).removeAttribute("data-bs-theme");
    $("#btn").get(0).setAttribute("class", "btn btn-light dark-mode-btn");
  }
}
