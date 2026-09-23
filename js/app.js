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