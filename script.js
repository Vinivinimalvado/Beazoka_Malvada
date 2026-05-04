// DATA DE INÍCIO DO RELACIONAMENTO
const inicio = new Date("2026-03-27"); // ALTERE se quiser
const hoje = new Date();

const diff = hoje - inicio;
const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("dias").innerText = dias;

// FRASES
const frases = [
  "Respira. Você não tá sozinha. Eu tô aqui.",
  "Se o mundo pesar, deixa eu segurar com você.",
  "Você não precisa ser forte o tempo todo.",
  "Com você, tudo fica mais leve."
];

let i = 0;

function trocarFrase() {
  const el = document.querySelector(".frase");
  el.style.opacity = 0;

  setTimeout(() => {
    el.innerText = frases[i];
    el.style.opacity = 1;
    i = (i + 1) % frases.length;
  }, 200);
}
