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

modalCarta.addEventListener("click", (e) => {
  if (e.target === modalCarta) {
    modalCarta.classList.remove("activo");
  }
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

letras.forEach((letra) => {
  letra.addEventListener("click", () => {
    letras.forEach((l) => l.classList.remove("activa"));

    letra.classList.add("activa");

    frase.textContent = letra.dataset.frase;
    frase.classList.add("visible");
  });
});
const paginas = [
  `Hace más de 5 años que la conozco y, sin duda, es una de las amistades más sinceras que he tenido en mi vida. Aunque aquella primera vez que nos conocimos mentimos solo por convivir, con el tiempo todo se volvió real y genuino.`,

  `Gracias por su lealtad, por escucharme en los momentos difíciles y por quedarse incluso cuando yo no sabía ni cómo explicar lo que sentía. No cualquiera tiene esa paciencia ni ese corazón.`,

  `Su apoyo en momentos como los de mi abuela es algo que nunca voy a olvidar. De verdad lo valoro más de lo que imagina. Hay cosas que no se dicen tanto, pero se quedan guardadas para siempre.`,

  `También gracias por hacer que mis cumpleaños no se sientan tan grises, por escucharme cuando le hablaba de Cindy y por aconsejarme sin juzgarme. Usted siempre estuvo.`,

  `Admiro su forma de ser, su manera de enfrentar las cosas y cómo logra hacer reír a los demás incluso cuando usted misma tiene preocupaciones. Eso habla muy bonito de usted.`,

  `Deseo que este nuevo año le traiga metas cumplidas, tranquilidad y muchas alegrías. Se merece cosas grandes. Y aquí voy a estar, como amigo, apoyándola siempre.`,

  `PD: Ahora sí… espero el pastel 😌🎂`,
];
let paginaActual = 0;

const contenidoCarta = document.getElementById("contenidoCarta");
const numeroPagina = document.getElementById("numeroPagina");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function mostrarPagina() {
  contenidoCarta.innerText = paginas[paginaActual];
  numeroPagina.innerText = `${paginaActual + 1} / ${paginas.length}`;
}

prevBtn.addEventListener("click", () => {
  if (paginaActual > 0) {
    paginaActual--;
    mostrarPagina();
  }
});

nextBtn.addEventListener("click", () => {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    mostrarPagina();
  }
});

mostrarPagina();
