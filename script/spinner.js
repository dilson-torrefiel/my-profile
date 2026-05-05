/**
 * Spinner.js
 * This script handles the display of a loading spinner on the webpage.
 * The spinner is shown while the page is loading and hidden once the content is fully loaded.
 */
window.onload = function () {
  // 1. Hide the loader
  // Remove the loader element from the DOM
  $("#loader").remove();

  // 2. Show the main content
  $("#home").css("display", "block");
};
