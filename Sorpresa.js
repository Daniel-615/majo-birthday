
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

const portaretrato = document.querySelector(".portaretrato");

const torta = document.querySelector(".torta-cumpleaños");
const modalVideo = document.getElementById("modalVideo");
const video = document.getElementById("videoCumple");


window.addEventListener("load", () => {
  if (window.innerWidth <= 768) {
    overlay.classList.add("hidden");
  }
});



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


llama.addEventListener("click", (e) => {
  e.stopPropagation();

  soplido.currentTime = 0;
  soplido.play();

  llama.style.animation = "apagar 0.5s forwards";

  setTimeout(() => {
    cancion.currentTime = 0;
    cancion.play();
    overlay.classList.add("hidden");
  }, 1000);
});


portaretrato.addEventListener("click", (e) => {
  e.stopPropagation();

  soplido.currentTime = 0;
  soplido.play();
  llama.style.animation = "apagar 0.5s forwards";

  setTimeout(() => {
    window.location.href = "image.slider.html";
  }, 1500);
});


torta.addEventListener("click", (e) => {
  e.stopPropagation();

  soplido.currentTime = 0;
  soplido.play();
  llama.style.animation = "apagar 0.5s forwards";

  setTimeout(() => {
    cancion.pause();
    cancion.currentTime = 0;

    modalVideo.classList.add("activo");
    video.currentTime = 0;
    video.play();
  }, 1000);
});


modalVideo.addEventListener("click", () => {
  modalVideo.classList.remove("activo");
  video.pause();
});
const letras = document.querySelectorAll(".letra");
const frase = document.getElementById("fraseMostrada");

letras.forEach(letra => {
  letra.addEventListener("click", () => {

    
    letras.forEach(l => l.classList.remove("activa"));


    letra.classList.add("activa");

    frase.textContent = letra.dataset.frase;
    frase.classList.add("visible");
  });
});