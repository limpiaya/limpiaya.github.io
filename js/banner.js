document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("invasiveBanner");
    const closeBtn = document.getElementById("closeBanner");
  
    // Mostrar solo si no fue cerrado en la sesión
    if (!sessionStorage.getItem("bannerClosed")) {
      setTimeout(() => {
        banner.classList.remove("opacity-0", "invisible");
        banner.classList.add("opacity-100", "visible");
      }, 700);
    }
  
    function closeBanner() {
      banner.classList.remove("opacity-100", "visible");
      banner.classList.add("opacity-0", "invisible");
      sessionStorage.setItem("bannerClosed", "true");
    }
  
    closeBtn.addEventListener("click", closeBanner);
  
    // Cerrar si se hace click fuera del contenedor
    banner.addEventListener("click", function (e) {
      if (e.target === banner) {
        closeBanner();
      }
    });
  
  });