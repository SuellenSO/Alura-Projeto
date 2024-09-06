const perguntas = [
    {
        pergunta: "Qual tag HTML é usada para criar um link?",
        opcoes: [
            { texto: "< link >", correta: false },
            { texto: "< a >", correta: true },
            { texto: "< href >", correta: false },
            { texto: "< url >", correta: false }
        ]
    },
    {
        pergunta: "Qual linguagem é usada para estilizar páginas web?",
        opcoes: [
            { texto: "HTML", correta: false },
            { texto: "CSS", correta: true },
            { texto: "JavaScript", correta: false },
            { texto: "PHP", correta: false }
        ]
    },
    {
        pergunta: "O que significa CSS?",
        opcoes: [
            { texto: "Cascading Style Sheets", correta: true },
            { texto: "Central Style Sheets", correta: false },
            { texto: "Computer Style Sheets", correta: false },
            { texto: "Creative Style Sheets", correta: false }
        ]
    },
    {
        pergunta: "Qual atributo é usado dentro da tag < img > para especificar a fonte da imagem?",
        opcoes: [
            { texto: "<source>", correta: false },
            { texto: "<file>", correta: false },
            { texto: "src", correta: true },
            { texto: "image", correta: false }
        ]
    },
    {
        pergunta: "Qual é a diferença entre um elemento de bloco e um elemento inline?",
        opcoes: [
            { texto: " Um elemento de bloco ocupa toda a largura disponível e inicia em uma nova linha, enquanto um elemento inline tem apenas a largura necessária e pode aparecer dentro de uma linha com outros elementos inline.", correta: true },
            { texto: "Um elemento de bloco é sempre maior que um elemento inline.", correta: false },
            { texto: "Não há diferença entre os dois", correta: false },
            { texto: "Um elemento de bloco só pode conter outros elementos de bloco.", correta: false }
        ]
    },
    {
        pergunta: "Qual propriedade CSS é usada para definir a cor de um elemento?",
        opcoes: [
            { texto: "text-color", correta: false },
            { texto: "color", correta: true },
            { texto: "font-color", correta: false },
            { texto: "bgcolor", correta: false }
        ]
    },
    {
        pergunta: "Qual propriedade CSS é usada para definir o espaçamento entre elementos?",
        opcoes: [
            { texto: "padding", correta: false },
            { texto: "margin", correta: true },
            { texto: "border", correta: false },
            { texto: "space", correta: false }
        ]
    },
    {
        pergunta: "O que é o seletor CSS?",
        opcoes: [
            { texto: "É uma ferramenta para selecionar elementos em um documento HTML.", correta: true },
            { texto: "É uma propriedade que define o estilo de um elemento.", correta: false },
            { texto: "É uma unidade de medida usada em CSS.", correta: false },
            { texto: "É um tipo de arquivo CSS.", correta: false }
        ]
    },
    {
        pergunta: "Qual é a função de console.log() em JavaScript?",
        opcoes: [
            { texto: "Exibir uma mensagem na tela do usuário.", correta: false },
            { texto: "Exibir uma mensagem no console do navegador para fins de depuração.", correta: true },
            { texto: "Criar uma função.", correta: false },
            { texto: "Declarar uma variável.", correta: false }
        ]
    },
    {
        pergunta: "Qual é a diferença entre == e === em JavaScript?",
        opcoes: [
            { texto: "Não há diferença.", correta: false },
            { texto: "== compara apenas o tipo de dado, enquanto === compara o valor.", correta: false },
            { texto: "== compara o valor de duas variáveis, enquanto === compara tanto o valor quanto o tipo de dado.", correta: true },
            { texto: "== é usado para strings, enquanto === é usado para números.", correta: false }
        ]
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        opcoes: [
            { texto: "Um bloco de código que realiza uma tarefa específica e pode ser reutilizado.", correta: true },
            { texto: "Uma variável que armazena um valor.", correta: false },
            { texto: "Um evento que ocorre quando um usuário interage com uma página.", correta: false },
            { texto: "Um objeto que representa um elemento HTML.", correta: false }
        ]
    },
    {
        pergunta: "Explique o conceito de DOM (Document Object Model) em JavaScript.",
        opcoes: [
            { texto: "É uma linguagem de programação utilizada para criar páginas web.", correta: false },
            { texto: "É um tipo de arquivo utilizado para armazenar dados.", correta: false },
            { texto: "É um protocolo de comunicação entre navegador e servidor.", correta: false },
            { texto: "É uma representação da página HTML em forma de objeto, permitindo que scripts JavaScript manipulem e alterem o conteúdo, a estrutura e o estilo da página.", correta: true }
        ]
    },
    {
        pergunta: "Qual é a diferença entre let, const e var em JavaScript?",
        opcoes: [
            { texto: "let e const são palavras-chave introduzidas no ES6 para declarar variáveis com escopo de bloco, enquanto var tem escopo de função. const declara variáveis imutáveis", correta: true },
            { texto: "Não há diferença entre elas.", correta: false },
            { texto: "let é usado para declarar variáveis, const para constantes e var para funções.", correta: false },
            { texto: "let, const e var são sinônimos.", correta: false }
        ]
    },
    {
        pergunta: "O que é uma promise em JavaScript?",
        opcoes: [
            { texto: "É um tipo de dado primitivo em JavaScript", correta: false },
            { texto: "É uma função que é executada quando um evento ocorre.", correta: false },
            { texto: "É um objeto que representa o eventual resultado (resolvido ou rejeitado) de uma operação assíncrona.", correta: true },
            { texto: "É um erro em JavaScript.", correta: false }
        ]
    }
];
