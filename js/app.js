// =================================
// APP PRINCIPAL - ONG ESPERANÇA
// =================================

import { conteudos } from "./rotas.js";
import { configurarFormulario } from "./formulario.js";

const app = document.getElementById("app");


// =================================
// NAVEGAÇÃO SPA
// =================================

function navegar(rota) {

    if (conteudos[rota]) {

        app.innerHTML = conteudos[rota];

        configurarFormulario(app);
    }

}


// =================================
// INTERCEPTAÇÃO DOS LINKS
// =================================

document.querySelectorAll("[data-rota]").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const rota = this.dataset.rota;

        navegar(rota);

    });

});


// =================================
// CONTEÚDO INICIAL
// =================================

navegar("inicio");

// =================================
// MENU MOBILE
// =================================

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {

    const menuAberto = menu.classList.toggle("menu-aberto");

    menuToggle.setAttribute(
        "aria-expanded",
        menuAberto
    );

    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

});

// =================================
// MODOS DE ACESSIBILIDADE
// =================================

const botaoModoEscuro = document.getElementById("modo-escuro");
const botaoModoDaltonismo = document.getElementById("modo-daltonismo");

botaoModoEscuro.addEventListener("click", function () {

    document.body.classList.toggle("modo-escuro");

    const ativado = document.body.classList.contains("modo-escuro");

    botaoModoEscuro.setAttribute(
        "aria-pressed",
        ativado
    );

    botaoModoEscuro.textContent =
        ativado ? "☀️ Modo claro" : "🌙 Modo escuro";
});


botaoModoDaltonismo.addEventListener("click", function () {

    document.body.classList.toggle("modo-daltonismo");

    const ativado = document.body.classList.contains("modo-daltonismo");

    botaoModoDaltonismo.setAttribute(
        "aria-pressed",
        ativado
    );

    botaoModoDaltonismo.textContent =
        ativado ? "🎨 Modo normal" : "🎨 Modo daltonismo";
});