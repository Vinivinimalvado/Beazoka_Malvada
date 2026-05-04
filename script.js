/* FRASES */
const frases = [
  "Você é o motivo do meu sorriso bobo.",
  "Você é o six do meu seven.",
  "Você é a AU da minha aura.",
  "Com você, tudo faz mais sentido.",
  "Mesmo nos dias difíceis, você é calma.",
  "Não é sobre perfeição, é sobre ser você.",
  "Se eu tivesse que escolher de novo, ainda seria você."
];

let indice = 0;

function trocarFrase() {
  const msg = document.getElementById("mensagem");
  msg.style.opacity = 0;

  setTimeout(() => {
    msg.innerText = frases[indice];
    msg.style.opacity = 1;
  }, 200);

  indice = (indice + 1) % frases.length;
}

/* CORAÇÕES */
function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");

  const tipos = ["❤️", "💖", "💘", "💗", "💓"];
  coracao.innerText = tipos[Math.floor(Math.random() * tipos.length)];

  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.querySelector(".coracoes").appendChild(coracao);

  setTimeout(() => coracao.remove(), 7000);
}

setInterval(criarCoracao, 300);

/* SLIDER AUTOMÁTICO */
const slides = document.querySelectorAll(".slide");
let slideAtual = 0;

setInterval(() => {
  slides[slideAtual].classList.remove("active");
  slideAtual = (slideAtual + 1) % slides.length;
  slides[slideAtual].classList.add("active");
}, 3500);