
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", (e) => {
  e.stopPropagation();
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", (e) => {
  e.stopPropagation();
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");


llama.addEventListener("click", (e) => {
  e.stopPropagation();
  soplido.currentTime = 0;
  soplido.play();

  llama.style.animation = "apagar 0.5s forwards";

  setTimeout(() => {
    cancion.currentTime = 0;
    cancion.play();
    overlay.classList.add("hidden");
    if (window.innerWidth <= 768) {
      overlay.classList.add("hidden");
    }
  }, 1000);
});


const portaretrato = document.querySelector(".portaretrato");

portaretrato.addEventListener("click", (e) => {
  e.stopPropagation();

  soplido.currentTime = 0;
  soplido.play();
  llama.style.animation = "apagar 0.5s forwards";

  setTimeout(() => {
    window.location.href = "image.slider.html";
  }, 2000);
});


const torta = document.querySelector(".torta-cumpleaños");
const modalVideo = document.getElementById("modalVideo");
const video = document.getElementById("videoCumple");

torta.addEventListener("click", (e) => {
  e.stopPropagation();

  soplido.currentTime = 0;
  soplido.play();
  llama.style.animation = "apagar 0.5s forwards";

  setTimeout(() => {
    cancion.pause();
    cancion.currentTime=0;
    modalVideo.classList.add("activo");
    video.currentTime = 0;
    video.play();
  }, 1000);
});

modalVideo.addEventListener("click", () => {
  modalVideo.classList.remove("activo");
  video.pause();
});