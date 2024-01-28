const botao = document.querySelector(".botao-plataforma");
const elementoPlataformas = document.querySelector(".botao-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

