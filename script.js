// DATA DO INÍCIO DO NAMORO
const inicio = new Date("2026-03-27");

// FRASES
const mensagens = [
  "Você é o six do meu seven.",
  "Você é a AU da minha aura.",
  "Você não é parte da minha vida. Você é a minha vida.",
  "O mundo fica mais leve quando você tá nele.",
  "Se eu tivesse que escolher de novo, seria você. Sempre."
];

let cliques = 0;

// CONTADOR
function atualizarTempo() {
  const agora = new Date();
  const diff = agora - inicio;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("tempo").innerText = `${dias} dias`;
}
setInterval(atualizarTempo, 1000);
atualizarTempo();

// AÇÃO PRINCIPAL
function acaoPrincipal() {
  cliques++;
  tocarMusica();
  mudarMensagem();
  escreverCarta();

  if (cliques === 5) {
    document.getElementById("mensagem").innerText =
      "Se você chegou até aqui… é porque é você ❤️";
  }
}

// MENSAGEM
function mudarMensagem() {
  const i = Math.floor(Math.random() * mensagens.length);
  document.getElementById("mensagem").innerText = mensagens[i];
}

// CARTA ANIMADA
function escreverCarta() {
  const texto = "Eu não sei amar pouco. E ainda bem, porque você merece tudo.";
  let i = 0;
  const el = document.getElementById("carta");
  el.innerText = "";

  const intervalo = setInterval(() => {
    el.innerText += texto[i];
    i++;
    if (i >= texto.length) clearInterval(intervalo);
  }, 40);
}

// DIA RUIM
function diaRuim() {
  document.getElementById("mensagem").innerText =
    "Respira. Você não tá sozinha. Eu tô aqui.";
}

// SALVAR FAVORITA
function salvarFavorita() {
  localStorage.setItem("frase", document.getElementById("mensagem").innerText);
  alert("Frase salva 💖");
}

// MÚSICA
function tocarMusica() {
  const m = document.getElementById("musica");
  m.volume = 0.25;
  m.play();
}

// CORAÇÕES
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}, 800);