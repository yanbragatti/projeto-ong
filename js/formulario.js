// =================================
// FORMULÁRIO - ONG ESPERANÇA
// =================================

import { salvarCadastro, recuperarCadastro } from "./storage.js";


// =================================
// CONFIGURAÇÃO DO FORMULÁRIO
// =================================

export function configurarFormulario(app) {

    const formulario = app.querySelector("form");

    if (!formulario) {
        return;
    }


    // =================================
    // RECUPERAR DADOS SALVOS
    // =================================

    const dadosCadastro = recuperarCadastro();

    if (dadosCadastro) {

        document.getElementById("nome").value =
            dadosCadastro.nome;

        document.getElementById("email").value =
            dadosCadastro.email;

        document.getElementById("telefone").value =
            dadosCadastro.telefone;

        document.getElementById("motivo").value =
            dadosCadastro.motivo;
    }


    // =================================
    // MENSAGEM DE ERRO
    // =================================

    function mostrarErro(campo, mensagem) {

        campo.style.border = "2px solid red";

        const erro = document.createElement("small");

        erro.textContent = mensagem;
        erro.style.color = "red";
        erro.style.display = "block";

        campo.insertAdjacentElement("afterend", erro);
    }


    // =================================
    // EVENTO INPUT
    // =================================

    formulario.addEventListener("input", function(event) {

        if (event.target.matches("input, textarea")) {

            event.target.style.border =
                "2px solid #66BB6A";
        }


        // =================================
        // FORMATAÇÃO DO TELEFONE
        // =================================

        if (event.target.id === "telefone") {

            let numero =
                event.target.value.replace(/\D/g, "");

            if (numero.length > 11) {

                numero =
                    numero.substring(0, 11);
            }


            if (numero.length > 10) {

                event.target.value =
                    "(" + numero.substring(0, 2) + ") " +
                    numero.substring(2, 7) + "-" +
                    numero.substring(7, 11);

            } else if (numero.length > 6) {

                event.target.value =
                    "(" + numero.substring(0, 2) + ") " +
                    numero.substring(2, 6) + "-" +
                    numero.substring(6);

            } else if (numero.length > 2) {

                event.target.value =
                    "(" + numero.substring(0, 2) + ") " +
                    numero.substring(2);

            } else {

                event.target.value = numero;
            }
        }

    });


    // =================================
    // EVENTO SUBMIT
    // =================================

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome");

        const email =
            document.getElementById("email");

        const telefone =
            document.getElementById("telefone");

        const motivo =
            document.getElementById("motivo");


        let formularioValido = true;


        // =================================
        // VALIDAÇÃO DO NOME
        // =================================

        if (nome.value.trim() === "") {

            mostrarErro(
                nome,
                "Informe seu nome."
            );

            formularioValido = false;

        } else {

            nome.style.border =
                "2px solid #66BB6A";
        }


        // =================================
        // VALIDAÇÃO DO E-MAIL
        // =================================

        if (
            email.value.trim() === "" ||
            !email.value.includes("@")
        ) {

            mostrarErro(
                email,
                "Informe um e-mail válido."
            );

            formularioValido = false;

        } else {

            email.style.border =
                "2px solid #66BB6A";
        }


        // =================================
        // VALIDAÇÃO DO TELEFONE
        // =================================

        const telefoneNumeros =
            telefone.value.replace(/\D/g, "");


        if (telefoneNumeros.length !== 11) {

            mostrarErro(
                telefone,
                "Informe um telefone válido com 11 números."
            );

            formularioValido = false;

        } else {

            telefone.style.border =
                "2px solid #66BB6A";
        }


        // =================================
        // VALIDAÇÃO DO MOTIVO
        // =================================

        if (motivo.value.trim() === "") {

            mostrarErro(
                motivo,
                "Informe por que deseja ser voluntário."
            );

            formularioValido = false;

        } else {

            motivo.style.border =
                "2px solid #66BB6A";
        }


        // =================================
        // RESULTADO
        // =================================

        if (formularioValido) {

            const dadosCadastro = {

                nome: nome.value,
                email: email.value,
                telefone: telefone.value,
                motivo: motivo.value
            };


            salvarCadastro(dadosCadastro);


            alert(
                "Cadastro preenchido com sucesso!"
            );

        } else {

            alert(
                "Por favor, preencha corretamente todos os campos."
            );
        }

    });

}