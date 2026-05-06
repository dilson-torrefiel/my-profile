/**
 * This function opens the PDF file in a new browser tab when called.
 * It uses the window.open() method to open the specified PDF URL.
 * Make sure to replace "./files/my-cv.pdf" with the actual path to your PDF file.
 */
function openPDF() {
  const pdfUrl = "./files/dilson-torrefiel.pdf";
  window.open(pdfUrl, "_blank");
}
