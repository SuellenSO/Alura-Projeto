document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');
    const botaoVerificar = document.getElementById('verificar-respostas');
    let perguntaAtual = 0; // Índice da pergunta atual

    // Função para gerar uma pergunta
    function gerarPergunta(index) {
        quizContainer.innerHTML = ''; // Limpa o contêiner do quiz

        const item = perguntas[index]; // Obtém a pergunta atual
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('pergunta-container');

        const questionText = document.createElement('p');
        questionText.innerText = item.pergunta;
        questionText.classList.add('pergunta'); // Adiciona a classe de estilo
        questionDiv.appendChild(questionText);

        const opcoesDiv = document.createElement('div');
        opcoesDiv.classList.add('opcoes');

        item.opcoes.forEach((opcao, i) => {
            const opcaoDiv = document.createElement('div');
            opcaoDiv.classList.add('opcao');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'opcao'; // Para agrupar opções da mesma pergunta
            input.id = 'opcao' + i;
            input.value = opcao.correta; // Define o valor como true/false

            const label = document.createElement('label');
            label.setAttribute('for', 'opcao' + i);
            label.innerText = opcao.texto;

            opcaoDiv.appendChild(input);
            opcaoDiv.appendChild(label);
            opcoesDiv.appendChild(opcaoDiv);
        });

        questionDiv.appendChild(opcoesDiv);
        quizContainer.appendChild(questionDiv);

        // Exibe o botão de verificar respostas
        botaoVerificar.style.display = 'block';
    }

    // Função para verificar a resposta da pergunta atual
    function verificarResposta() {
        const opcoes = document.getElementsByName('opcao');
        let respostaCorreta = null;
        let respostaSelecionada = null;

        opcoes.forEach(opcao => {
            if (opcao.checked) {
                respostaSelecionada = opcao;
            }
            if (opcao.value === 'true') {
                respostaCorreta = opcao;
            }
        });

        // Verifica se a resposta está correta
        if (respostaSelecionada && respostaSelecionada.value === 'true') {
            const resultadoDiv = document.createElement('div');
            resultadoDiv.classList.add('resultado');
            resultadoDiv.innerText = "Resposta correta!";
            resultadoDiv.style.color = "green";
            quizContainer.appendChild(resultadoDiv);

            // Aguarda 2 segundos antes de passar para a próxima pergunta
            setTimeout(() => {
                perguntaAtual++;
                if (perguntaAtual < perguntas.length) {
                    gerarPergunta(perguntaAtual); // Gera a próxima pergunta
                } else {
                    quizContainer.innerHTML = '<p>Parabéns, você completou o quiz!</p>';
                    botaoVerificar.style.display = 'none'; // Esconde o botão quando o quiz acabar
                }
            }, 2000); // Aguarda 2 segundos (2000 ms)
        } else {
            const resultadoDiv = document.createElement('div');
            resultadoDiv.classList.add('resultado');
            resultadoDiv.innerText = "Errado! Tente novamente.";
            resultadoDiv.style.color = "red";
            quizContainer.appendChild(resultadoDiv);
        }
    }

    // Inicia a primeira pergunta
    gerarPergunta(perguntaAtual);

    // Adiciona o evento de clique no botão para verificar a resposta
    botaoVerificar.addEventListener('click', verificarResposta);
});
