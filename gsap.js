const cards = document.querySelectorAll(".card");


cards.forEach((card, index) => {
  const center = Math.floor(cards.length / 2);
  const offset = index - center;

  gsap.set(card, {
    rotationY: offset * 15,
    x: offset * 120,
    z: -Math.abs(offset) * 100,
    scale: 0.9,
    transformOrigin: "center center"
  });
});


cards.forEach((card, index) => {
  const center = Math.floor(cards.length / 2);
  const offset = index - center;

  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      duration: 0.5,
      scale: 1.2,
      z: 100,
      rotationY: offset * 8,
      ease: "power2.out",
      boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      duration: 0.5,
      scale: 0.9,
      z: -Math.abs(offset) * 100,
      rotationY: offset * 15,
      ease: "power2.out",
      boxShadow: "none"
    });
  });
});
const modal = document.getElementById("modalRecuerdo");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");


const recuerdos = [
  {
    titulo: "El día que nos conocimos",
    texto: "Aquí comenzó todo. Ese día no sabía que iba a nacer una de las amistades más importantes que he tenido. Ese día aún recuerdo la caminata y las risas que tuvimos."
  },
  {
    titulo: "El día del bajon de su novio",
    texto: "Recuerdo que ese día usted andaba preocupada porque su novio andaba enojado con usted, y a pesar de eso, usted me escuchó al momento de hablar la otra. Puede que no se sintiera en su mejor momento pero siempre intenta dar lo mejor de si"
  },
  {
    titulo: "Día de la piscina",
    texto: "Ustedes andaban enojadas JAJAJ por no haberse metido a la piscina pero aún así, buscó la manera de tomar ese mal momento y sacar un momento positivo de eso. Aunque no nos metieramos sin duda, esos momentos fueron de muchas risas junto a luz y su otra amiga."
  },
  {
    titulo: "Otro día más de la fecha de mi cumple",
    texto: "Bendito entre las mujeres diría usted JAJAJAJ, gracias por mi pastel de ese día, gracias por todo"
  },
  {
    titulo: "Mi cumpleaños",
    texto: "Ese día recuerdo que no quería celebrar mi cumpleaños, pero creame que me hizo pasar uno de los mejores cumpleaños y no por lo material, sino, por la compañía de usted y luz. Me la pasé muy bien ese día y me hizo sentir especial."
  }
];

cards.forEach((card, index) => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();

    modalTitulo.textContent = recuerdos[index].titulo;
    modalTexto.textContent = recuerdos[index].texto;

    modal.classList.add("activo");
  });
});


modal.addEventListener("click", () => {
  modal.classList.remove("activo");
});