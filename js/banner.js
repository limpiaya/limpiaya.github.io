document.addEventListener("DOMContentLoaded", function () {

  const banner = document.getElementById("invasiveBanner");
  const closeBtn = document.getElementById("closeBanner");

  // 🔥 Mostrar siempre al cargar
  setTimeout(() => {
    banner.classList.remove("opacity-0", "invisible");
    banner.classList.add("opacity-100", "visible");
  }, 700);

  function closeBanner() {
    banner.classList.remove("opacity-100", "visible");
    banner.classList.add("opacity-0", "invisible");
  }

  closeBtn.addEventListener("click", closeBanner);

  banner.addEventListener("click", function (e) {
    if (e.target === banner) {
      closeBanner();
    }
  });

});