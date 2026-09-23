// =================================
// ROTAS - ONG ESPERANÇA
// =================================

export const conteudos = {

    inicio: `
        <section>
            <h2>Quem Somos</h2>

            <img src="../imagens/ong.jpg"
                 alt="Voluntários de uma ONG colaborando para ajudar a comunidade">

            <p>
                A ONG Esperança é uma organização dedicada a promover ações
                sociais e ajudar pessoas que precisam de apoio.
            </p>

            <p>
                Nosso objetivo é incentivar a solidariedade, o voluntariado
                e a participação da comunidade em projetos sociais.
            </p>
        </section>

        <section>
            <h2>Nosso Objetivo</h2>

            <p>
                Desenvolver projetos que contribuam para uma sociedade mais
                justa, solidária e acolhedora.
            </p>
        </section>

        <section>
            <h2>Entre em Contato</h2>

            <p><strong>E-mail:</strong> contato@ongesperanca.com</p>
            <p><strong>Telefone:</strong> (11) 99999-9999</p>
        </section>
    `,

    projetos: `
        <section>
            <h2>Doações</h2>

            <p>
                Recebemos doações de alimentos, roupas e outros materiais
                para ajudar famílias e pessoas em situação de necessidade.
            </p>
        </section>

        <section>
            <h2>Voluntariado</h2>

            <p>
                Pessoas interessadas podem participar como voluntárias
                e colaborar com nossas ações e projetos sociais.
            </p>
        </section>

        <section>
            <h2>Campanhas</h2>

            <p>
                Realizamos campanhas para arrecadar recursos e materiais
                destinados às pessoas que precisam de apoio.
            </p>
        </section>
    `,

    cadastro: `
        <section>
            <h2>Cadastro de Voluntários</h2>

            <p>
                Faça parte da ONG Esperança preenchendo seu cadastro.
            </p>

            <form>

                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome">

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email">

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone">

                <label for="motivo">
                    Por que você quer ser voluntário?
                </label>

                <textarea
                    id="motivo"
                    name="motivo"
                    rows="5"></textarea>

                <button type="submit">
                    Enviar Cadastro
                </button>

            </form>
        </section>
    `
};