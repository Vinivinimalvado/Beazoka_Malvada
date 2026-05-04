const mensagens = [
    "Eu te amo mais do que você imagina ❤️",
    "Você é a melhor parte dos meus dias 😍",
    "Desde que você chegou, tudo ficou melhor 💕",
    "Meu lugar favorito é ao seu lado 🥹",
    "Prometo cuidar de você sempre 💖"
];

function mostrarMensagem() {
    const index = Math.floor(Math.random() * mensagens.length);
    document.getElementById("mensagem").innerText = mensagens[index];
}