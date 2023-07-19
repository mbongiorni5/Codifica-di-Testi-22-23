document.addEventListener("DOMContentLoaded", function () { //Codice per effetto scroll dal menu di navigazione
  const menuLinks = document.querySelectorAll(".menu a");

  for (const link of menuLinks) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetSection = document.querySelector(link.getAttribute("href"));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
