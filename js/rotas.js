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

        <form novalidate>

            <label for="nome">Nome completo:</label>
            <input
                type="text"
                id="nome"
                name="nome"
                required>

            <label for="email">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                required>

            <label for="dataNascimento">Data de nascimento:</label>
            <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                required>

            <label for="endereco">Endereço:</label>
            <input
                type="text"
                id="endereco"
                name="endereco"
                required>

            <label for="cidade">Cidade:</label>
            <input
                type="text"
                id="cidade"
                name="cidade"
                required>

            <label for="estado">Estado:</label>
            <input
                type="text"
                id="estado"
                name="estado"
                maxlength="2"
                placeholder="SP"
                required>

            <label for="cpf">CPF:</label>
            <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
                pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                maxlength="14"
                required>

            <label for="telefone">Telefone:</label>
            <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(11) 99999-9999"
                pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                maxlength="15"
                required>

            <label for="cep">CEP:</label>
            <input
                type="text"
                id="cep"
                name="cep"
                placeholder="00000-000"
                pattern="[0-9]{5}-[0-9]{3}"
                maxlength="9"
                required>

            <label for="motivo">
                Por que você quer ser voluntário?
            </label>

            <textarea
                id="motivo"
                name="motivo"
                rows="5"
                required></textarea>

            <button type="submit">
                Enviar Cadastro
            </button>

        </form>
    </section>
`
};