document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("tiktok-container");

  const response = await fetch("/data/videos.json");
  const data = await response.json();

  const redirectUrl = data.redirectUrl;

  data.videos.forEach(video => {
    const wrapper = document.createElement("div");
    wrapper.className = "video-slide";

    wrapper.innerHTML = `
      <iframe 
        src="https://www.tiktok.com/embed/v2/${video.id}" 
        class="tiktok-video"
        allowfullscreen>
      </iframe>
    `;

    container.appendChild(wrapper);
  });

  // Scroll estilo TikTok
  container.addEventListener("scroll", () => {
    const slides = document.querySelectorAll(".video-slide");
    slides.forEach(slide => {
      const rect = slide.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 8000); // redirige después de 8 segundos viendo el video
      }
    });
  });
});