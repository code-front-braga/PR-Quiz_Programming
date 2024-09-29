interface IQuestionsProps {
  id: string;
  question: string;
  answerOptions: string[];
  correctAnswer: string;
}

export const programmingLanguage: IQuestionsProps[] = [
  {
    id: 'pl-01',
    question: 'Qual linguagem de programação abaixo foi iniciada na empresa Sun Microsystems?',
    answerOptions: ['JavaScript', 'Java', 'C++', 'C#'],
    correctAnswer: 'Java',
  },
  {
    id: 'pl-02',
    question:
      'Qual das seguintes linguagens é conhecida por sua sintaxe concisa e é frequentemente utilizada para desenvolvimento web front-end?',
    answerOptions: ['Java', 'C++', 'Python', 'JavaScript'],
    correctAnswer: 'JavaScript',
  },
  {
    id: 'pl-03',
    question:
      'Qual linguagem de programação é amplamente utilizada para o desenvolvimento de aplicativos móveis para iOS?',
    answerOptions: ['C#', 'Swift', 'Ruby', 'PHP'],
    correctAnswer: 'Swift',
  },
  {
    id: 'pl-04',
    question: 'Qual paradigma de programação é fortemente associado à linguagem Java?',
    answerOptions: [
      'Programação funcional',
      'Programação orientada a objetos',
      'Programação procedural',
      'Programação lógica',
    ],
    correctAnswer: 'Programação orientada a objetos',
  },
  {
    id: 'pl-05',
    question:
      'Qual linguagem de programação é conhecida por sua eficiência e é frequentemente utilizada para o desenvolvimento de sistemas operacionais e jogos?',
    answerOptions: ['Python', 'C++', 'Ruby', 'JavaScript'],
    correctAnswer: 'C++',
  },
];

export const frontEnd: IQuestionsProps[] = [
  {
    id: 'fe-01',
    question:
      'Qual das seguintes linguagens é a base para a estrutura de um site, definindo sua hierarquia e conteúdo?',
    answerOptions: ['CSS', 'JavaScript', 'HTML', 'Python'],
    correctAnswer: 'HTML',
  },
  {
    id: 'fe-02',
    question: 'Qual propriedade CSS é utilizada para controlar a distância entre elementos?',
    answerOptions: ['color', 'font-size', 'margin', 'padding'],
    correctAnswer: 'margin',
  },
  {
    id: 'fe-03',
    question: 'O que é DOM (Document Object Model)?',
    answerOptions: [
      'Uma linguagem de programação',
      'Uma representação da estrutura HTML em formato de árvore',
      'Um protocolo de comunicação',
      'Uma biblioteca JavaScript',
    ],
    correctAnswer: 'Uma representação da estrutura HTML em formato de árvore',
  },
  {
    id: 'fe-04',
    question:
      'Qual framework JavaScript é amplamente utilizado para criar interfaces de usuário complexas e interativas?',
    answerOptions: ['Node.js', 'React', 'Django', 'Laravel'],
    correctAnswer: 'React',
  },
  {
    id: 'fe-05',
    question: 'Qual é a principal vantagem de utilizar um framework JavaScript como React ou Vue.js?',
    answerOptions: [
      'Simplificar o desenvolvimento de interfaces de usuário complexas e reativas.',
      'Substituir completamente o HTML e CSS.',
      'Aumentar o tamanho dos arquivos CSS e JavaScript.',
      'Diminuir a performance das aplicações web.',
    ],
    correctAnswer: 'Simplificar o desenvolvimento de interfaces de usuário complexas e reativas.',
  },
];

export const frameworks: IQuestionsProps[] = [
  {
    id: 'f-01',
    question: 'Qual framework JavaScript é conhecido por sua arquitetura de componentes e pela utilização do JSX?',
    answerOptions: ['Angular', 'React', 'Vue', 'Ember.js'],
    correctAnswer: 'React',
  },
  {
    id: 'f-02',
    question:
      'Qual framework JavaScript é considerado mais leve e progressivo, permitindo uma adoção gradual em projetos existentes?',
    answerOptions: ['Angular', 'React', 'Vue.js', 'Ember.js'],
    correctAnswer: 'Vue.js',
  },
  {
    id: 'f-03',
    question: 'Qual é a principal diferença entre um framework e uma biblioteca JavaScript?',
    answerOptions: [
      'Não há diferença, os termos são sinônimos.',
      'Um framework impõe uma estrutura mais rígida, enquanto uma biblioteca oferece mais flexibilidade.',
      'Um framework é utilizado apenas para desenvolvimento back-end, enquanto uma biblioteca é utilizada apenas para front-end.',
      'Um framework é mais pesado e lento do que uma biblioteca.',
    ],
    correctAnswer: 'Um framework impõe uma estrutura mais rígida, enquanto uma biblioteca oferece mais flexibilidade.',
  },
  {
    id: 'f-04',
    question: 'Qual característica é comum a todos os principais frameworks JavaScript (React, Angular, Vue.js)?',
    answerOptions: [
      'Utilização obrigatória de TypeScript.',
      'Foco em componentes reutilizáveis.',
      'Integração nativa com Node.js.',
      'Criação de aplicações exclusivamente mobile.',
    ],
    correctAnswer: 'Foco em componentes reutilizáveis.',
  },
  {
    id: 'f-05',
    question: 'Qual framework JavaScript é frequentemente utilizado para criar aplicações híbridas (mobile e web)?',
    answerOptions: ['React Native', 'Angular Universal', 'Vue Native', 'Todos os anteriores'],
    correctAnswer: 'Todos os anteriores',
  },
];

export const javaScriptMethods: IQuestionsProps[] = [
  {
    id: 'm-01',
    question:
      'Qual método de array adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array?',
    answerOptions: ['pop()', 'push()', 'shift()', 'unshift()'],
    correctAnswer: 'push()',
  },
  {
    id: 'm-02',
    question: 'Qual método de array remove o último elemento de um array e retorna esse elemento removido?',
    answerOptions: ['pop()', 'push()', 'shift()', 'unshift()'],
    correctAnswer: 'pop()',
  },
  {
    id: 'm-03',
    question: 'Qual método de string transforma todos os caracteres de uma string em maiúsculas?',
    answerOptions: ['toUpperCase()', 'toLowerCase()', 'toTitleCase()', 'capitalize()'],
    correctAnswer: 'toUpperCase()',
  },
  {
    id: 'm-04',
    question: 'Qual método de string retorna a posição da primeira ocorrência de uma substring dentro de uma string?',
    answerOptions: ['indexOf()', 'search()', 'match()', 'find()'],
    correctAnswer: 'indexOf()',
  },
  {
    id: 'm-05',
    question:
      'Qual método de array junta todos os elementos de um array em uma string, separando-os por um delimitador especificado?',
    answerOptions: ['split()', 'join()', 'slice()', 'substring()'],
    correctAnswer: 'join()',
  },
];

export const programming: IQuestionsProps[] = [
  {
    id: 'p-01',
    question: 'Qual é o processo de transformar um algoritmo em um programa executável?',
    answerOptions: ['Compilação', 'Interpretação', 'Depuração', 'Todas as anteriores'],
    correctAnswer: 'Compilação',
  },
  {
    id: 'p-02',
    question:
      'Qual estrutura de controle permite repetir um bloco de código enquanto uma determinada condição for verdadeira?',
    answerOptions: ['If-else', 'Switch-case', 'While', 'For'],
    correctAnswer: 'While',
  },
  {
    id: 'p-03',
    question: 'O que é um algoritmo?',
    answerOptions: [
      'Uma linguagem de programação',
      'Um conjunto de instruções para resolver um problema',
      'Um hardware',
      'Um software',
    ],
    correctAnswer: 'Um conjunto de instruções para resolver um problema',
  },
  {
    id: 'p-04',
    question: 'Qual é a diferença entre sintaxe e semântica em uma linguagem de programação?',
    answerOptions: [
      'Sintaxe se refere ao significado das palavras, enquanto semântica se refere à estrutura das frases.',
      'Sintaxe se refere à estrutura das frases, enquanto semântica se refere ao significado das palavras.',
      'Sintaxe e semântica são sinônimos.',
      'Sintaxe se refere à execução do código, enquanto semântica se refere à escrita do código.',
    ],
    correctAnswer:
      'Sintaxe se refere à estrutura das frases, enquanto semântica se refere ao significado das palavras.',
  },
  {
    id: 'p-05',
    question: 'Qual é a principal diferença entre programação imperativa e declarativa?',
    answerOptions: [
      'A programação imperativa descreve como realizar uma tarefa, enquanto a declarativa descreve o resultado desejado.',
      'Não há diferença entre as duas',
      'A programação imperativa é mais eficiente que a declarativa.',
      'A programação declarativa é mais antiga que a imperativa.',
    ],
    correctAnswer:
      'A programação imperativa descreve como realizar uma tarefa, enquanto a declarativa descreve o resultado desejado.',
  },
];

export const nodeJs: IQuestionsProps[] = [
  {
    id: 'n-01',
    question:
      '1. Qual é a principal característica do Node.js que o diferencia de outros ambientes de execução JavaScript??',
    answerOptions: [
      'É executado apenas em navegadores web.',
      'É baseado em eventos e não bloqueante.',
      'É utilizado principalmente para desenvolvimento front-end.',
      'Não suporta a criação de servidores web.',
    ],
    correctAnswer: 'É baseado em eventos e não bloqueante.',
  },
  {
    id: 'n-02',
    question: 'Qual é a função do módulo fs no Node.js?',
    answerOptions: [
      'Manipular o sistema de arquivos.',
      'Criar interfaces gráficas.',
      'Gerenciar pacotes.',
      'Interagir com bancos de dados.',
    ],
    correctAnswer: 'Manipular o sistema de arquivos.',
  },
  {
    id: 'n-03',
    question: 'O que é um callback em Node.js?',
    answerOptions: [
      'Uma função que é executada após uma operação assíncrona ser concluída.',
      'Um tipo de dado primitivo.',
      'Uma estrutura de controle de fluxo síncrona.',
      'Uma biblioteca para manipulação de eventos.',
    ],
    correctAnswer: 'Uma função que é executada após uma operação assíncrona ser concluída.',
  },
  {
    id: 'n-04',
    question: 'Qual é a principal vantagem de utilizar o Node.js para desenvolvimento de aplicações back-end?',
    answerOptions: [
      'É mais fácil de aprender que outras linguagens.',
      'É a única linguagem que pode ser utilizada para desenvolvimento back-end.',
      'Permite criar aplicações escaláveis e de alta performance.',
      'Não requer configuração.',
    ],
    correctAnswer: 'Permite criar aplicações escaláveis e de alta performance.',
  },
  {
    id: 'n-05',
    question: 'Qual é a função do package.json em um projeto Node.js?',
    answerOptions: [
      'Armazenar o código fonte do projeto.',
      'Gerenciar as dependências do projeto.',
      'Configurar o servidor web.',
      'Compilar o código JavaScript.',
    ],
    correctAnswer: 'Gerenciar as dependências do projeto.',
  },
];
