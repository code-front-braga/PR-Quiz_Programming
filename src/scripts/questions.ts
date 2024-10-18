import { IQuizThemeProps } from './interfaces.js';

export const javaScriptTheme: IQuizThemeProps[] = [
  {
    themeName: 'JavaScript',
    questionNumber: 'Questão 01',
    question: 'Qual a diferença entre var, let e const na declaração de variáveis em JavaScript?',
    responseOptions: [
      'Não há diferença, são sinônimos.',
      'var tem escopo global, let e const têm escopo de bloco, e const é imutável.',
      'var e let são iguais, const é para constantes.',
      'var é mais antigo, let e const são mais modernos, mas com a mesma funcionalidade.',
      'var tem escopo de função, let e const têm escopo global.',
    ],
    correctResponse: 'var tem escopo global, let e const têm escopo de bloco, e const é imutável.',
    explanation:
      'var: Tem um escopo mais amplo, podendo ser acessada em qualquer lugar dentro de uma função ou globalmente. Pode ser redeclarada e reatribuída. let: Tem escopo de bloco, ou seja, só pode ser acessada dentro do bloco onde foi declarada. Pode ser redeclarada, mas não reatribuída dentro do mesmo escopo. const: Também tem escopo de bloco, mas, além disso, é imutável. Uma vez atribuído um valor a uma constante, ele não pode ser alterado.',
  },
  {
    questionNumber: 'Questão 02',
    question: 'Explique a tipagem dinâmica em JavaScript.',
    responseOptions: [
      'O tipo de uma variável é definido antes de sua utilização.',
      'O tipo de uma variável pode mudar durante a execução do código.',
      'JavaScript não possui tipagem.',
      'O tipo de uma variável é inferido pelo compilador.',
      'O tipo de uma variável é sempre string.',
    ],
    correctResponse: 'O tipo de uma variável pode mudar durante a execução do código.',
    explanation:
      'A tipagem dinâmica em JavaScript significa que o tipo de uma variável é determinado em tempo de execução e pode mudar ao longo do código. Diferente de linguagens com tipagem estática, como Java, você não precisa declarar explicitamente o tipo de uma variável antes de usá-la.',
  },
  {
    questionNumber: 'Questão 03',
    question: 'Qual a diferença entre null e undefined?',
    responseOptions: [
      'Não há diferença.',
      'null é um objeto, undefined é um tipo primitivo.',
      'null é para números, undefined é para strings.',
      'null indica ausência de valor, undefined indica que a variável não foi declarada.',
      'null é o oposto de undefined.',
    ],
    correctResponse: 'null indica ausência de valor, undefined indica que a variável não foi declarada.',
    explanation:
      'Embora ambos indiquem a ausência de um valor, null e undefined têm significados distintos em JavaScript: undefined: Indica que uma variável foi declarada, mas ainda não foi atribuído nenhum valor a ela. Ou seja, a variável existe, mas seu valor é desconhecido. Exemplo: let x; (x tem o valor undefined)null: É um valor atribuído explicitamente a uma variável para indicar que ela não tem nenhum valor válido. É uma forma de inicializar uma variável com a intenção de atribuir um valor posteriormente. Exemplo: let y = null; (y foi intencionalmente definida como nula',
  },
  {
    questionNumber: 'Questão 04',
    question: 'Qual a diferença entre == e === ?',
    responseOptions: [
      '== compara apenas o tipo, === compara valor e tipo.',
      '== compara valor e tipo, === compara apenas o valor.',
      'Não há diferença.',
      '== é mais antigo, === é mais moderno.',
      '== é para números, === é para strings.',
    ],
    correctResponse: '== compara apenas o tipo, === compara valor e tipo.',
    explanation:
      'Os operadores == e === são usados para comparar valores em JavaScript, mas com comportamentos diferentes: ==: Realiza uma comparação abstrata, tentando converter os operandos para um tipo comum antes de comparar. Por exemplo, 1 == "1" retorna true. ===: Realiza uma comparação estrita, comparando tanto o valor quanto o tipo dos operandos. Por exemplo, 1 === "1" retorna false. É altamente recomendado usar o operador === para evitar comparações imprevistas.',
  },
  {
    questionNumber: 'Questão 05',
    question: 'O que é uma função em JavaScript e como você a define?',
    responseOptions: ['Uma variável especial.', 'Um evento.', 'Um objeto.', 'Um bloco de código que executa uma tarefa específica.', 'Todas as alternativas estão corretas.'],
    correctResponse: 'Um bloco de código que executa uma tarefa específica.',
    explanation:
      'Uma função em JavaScript é um bloco de código reutilizável que executa uma tarefa específica. É definida usando a palavra-chave function, seguida do nome da função, parâmetros (se houver) e o corpo da função entre chaves. As funções podem ser usadas para modularizar o código, evitar repetições e organizar melhor a lógica.',
  },
  {
    questionNumber: 'Questão 06',
    question: 'Explique o conceito de hoisting.',
    responseOptions: [
      'É o ato de elevar um objeto.',
      'É um tipo de erro comum em JavaScript.',
      'É a capacidade de usar uma variável antes de sua declaração.',
      'É um método de otimização de código.',
      'É um conceito relacionado à orientação a objetos.',
    ],
    correctResponse: 'É a capacidade de usar uma variável antes de sua declaração.',
    explanation:
      'Hoisting em JavaScript é um comportamento peculiar onde as declarações de variáveis (com var) e funções são "elevadas" para o topo do seu escopo (seja ele global ou de função) antes da execução do código. Isso significa que você pode usar uma variável ou função antes de sua declaração física no código. Observações: Apenas declarações: O hoisting só ocorre com as declarações de variáveis e funções, não com a atribuição de valores. Valor inicial: Variáveis "hoistadas" têm o valor undefined antes de serem inicializadas. Let e const: As palavras-chave let e const não são hoistadas da mesma forma que var. Tentar usar uma variável declarada com let ou const antes de sua declaração resultará em um erro de referência.',
  },
  {
    questionNumber: 'Questão 07',
    question: 'O que é um array em JavaScript?',
    responseOptions: ['Um objeto.', 'Uma função.', 'Um evento.', 'Uma lista ordenada de elementos.', 'Um tipo de dado primitivo.'],
    correctResponse: 'Uma lista ordenada de elementos.',
    explanation:
      'Um array em JavaScript é uma coleção ordenada de elementos. Cada elemento pode ser de qualquer tipo de dado (números, strings, objetos, etc.). Os arrays são indexados, começando do índice 0.',
  },
  {
    questionNumber: 'Questão 08',
    question: 'Como você acessa o último elemento de um array com n elementos?',
    responseOptions: ['array[n]', 'array[n-1]', 'array.last', 'array.end', 'Não é possível acessar o último elemento diretamente.'],
    correctResponse: 'array[n-1]',
    explanation: 'Para acessar o último elemento de um array com n elementos, você pode usar o índice n-1, pois os índices em JavaScript começam em 0.',
  },
  {
    questionNumber: 'Questão 09',
    question: 'O que é o DOM?',
    responseOptions: [
      'Um documento HTML.',
      'Uma linguagem de programação.',
      'Um navegador web.',
      'Um protocolo de comunicação.',
      'Uma representação da estrutura de um documento HTML.',
    ],
    correctResponse: 'Uma representação da estrutura de um documento HTML.',
    explanation:
      'O DOM (Document Object Model) é uma representação programática da estrutura, conteúdo e estilo de um documento HTML. Em outras palavras, o DOM transforma o HTML em uma árvore de objetos que o JavaScript pode manipular. Isso permite que você altere dinamicamente o conteúdo de uma página, adicione ou remova elementos, responda a eventos do usuário (como cliques) e muito mais.',
  },
  {
    questionNumber: 'Questão 10',
    question: 'Qual evento é disparado quando um botão é clicado?',
    responseOptions: ['onmouseover', 'onload', 'onclick', 'onchange', 'onsubmit'],
    correctResponse: 'onclick',
    explanation:
      'O evento onclick é disparado quando um elemento (como um botão) é clicado. Ao adicionar um ouvinte de eventos onclick a um elemento, você pode executar uma função quando o elemento for clicado. Observação: Existem outros eventos relacionados a cliques, como mousedown (quando o botão do mouse é pressionado) e mouseup (quando o botão do mouse é solto).',
  },
];

export const htmlTheme: IQuizThemeProps[] = [
  {
    themeName: 'HTML',
    questionNumber: 'Questão 01',
    question: ' Qual tag HTML é utilizada para criar um título principal em uma página?',
    responseOptions: ['<header>', '<h1>', '<title>', '<div>', '<section>'],
    correctResponse: '<h1>',
    explanation:
      'Essa tag é especificamente projetada para definir o título principal de uma página. Ela indica aos navegadores e mecanismos de busca a importância hierárquica do conteúdo. Os títulos são utilizados para organizar o conteúdo e facilitar a navegação dos usuários.',
  },
  {
    questionNumber: 'Questão 02',
    question: 'Quais são as tags essenciais que compõem a estrutura básica de um documento HTML?',
    responseOptions: ['<head>, <body>, <section>', '<div>, <span>, <p>', '<header>, <nav>, <footer>', '<html>, <head>, <body>', '<title>, <style>, <script>'],
    correctResponse: '<html>, <head>, <body>',
    explanation:
      'Estas são as tags raiz de qualquer documento HTML. <html> envolve todo o conteúdo, <head> contém metadados (título, links para arquivos CSS, etc.) e <body> contém o conteúdo visível da página.',
  },
  {
    questionNumber: 'Questão 03',
    question: 'Qual elemento semântico seria mais adequado para representar o conteúdo principal de uma página?',
    responseOptions: ['<nav>', '<article>', '<aside>', '<footer>', '<section>'],
    correctResponse: '<article>',
    explanation: 'A tag <article> representa um conteúdo independente e autocontido, como um artigo de blog, um post em um fórum ou um item de notícias.',
  },
  {
    questionNumber: 'Questão 04',
    question: 'Qual atributo é usado para definir um link para uma página externa?',
    responseOptions: ['href', 'src', 'target', 'alt', 'title'],
    correctResponse: 'href',
    explanation: 'O atributo href especifica o endereço do recurso ao qual o link aponta.',
  },
  {
    questionNumber: 'Questão 05',
    question: 'Como você criaria uma lista não ordenada com os itens "Maçã", "Banana" e "Pera"?',
    responseOptions: [
      '<ol><li>Maçã</li><li>Banana</li><li>Pera</li></ol>',
      '<list><li>Maçã</li><li>Banana</li><li>Pera</li></list>',
      '<ul><li>Maçã</li><li>Banana</li><li>Pera</li></ul>',
      '<item><li>Maçã</li><li>Banana</li><li>Pera</li></item>',
      '<enumerate><li>Maçã</li><li>Banana</li><li>Pera</li></enumerate>',
    ],
    correctResponse: '<ul><li>Maçã</li><li>Banana</li><li>Pera</li></ul>',
    explanation: '<ul> define uma lista não ordenada, enquanto <li> define cada item da lista.',
  },
  {
    questionNumber: 'Questão 06',
    question: 'Qual tag define uma célula em uma tabela HTML?',
    responseOptions: ['<table>', '<tr>', '<td>', '<th>', '<caption>'],
    correctResponse: '<td>',
    explanation: 'A tag <td> define uma célula de dados em uma tabela.',
  },
  {
    questionNumber: 'Questão 07',
    question: 'Qual atributo é usado para abrir um link em uma nova aba do navegador?',
    responseOptions: ['href', 'newtab', 'external', 'target="_blank"', 'link'],
    correctResponse: 'target="_blank"',
    explanation: 'O atributo target="_blank" faz com que o link se abra em uma nova aba do navegador.',
  },
  {
    questionNumber: 'Questão 08',
    question: 'Qual atributo é usado para fornecer uma descrição alternativa para uma imagem, que é útil para usuários de leitores de tela?',
    responseOptions: ['src', 'title', 'width', 'height', 'alt'],
    correctResponse: 'alt',
    explanation: 'O atributo alt fornece uma descrição alternativa da imagem, que é importante para usuários de leitores de tela e para casos em que a imagem não carrega.',
  },
  {
    questionNumber: 'Questão 09',
    question: 'Qual elemento HTML é usado para criar um campo de texto de várias linhas?',
    responseOptions: ['<input type="text">', '<select>', '<textarea>', '<option>', '<label>'],
    correctResponse: '<textarea>',
    explanation: 'A tag <textarea> cria um campo de texto multiline, ideal para permitir que o usuário digite grandes quantidades de texto.',
  },
  {
    questionNumber: 'Questão 10',
    question: 'Qual a principal diferença entre as tags <div> e <span>?',
    responseOptions: [
      '<div> é usado para criar linhas horizontais, enquanto <span> é usado para criar colunas.',
      '<div> é usado para criar tabelas, enquanto <span> é usado para criar listas.',
      '<div> é usado para criar formulários, enquanto <span> é usado para criar links',
      'Não há diferença entre as duas tags.',
      '<div> é um elemento de bloco, enquanto <span> é um elemento inline.',
    ],
    correctResponse: '<div> é um elemento de bloco, enquanto <span> é um elemento inline.',
    explanation:
      'Elementos de bloco ocupam toda a largura disponível e começam em uma nova linha, enquanto elementos inline não quebram linhas e ocupam apenas o espaço necessário.',
  },
];

export const cssTheme: IQuizThemeProps[] = [
  {
    themeName: 'CSS',
    questionNumber: 'Questão 01',
    question: 'Qual a principal função do CSS?',
    responseOptions: [
      'Criar a estrutura básica de uma página web.',
      'Adicionar estilos e formatação a elementos HTML.',
      'Adicionar interatividade a uma página web.',
      'Gerenciar o layout de uma página web de forma responsiva.',
      'Criar animações complexas.',
    ],
    correctResponse: 'Adicionar estilos e formatação a elementos HTML.',
    explanation:
      'O CSS (Cascading Style Sheets) é utilizado para definir a apresentação visual de um documento HTML. Ele controla a cor, fonte, layout, tamanho e outros aspectos visuais dos elementos HTML.',
  },
  {
    questionNumber: 'Questão 02',
    question: 'Qual a sintaxe básica de uma regra CSS?',
    responseOptions: [
      'selector { propriedade: valor; }',
      'style { element: property; }',
      'element { style: property; }.',
      'property { selector: value; }',
      'value { property: selector; }',
    ],
    correctResponse: 'selector { propriedade: valor; }.',
    explanation:
      'Essa é a sintaxe padrão de uma regra CSS. O selector identifica o elemento HTML a ser estilizado, a propriedade especifica o estilo a ser aplicado e o valor define o valor desse estilo..',
  },
  {
    questionNumber: 'Questão 03',
    question: 'Qual a diferença entre um ID e uma classe em CSS?',
    responseOptions: [
      'IDs são mais específicos que classes.',
      'Classes são mais específicas que IDs.',
      'IDs podem ser aplicados a múltiplos elementos, enquanto classes só podem ser aplicados a um elemento.',
      'Classes podem ser aplicados a múltiplos elementos, enquanto IDs só podem ser aplicados a um elemento.',
      'Não há diferença entre IDs e classes.',
    ],
    correctResponse: 'Classes podem ser aplicados a múltiplos elementos, enquanto IDs só podem ser aplicados a um elemento.',
    explanation: 'IDs são únicos e devem ser usados apenas uma vez em um documento HTML, enquanto classes podem ser reutilizadas em vários elementos.',
  },
  {
    questionNumber: 'Questão 04',
    question: 'O que é o box model em CSS?',
    responseOptions: [
      'Um modelo para criar caixas flutuantes.',
      'Um modelo para criar layouts responsivos.',
      'Um modelo para organizar elementos em uma grid.',
      'Um modelo para criar animações CSS.',
      'Um modelo que representa a área ocupada por um elemento, incluindo conteúdo, padding, border e margin.',
    ],
    correctResponse: 'Um modelo que representa a área ocupada por um elemento, incluindo conteúdo, padding, border e margin.',
    explanation:
      'O box model define a área que um elemento ocupa em uma página, incluindo o conteúdo, a área de preenchimento (padding), a borda (border) e o espaço externo (margin).',
  },
  {
    questionNumber: 'Questão 05',
    question: 'Qual a propriedade CSS utilizada para definir a cor de fundo de um elemento?',
    responseOptions: ['color', 'background-color', 'fill.', 'paint', 'shade.'],
    correctResponse: 'background-color.',
    explanation: 'A propriedade background-color define a cor de fundo de um elemento.',
  },
  {
    questionNumber: 'Questão 06',
    question: 'O que são seletores CSS?',
    responseOptions: [
      'São padrões de correspondência que permitem selecionar elementos HTML específicos para aplicar estilos.',
      'São palavras-chave utilizadas para definir propriedades CSS.',
      'São regras que definem como os elementos HTML devem ser exibidos.',
      'São unidades de medida utilizadas em CSS.',
      'São os valores atribuídos às propriedades CSS.',
    ],
    correctResponse: 'São padrões de correspondência que permitem selecionar elementos HTML específicos para aplicar estilos.',
    explanation:
      'Seletores CSS são utilizados para identificar os elementos HTML aos quais as regras de estilo serão aplicadas. Existem diversos tipos de seletores, como seletores por tag, por classe, por ID, etc.',
  },
  {
    questionNumber: 'Questão 07',
    question: 'Qual a propriedade CSS utilizada para definir a largura de um elemento?',
    responseOptions: ['size', 'length', 'dimension', 'width', 'span'],
    correctResponse: 'width',
    explanation: 'A propriedade width define a largura de um elemento.',
  },
  {
    questionNumber: 'Questão 08',
    question: 'O que é uma folha de estilo externa?',
    responseOptions: [
      'Um arquivo separado que contém as regras CSS.',
      'Um estilo aplicado diretamente a um elemento HTML.',
      'Um estilo definido dentro da tag <head> de um documento HTML.',
      'Um estilo definido dentro do elemento HTML.',
      ' Um estilo aplicado a todos os elementos HTML de um documento.',
    ],
    correctResponse: 'Um arquivo separado que contém as regras CSS.',
    explanation: 'Uma folha de estilo externa é um arquivo com extensão .css que contém todas as regras CSS de um site. Ela é vinculada ao documento HTML através da tag <link>.',
  },
  {
    questionNumber: 'Questão 09',
    question: 'Qual a diferença entre display: block e display: inline?',
    responseOptions: [
      'Não há diferença entre os dois.',
      'display: block não quebra linha, enquanto display: inline ocupa toda a largura disponível.',
      'display: block é usado para criar tabelas, enquanto display: inline é usado para criar listas.',
      'display: block é usado para criar links, enquanto display: inline é usado para criar imagens.',
      'display: block ocupa toda a largura disponível, enquanto display: inline não quebra linha.',
    ],
    correctResponse: 'display: block ocupa toda a largura disponível, enquanto display: inline não quebra linha.',
    explanation:
      'A propriedade display controla o tipo de caixa que um elemento forma. Elementos block ocupam toda a largura disponível e quebram linha, enquanto elementos inline não quebram linha e ocupam apenas o espaço necessário.',
  },
  {
    questionNumber: 'Questão 10',
    question: 'O que é um layout responsivo?',
    responseOptions: [
      'Um layout que utiliza apenas imagens responsivas.',
      'Um layout que é fixo e não se adapta a diferentes dispositivos.',
      'Um layout que se adapta a diferentes tamanhos de tela.',
      'Um layout que utiliza apenas CSS3.',
      'Um layout que é otimizado para dispositivos móveis.',
    ],
    correctResponse: 'Um layout que se adapta a diferentes tamanhos de tela.',
    explanation:
      'Um layout responsivo é projetado para se adaptar automaticamente ao tamanho da tela do dispositivo, garantindo uma boa experiência do usuário em diferentes dispositivos, como smartphones, tablets e computadores.',
  },
];

export const reactTheme: IQuizThemeProps[] = [
  {
    themeName: 'REACTJS',
    questionNumber: 'Questão 01',
    question: 'O que é React?',
    responseOptions: [
      'Uma linguagem de programação.',
      'Uma biblioteca JavaScript para criar interfaces de usuário.',
      'Um framework para desenvolvimento back-end.',
      'Um sistema de gerenciamento de banco de dados.',
      'Uma ferramenta para versionar código.',
    ],
    correctResponse: 'Uma biblioteca JavaScript para criar interfaces de usuário.',
    explanation:
      'O React é uma biblioteca JavaScript popular para construir interfaces de usuário declarativas e eficientes. Ele permite criar componentes reutilizáveis e facilita a manutenção de aplicações web complexas.',
  },
  {
    questionNumber: 'Questão 02',
    question: 'Qual a sintaxe básica de uma regra CSS?',
    responseOptions: [
      'selector { propriedade: valor; }',
      'style { element: property; }',
      'element { style: property; }.',
      'property { selector: value; }',
      'value { property: selector; }',
    ],
    correctResponse: 'selector { propriedade: valor; }.',
    explanation:
      'Essa é a sintaxe padrão de uma regra CSS. O selector identifica o elemento HTML a ser estilizado, a propriedade especifica o estilo a ser aplicado e o valor define o valor desse estilo.',
  },
  {
    questionNumber: 'Questão 03',
    question: 'Qual a diferença entre um ID e uma classe em CSS?',
    responseOptions: [
      'IDs são mais específicos que classes.',
      'Classes são mais específicas que IDs.',
      'IDs podem ser aplicados a múltiplos elementos, enquanto classes só podem ser aplicados a um elemento.',
      'Classes podem ser aplicados a múltiplos elementos, enquanto IDs só podem ser aplicados a um elemento.',
      'Não há diferença entre IDs e classes.',
    ],
    correctResponse: 'Classes podem ser aplicados a múltiplos elementos, enquanto IDs só podem ser aplicados a um elemento.',
    explanation: 'IDs são únicos e devem ser usados apenas uma vez em um documento HTML, enquanto classes podem ser reutilizadas em vários elementos.',
  },
  {
    questionNumber: 'Questão 04',
    question: 'O que é o box model em CSS?',
    responseOptions: [
      'Um modelo para criar caixas flutuantes.',
      'Um modelo para criar layouts responsivos.',
      'Um modelo para organizar elementos em uma grid.',
      'Um modelo para criar animações CSS.',
      'Um modelo que representa a área ocupada por um elemento, incluindo conteúdo, padding, border e margin.',
    ],
    correctResponse: 'Um modelo que representa a área ocupada por um elemento, incluindo conteúdo, padding, border e margin.',
    explanation:
      'O box model define a área que um elemento ocupa em uma página, incluindo o conteúdo, a área de preenchimento (padding), a borda (border) e o espaço externo (margin).',
  },
  {
    questionNumber: 'Questão 05',
    question: 'Qual a propriedade CSS utilizada para definir a cor de fundo de um elemento?',
    responseOptions: ['color', 'background-color', 'fill.', 'paint', 'shade.'],
    correctResponse: 'background-color.',
    explanation: 'A propriedade background-color define a cor de fundo de um elemento.',
  },
  {
    questionNumber: 'Questão 06',
    question: 'O que são seletores CSS?',
    responseOptions: [
      'São padrões de correspondência que permitem selecionar elementos HTML específicos para aplicar estilos.',
      'São palavras-chave utilizadas para definir propriedades CSS.',
      'São regras que definem como os elementos HTML devem ser exibidos.',
      'São unidades de medida utilizadas em CSS.',
      'São os valores atribuídos às propriedades CSS.',
    ],
    correctResponse: 'São padrões de correspondência que permitem selecionar elementos HTML específicos para aplicar estilos.',
    explanation:
      'Seletores CSS são utilizados para identificar os elementos HTML aos quais as regras de estilo serão aplicadas. Existem diversos tipos de seletores, como seletores por tag, por classe, por ID, etc.',
  },
  {
    questionNumber: 'Questão 07',
    question: 'Qual a propriedade CSS utilizada para definir a largura de um elemento?',
    responseOptions: ['size', 'length', 'dimension', 'width', 'span'],
    correctResponse: 'width',
    explanation: 'A propriedade width define a largura de um elemento.',
  },
  {
    questionNumber: 'Questão 08',
    question: 'O que é uma folha de estilo externa?',
    responseOptions: [
      'Um arquivo separado que contém as regras CSS.',
      'Um estilo aplicado diretamente a um elemento HTML.',
      'Um estilo definido dentro da tag <head> de um documento HTML.',
      'Um estilo definido dentro do elemento HTML.',
      ' Um estilo aplicado a todos os elementos HTML de um documento.',
    ],
    correctResponse: 'Um arquivo separado que contém as regras CSS.',
    explanation: 'Uma folha de estilo externa é um arquivo com extensão .css que contém todas as regras CSS de um site. Ela é vinculada ao documento HTML através da tag <link>.',
  },
  {
    questionNumber: 'Questão 09',
    question: 'Qual a diferença entre display: block e display: inline?',
    responseOptions: [
      'Não há diferença entre os dois.',
      'display: block não quebra linha, enquanto display: inline ocupa toda a largura disponível.',
      'display: block é usado para criar tabelas, enquanto display: inline é usado para criar listas.',
      'display: block é usado para criar links, enquanto display: inline é usado para criar imagens.',
      'display: block ocupa toda a largura disponível, enquanto display: inline não quebra linha.',
    ],
    correctResponse: 'display: block ocupa toda a largura disponível, enquanto display: inline não quebra linha.',
    explanation:
      'A propriedade display controla o tipo de caixa que um elemento forma. Elementos block ocupam toda a largura disponível e quebram linha, enquanto elementos inline não quebram linha e ocupam apenas o espaço necessário.',
  },
  {
    questionNumber: 'Questão 10',
    question: 'O que é um layout responsivo?',
    responseOptions: [
      'Um layout que utiliza apenas imagens responsivas.',
      'Um layout que é fixo e não se adapta a diferentes dispositivos.',
      'Um layout que se adapta a diferentes tamanhos de tela.',
      'Um layout que utiliza apenas CSS3.',
      'Um layout que é otimizado para dispositivos móveis.',
    ],
    correctResponse: 'Um layout que se adapta a diferentes tamanhos de tela.',
    explanation:
      'Um layout responsivo é projetado para se adaptar automaticamente ao tamanho da tela do dispositivo, garantindo uma boa experiência do usuário em diferentes dispositivos, como smartphones, tablets e computadores.',
  },
];

export const nodeJsTheme: IQuizThemeProps[] = [
  {
    themeName: 'NodeJS',
    questionNumber: 'Questão 01',
    question: 'Qual a principal característica que diferencia o Node.js de outras linguagens de programação backend?',
    responseOptions: ['Tipagem estática', 'Programação orientada a objetos', 'Modelo assíncrono e não bloqueante', 'Compilação', 'Linguagem de baixo nível'],
    correctResponse: 'Modelo assíncrono e não bloqueante',
    explanation:
      'Essa é a característica principal que diferencia o Node.js de muitas outras linguagens backend. O modelo assíncrono permite que o Node.js handle múltiplas requisições de forma eficiente, tornando-o ideal para aplicações em tempo real e com alta concorrência.',
  },
  {
    questionNumber: 'Questão 02',
    question: 'Qual o papel do NPM no desenvolvimento Node.js?',
    responseOptions: ['É um editor de código.', 'É um framework de testes.', 'É um servidor web embutido.', 'É um gerenciador de pacotes.', 'É uma linguagem de templates.'],
    correctResponse: 'É um gerenciador de pacotes.',
    explanation:
      'O NPM (Node Package Manager) é a ferramenta padrão para gerenciar pacotes e dependências em projetos Node.js. Ele permite instalar, atualizar e remover pacotes de forma fácil e eficiente.',
  },
  {
    questionNumber: 'Questão 03',
    question: 'Qual a principal função do módulo http no Node.js?',
    responseOptions: [
      'Manipular arquivos do sistema.',
      'Criar interfaces gráficas.',
      'Acessar bancos de dados.',
      'Gerenciar processos do sistema operacional.',
      'Criar servidores HTTP.',
    ],
    correctResponse: 'Criar servidores HTTP',
    explanation: 'O módulo http é o módulo core do Node.js responsável por criar servidores HTTP. Ele permite criar aplicações web que podem responder a requisições HTTP.',
  },
  {
    questionNumber: 'Questão 04',
    question: 'O que é um callback em Node.js?',
    responseOptions: [
      'Uma função que é executada após um evento assíncrono ser concluído.',
      'Uma variável global que armazena o resultado de uma operação.',
      'Um tipo de dado primitivo.',
      'Uma forma de sincronizar operações assíncronas.',
      'Um objeto que representa uma conexão de rede.',
    ],
    correctResponse: 'Uma função que é executada após um evento assíncrono ser concluído.',
    explanation:
      'Callbacks são funções que são passadas como argumentos para outras funções e são executadas quando um determinado evento ocorre, como a conclusão de uma operação de I/O.',
  },
  {
    questionNumber: 'Questão 05',
    question: 'Qual a principal vantagem de usar promises em Node.js?',
    responseOptions: [
      'Simplificar o tratamento de erros.',
      'Melhorar a performance de aplicações.',
      'Evitar o uso de callbacks.',
      'Todas as alternativas anteriores.',
      'Nenhuma das alternativas anteriores.',
    ],
    correctResponse: 'Todas as alternativas anteriores.',
    explanation: 'Promises simplificam o tratamento de erros, melhoram a legibilidade do código e evitam o "callback hell".',
  },
  {
    questionNumber: 'Questão 06',
    question: 'O que é o event loop no Node.js?',
    responseOptions: [
      'Um mecanismo para executar código de forma síncrona.',
      'Um mecanismo para gerenciar eventos de forma assíncrona.',
      'Um tipo de dado utilizado para armazenar eventos.',
      'Uma biblioteca para criar interfaces gráficas.',
      'Um servidor web embutido.',
    ],
    correctResponse: 'Um mecanismo para gerenciar eventos de forma assíncrona.',
    explanation: 'O event loop é o coração do Node.js. Ele é responsável por monitorar eventos e executar callbacks quando esses eventos ocorrem.',
  },
  {
    questionNumber: 'Questão 07',
    question: 'Qual a diferença entre módulos comuns e módulos nativos no Node.js?',
    responseOptions: [
      'Módulos comuns são mais rápidos que módulos nativos.',
      'Módulos nativos são mais fáceis de instalar.',
      'Módulos comuns são escritos em JavaScript, enquanto módulos nativos são escritos em C++.',
      'Módulos comuns não podem ser utilizados em projetos Node.js.',
      'Módulos nativos não podem ser utilizados em projetos Node.js.',
    ],
    correctResponse: 'Módulos comuns são escritos em JavaScript, enquanto módulos nativos são escritos em C++.',
    explanation:
      'Módulos comuns são escritos em JavaScript e podem ser instalados usando o NPM. Módulos nativos são compilados para a plataforma específica e oferecem maior performance para tarefas intensivas.',
  },
  {
    questionNumber: 'Questão 08',
    question: 'Qual a função do módulo fs no Node.js?',
    responseOptions: [
      'Manipular arquivos do sistema.',
      'Criar servidores HTTP.',
      'Gerenciar processos do sistema operacional.',
      'Criar interfaces gráficas.',
      'Acessar bancos de dados.',
    ],
    correctResponse: 'Manipular arquivos do sistema.',
    explanation: 'O módulo fs (filesystem) é utilizado para realizar operações em arquivos e diretórios, como leitura, escrita, criação, remoção, etc.',
  },
  {
    questionNumber: 'Questão 09',
    question: 'O que é um stream em Node.js?',
    responseOptions: [
      'Um tipo de dado primitivo.',
      'Um servidor HTTP.',
      'Um módulo para criar interfaces gráficas.',
      'Uma forma de ler e escrever dados de forma assíncrona.',
      'Um mecanismo para gerenciar eventos.',
    ],
    correctResponse: 'Uma forma de ler e escrever dados de forma assíncrona.',
    explanation: 'Streams são objetos que permitem ler e escrever dados de forma contínua e assíncrona, ideal para lidar com grandes volumes de dados.',
  },
  {
    questionNumber: 'Questão 10',
    question: 'Qual a importância do Node.js para o desenvolvimento de aplicações em tempo real?',
    responseOptions: [
      'O Node.js não é adequado para aplicações em tempo real.',
      'O Node.js é muito lento para aplicações em tempo real.',
      'O Node.js não suporta websockets.',
      'O modelo assíncrono e não bloqueante do Node.js o torna ideal para aplicações em tempo real.',
      'O Node.js é mais adequado para aplicações desktop.',
    ],
    correctResponse: 'O modelo assíncrono e não bloqueante do Node.js o torna ideal para aplicações em tempo real.',
    explanation:
      'O modelo assíncrono do Node.js permite que ele handle várias conexões simultâneas de forma eficiente, tornando-o ideal para aplicações como chat, jogos online e outras que exigem baixa latência e alta escalabilidade.',
  },
];

export const frontendTheme: IQuizThemeProps[] = [
  {
    themeName: 'FrontEnd',
    questionNumber: 'Questão 01',
    question: 'Qual a principal linguagem utilizada para estruturar o conteúdo de uma página web?',
    responseOptions: ['JavaScript', 'CSS', 'HTML', 'Python', 'PHP'],
    correctResponse: 'HTML',
    explanation:
      'HTML (HyperText Markup Language) é a linguagem fundamental para criar a estrutura de uma página web, definindo elementos como cabeçalhos, parágrafos, listas, tabelas, etc.',
  },
  {
    questionNumber: 'Questão 02',
    question: 'Qual a diferença entre um elemento HTML e um atributo HTML?',
    responseOptions: [
      'Não há diferença: Ambos são a mesma coisa.',
      'Elemento define a estrutura, atributo define características.',
      'Atributo define a estrutura, elemento define características.',
      'Elemento é para CSS, atributo é para JavaScript.',
      'Atributo é para HTML, elemento é para CSS.',
    ],
    correctResponse: 'Elemento define a estrutura, atributo define características.',
    explanation:
      'Um elemento HTML (como <p>, <h1>, <div>) define um tipo de conteúdo na página, enquanto um atributo (como class, id, src) fornece informações adicionais sobre o elemento.',
  },
  {
    questionNumber: 'Questão 03',
    question: 'Qual a função do JavaScript em um projeto frontend?',
    responseOptions: ['Criar a estrutura da página.', 'Estilizar a página.', 'Armazenar dados no servidor', 'Adicionar interatividade.', 'Gerar o HTML.'],
    correctResponse: 'Adicionar interatividade.',
    explanation: 'JavaScript permite criar páginas web dinâmicas e interativas, respondendo a ações do usuário e manipulando o DOM (Document Object Model).',
  },
  {
    questionNumber: 'Questão 04',
    question: 'O que é DOM?',
    responseOptions: [
      'Uma linguagem de programação.',
      'Um tipo de arquivo.',
      'Uma biblioteca JavaScript.',
      'Uma folha de estilo.',
      'Uma representação da página HTML em formato de árvore.',
    ],
    correctResponse: 'Uma representação da página HTML em formato de árvore.',
    explanation:
      'O DOM (Document Object Model) é uma interface que representa a página HTML como uma árvore de objetos, permitindo que o JavaScript manipule e modifique o conteúdo e a estrutura da página.',
  },
  {
    questionNumber: 'Questão 05',
    question: 'Qual a função da tag <script> em HTML?',
    responseOptions: ['Definir um estilo.', 'Incluir um script JavaScript.', 'Criar um título.', 'Criar um parágrafo.', 'Definir um links.'],
    correctResponse: 'Incluir um script JavaScript.',
    explanation: 'A tag <script> é usada para incluir um script JavaScript em uma página HTML.',
  },
  {
    questionNumber: 'Questão 06',
    question: 'O que é um framework JavaScript?',
    responseOptions: [
      'Uma biblioteca de funções para facilitar o desenvolvimento web.',
      'Uma estrutura completa para construir aplicações web.',
      'Uma linguagem de programação.',
      'Um editor de códigos.',
      'Um servidor web.',
    ],
    correctResponse: 'Uma estrutura completa para construir aplicações web.',
    explanation:
      'Um framework JavaScript fornece uma estrutura e ferramentas para construir aplicações web, oferecendo componentes pré-construídos, padrões de projeto e outras funcionalidades que agilizam o desenvolvimento.',
  },
  {
    questionNumber: 'Questão 07',
    question: 'Qual a diferença entre HTML, CSS e JavaScript?',
    responseOptions: [
      'Não há diferença, são sinônimos.',
      'HTML estiliza, CSS estrutura, JavaScript interage.',
      'HTML estrutura, CSS estiliza, JavaScript interage.',
      'HTML e CSS são para o back-end, JavaScript para o front-end.',
      'HTML e JavaScript são para o front-end, CSS para o back-end.',
    ],
    correctResponse: 'HTML estrutura, CSS estiliza, JavaScript interage.',
    explanation: 'HTML define a estrutura, CSS a aparência e JavaScript a interatividade de uma página web.',
  },
  {
    questionNumber: 'Questão 08',
    question: 'O que é um evento em JavaScript?',
    responseOptions: ['Um erro no código.', 'Um elemento HTML.', 'Uma função JavaScript.', 'Um estilo CSS.', 'Uma ação realizada pelo usuário ou pelo sistema.'],
    correctResponse: 'Uma ação realizada pelo usuário ou pelo sistema.',
    explanation: 'Um evento é uma ação que ocorre em um elemento HTML, como um clique, um movimento do mouse ou o carregamento da página.',
  },
  {
    questionNumber: 'Questão 09',
    question: 'Qual a importância do responsive design?',
    responseOptions: [
      'Faz com que a página tenha a mesma aparência em todos os dispositivos.',
      'Torna a página mais rápida.',
      'Permite que a página se adapte a diferentes tamanhos de tela.',
      'Adiciona animações à página.',
      'Torna a página mais segura.',
    ],
    correctResponse: 'Permite que a página se adapte a diferentes tamanhos de tela.',
    explanation:
      'Responsive design garante que uma página web seja visualizada de forma otimizada em diferentes dispositivos (desktop, tablet, celular), adaptando o layout e o conteúdo à tela.',
  },
  {
    questionNumber: 'Questão 10',
    question: 'Qual a principal diferença entre um framework e uma biblioteca JavaScript para desenvolvimento frontend?',
    responseOptions: [
      'Frameworks são mais leves e focados em componentes específicos, enquanto bibliotecas oferecem uma estrutura completa para aplicações.',
      'Bibliotecas são mais leves e focadas em componentes específicos, enquanto frameworks oferecem uma estrutura completa para aplicações.',
      'Frameworks são usados apenas para grandes projetos, enquanto bibliotecas são para projetos pequenos.',
      'Não há diferença entre frameworks e bibliotecas.',
      'Frameworks são para design responsivo, enquanto bibliotecas são para interatividade.',
    ],
    correctResponse: 'Bibliotecas são mais leves e focadas em componentes específicos, enquanto frameworks oferecem uma estrutura completa para aplicações.',
    explanation:
      'Bibliotecas: Oferecem um conjunto de funções e componentes reutilizáveis que você pode incorporar em seu projeto para resolver problemas específicos. Elas são mais flexíveis e permitem que você tenha mais controle sobre a arquitetura da sua aplicação. Exemplos: jQuery, Lodash. Frameworks: Fornecem uma estrutura completa para o desenvolvimento de aplicações, com padrões de projeto, componentes pré-construídos e um fluxo de trabalho definido. Eles oferecem uma base sólida para construir aplicações complexas, mas podem ser mais opinativos sobre como você deve estruturar seu código. Exemplos: React, Angular, Vue.js. Em resumo: A principal diferença é o nível de abstração e controle que você tem sobre a aplicação. Bibliotecas são mais flexíveis, enquanto frameworks impõem mais estrutura.',
  },
];

export const backendTheme: IQuizThemeProps[] = [
  {
    themeName: 'BackEnd',
    questionNumber: 'Questão 01',
    question: 'Qual a principal função do backend em uma aplicação web?',
    responseOptions: [
      'Criar a interface visual da aplicação.',
      'Manipular dados e fornecer informações ao frontend.',
      'Estilizar a página web.',
      'Adicionar interatividade à página.',
      'Armazenar arquivos estáticos da aplicação.',
    ],
    correctResponse: 'Manipular dados e fornecer informações ao frontend.',
    explanation:
      'O backend é responsável por todas as operações do lado do servidor, como gerenciamento de banco de dados, lógica de negócios, autenticação de usuários e APIs para interagir com o frontend.',
  },
  {
    questionNumber: 'Questão 02',
    question: 'Qual a linguagem de programação mais utilizada para desenvolvimento backend?',
    responseOptions: ['HTML', 'CSS', 'JavaScript', 'Python', 'C#'],
    correctResponse: 'Python',
    explanation: 'Python é uma das linguagens mais populares para desenvolvimento backend devido à sua sintaxe clara, grande comunidade e diversos frameworks.',
  },
  {
    questionNumber: 'Questão 03',
    question: 'Qual a principal diferença entre um servidor web e um servidor de aplicação?',
    responseOptions: [
      'Não há diferença, são sinônimos.',
      'Servidor web executa código, enquanto servidor de aplicação serve arquivos estáticos.',
      'Servidor web é para frontend, servidor de aplicação é para backend.',
      'Servidor web é para desenvolvimento, servidor de aplicação é para produção.',
      'Servidor web serve arquivos estáticos, enquanto servidor de aplicação executa código.',
    ],
    correctResponse: 'Servidor web serve arquivos estáticos, enquanto servidor de aplicação executa código.',
    explanation:
      'Um servidor web serve arquivos estáticos (HTML, CSS, JavaScript), enquanto um servidor de aplicação executa código (como Python, Java) para gerar conteúdo dinâmico.',
  },
  {
    questionNumber: 'Questão 04',
    question: 'O que é uma API?',
    responseOptions: [
      'Uma interface de programação de aplicativos que permite a diferentes softwares se comunicarem.',
      'Uma linguagem de programação.',
      'Um banco de dados.',
      'Um protocolo de comunicação.',
      'Um servidor web.',
    ],
    correctResponse: 'Uma interface de programação de aplicativos que permite a diferentes softwares se comunicarem.',
    explanation: 'Uma API (Application Programming Interface) é um conjunto de regras e especificações que permitem que diferentes softwares se comuniquem e troquem dados.',
  },
  {
    questionNumber: 'Questão 05',
    question: 'Qual a função de um banco de dados em uma aplicação backend?',
    responseOptions: [
      'Armazenar o código da aplicação.',
      'Gerenciar o tráfego da aplicação.',
      'Armazenar os dados da aplicação.',
      'Criar a interface do usuário.',
      'Gerar relatórios.',
    ],
    correctResponse: 'Armazenar os dados da aplicação.',
    explanation: 'O banco de dados é responsável por armazenar e organizar os dados de uma aplicação, como informações de usuários, produtos, pedidos, etc.',
  },
  {
    questionNumber: 'Questão 06',
    question: 'Qual a importância da segurança em um sistema backend?',
    responseOptions: [
      'A segurança não é importante para o backend.',
      'A segurança é importante apenas para aplicações financeiras.',
      'A segurança é responsabilidade do frontend.',
      'A segurança é garantida pelo servidor web.',
      'A segurança protege os dados dos usuários e a integridade da aplicação.',
    ],
    correctResponse: 'A segurança protege os dados dos usuários e a integridade da aplicação.',
    explanation:
      'A segurança do backend é fundamental para proteger os dados dos usuários, prevenir ataques como injeção de SQL, XSS e outros, e garantir a integridade da aplicação.',
  },
  {
    questionNumber: 'Questão 07',
    question: 'O que é um framework backend?',
    responseOptions: [
      'Uma biblioteca de funções para facilitar o desenvolvimento frontend.',
      'Uma linguagem de programação específica para backend.',
      'Um servidor web.',
      'Uma estrutura completa para construir aplicações backend.',
      'Um banco de dados.',
    ],
    correctResponse: 'Uma estrutura completa para construir aplicações backend.',
    explanation:
      'Um framework backend fornece uma estrutura e ferramentas para construir aplicações backend, oferecendo componentes pré-construídos, padrões de projeto e outras funcionalidades que agilizam o desenvolvimento.',
  },
  {
    questionNumber: 'Questão 08',
    question: 'Qual a diferença entre HTTP e HTTPS?',
    responseOptions: [
      'HTTP é um protocolo não seguro, HTTPS é um protocolo seguro que utiliza criptografia.',
      'HTTP é seguro, HTTPS não é seguro.',
      'Não há diferença, são sinônimos.',
      'HTTP é para transferência de arquivos, HTTPS é para páginas web.',
      'HTTP é mais rápido que HTTPS.',
    ],
    correctResponse: 'HTTP é um protocolo não seguro, HTTPS é um protocolo seguro que utiliza criptografia.',
    explanation: 'HTTPS (HyperText Transfer Protocol Secure) é uma versão segura do HTTP que utiliza criptografia para proteger a comunicação entre o cliente e o servidor.',
  },
  {
    questionNumber: 'Questão 09',
    question: 'O que é um servidor de banco de dados?',
    responseOptions: [
      'Um hardware onde o banco de dados é armazenado.',
      'Uma linguagem de consulta a banco de dados.',
      'Um software que gerencia o banco de dados.',
      'Um tipo de banco de dados.',
      'Um protocolo de comunicação para bancos de dados.',
    ],
    correctResponse: 'Um software que gerencia o banco de dados.',
    explanation: 'Um servidor de banco de dados é um software responsável por gerenciar e fornecer acesso a um banco de dados.',
  },
  {
    questionNumber: 'Questão 10',
    question: 'Qual a importância da otimização de um backend?',
    responseOptions: [
      'A otimização não é importante para o backend.',
      'A otimização serve apenas para melhorar a velocidade da aplicação.',
      'A otimização é responsabilidade do frontend.',
      'A otimização melhora o desempenho, escalabilidade e eficiência da aplicação.',
      'A otimização é apenas para grandes aplicações.',
    ],
    correctResponse: 'A otimização melhora o desempenho, escalabilidade e eficiência da aplicação.',
    explanation:
      'A otimização do backend é crucial para garantir que a aplicação seja rápida, escalável e eficiente, podendo atender a um grande número de usuários e requisições.',
  },
];

export const pythonTheme: IQuizThemeProps[] = [
  {
    themeName: 'Python',
    questionNumber: 'Questão 01',
    question: 'Qual a principal característica da linguagem Python que a torna popular para desenvolvimento web?',
    responseOptions: [
      'É uma linguagem compilada, o que a torna mais rápida.',
      'Possui sintaxe complexa, exigindo mais linhas de código.',
      'Tem uma sintaxe clara e concisa, facilitando a leitura e escrita do código.',
      'É exclusiva para desenvolvimento web.',
      'Não possui suporte a orientação a objetos.',
    ],
    correctResponse: 'Tem uma sintaxe clara e concisa, facilitando a leitura e escrita do código.',
    explanation: 'A sintaxe do Python é conhecida por ser intuitiva e semelhante à linguagem natural, o que reduz a curva de aprendizado e torna o código mais fácil de manter.',
  },
  {
    questionNumber: 'Questão 02',
    question: 'Qual dos seguintes frameworks Python é mais utilizado para desenvolvimento web?',
    responseOptions: ['NumPy', 'Pandas', 'Matplotlib', 'Django', 'TensorFlow'],
    correctResponse: 'Django',
    explanation:
      'Django é um framework Python de alto nível, poderoso e completo, que segue o padrão Model-View-Template (MVT), facilitando o desenvolvimento de aplicações web complexas e escaláveis.',
  },
  {
    questionNumber: 'Questão 03',
    question: 'Qual o papel do módulo requests em Python?',
    responseOptions: ['Manipular bancos de dados.', 'Criar interfaces gráficas.', 'Realizar cálculos matemáticos complexos.', 'Gerenciar arquivos.', 'Fazer requisições HTTP.'],
    correctResponse: 'Fazer requisições HTTP.',
    explanation:
      'O módulo requests simplifica a criação de requisições HTTP, permitindo fazer chamadas para APIs, baixar arquivos da internet, enviar dados para servidores, entre outras tarefas comuns em desenvolvimento web.',
  },
  {
    questionNumber: 'Questão 04',
    question: 'O que são decoradores em Python?',
    responseOptions: [
      'Funções que modificam o comportamento de outras funções.',
      'Um tipo de variável especial.',
      'Uma forma de criar classes anônimas.',
      'Um tipo de estrutura de controle de fluxo.',
      'Uma forma de importar módulos.',
    ],
    correctResponse: 'Funções que modificam o comportamento de outras funções.',
    explanation:
      'Decoradores são uma forma de adicionar funcionalidade a funções existentes sem modificar o seu código original, permitindo adicionar funcionalidades como logging, autenticação, cache, etc.',
  },
  {
    questionNumber: 'Questão 05',
    question: 'Qual a diferença entre listas e tuplas em Python?',
    responseOptions: [
      'Listas são mais rápidas que tuplas.',
      'Tuplas podem conter apenas números, enquanto listas podem conter qualquer tipo de dado.',
      'Listas são usadas para definir funções, enquanto tuplas são usadas para definir classes.',
      'Listas são mutáveis, enquanto tuplas são imutáveis.',
      'Não há diferença entre listas e tuplas.',
    ],
    correctResponse: 'Listas são mutáveis, enquanto tuplas são imutáveis.',
    explanation:
      'Listas podem ser modificadas após a sua criação (adicionar, remover, alterar elementos), enquanto tuplas são imutáveis, ou seja, seus elementos não podem ser alterados depois que a tupla é criada.',
  },
  {
    questionNumber: 'Questão 06',
    question: 'Para que serve o gerenciador de pacotes pip em Python?',
    responseOptions: [
      'Compilar código Python em código máquina.',
      'Instalar e gerenciar pacotes Python.',
      'Criar ambientes virtuais.',
      'Executar scripts Python.',
      'Depurar código Python.',
    ],
    correctResponse: 'Instalar e gerenciar pacotes Python.',
    explanation: 'O pip é a ferramenta padrão para instalar e gerenciar pacotes Python, que são módulos de código reutilizável que podem ser instalados em seus projetos.',
  },
  {
    questionNumber: 'Questão 07',
    question: 'Qual o papel do módulo os em Python?',
    responseOptions: [
      'Interagir com o sistema operacional.',
      'Manipular bancos de dados.',
      'Criar interfaces gráficas.',
      'Fazer requisições HTTP.',
      'Realizar cálculos matemáticos complexos.',
    ],
    correctResponse: 'Interagir com o sistema operacional.',
    explanation:
      'O módulo os fornece funções para interagir com o sistema operacional, como criar, renomear e excluir arquivos e diretórios, obter informações sobre o sistema, executar comandos do sistema, etc.',
  },
  {
    questionNumber: 'Questão 08',
    question: 'O que é um dicionário em Python?',
    responseOptions: [
      'Uma lista ordenada de elementos.',
      'Uma função que mapeia valores para chaves.',
      'Uma coleção de pares chave-valor.',
      'Uma estrutura de controle de fluxo.',
      'Um tipo de variável especial.',
    ],
    correctResponse: 'Uma coleção de pares chave-valor.',
    explanation: 'Dicionários são estruturas de dados que armazenam pares de chaves e valores, onde as chaves são únicas e os valores podem ser de qualquer tipo de dado.',
  },
  {
    questionNumber: 'Questão 09',
    question: 'Qual a importância da virtualização de ambientes em projetos Python?',
    responseOptions: [
      'Aumentar a velocidade de execução do código.',
      'Reduzir o tamanho dos arquivos de projeto.',
      'Melhorar a legibilidade do código.',
      'Facilitar a criação de interfaces gráficas.',
      'Isolar as dependências de cada projeto, evitando conflitos.',
    ],
    correctResponse: 'Isolar as dependências de cada projeto, evitando conflitos.',
    explanation:
      'Ambientes virtuais permitem criar ambientes isolados para cada projeto, garantindo que cada projeto tenha suas próprias dependências e evitando conflitos entre versões de pacotes.',
  },
  {
    questionNumber: 'Questão 10',
    question: 'Qual a principal diferença entre uma função e um método em Python?',
    responseOptions: [
      'Funções podem ter argumentos, enquanto métodos não.',
      'Funções são definidas fora de classes, enquanto métodos são definidos dentro de classes.',
      'Funções são mais rápidas que métodos.',
      'Métodos são usados para criar classes, enquanto funções são usadas para criar objetos.',
      'Não há diferença entre funções e métodos.',
    ],
    correctResponse: 'Funções são definidas fora de classes, enquanto métodos são definidos dentro de classes.',
    explanation:
      'Funções são blocos de código reutilizáveis que podem ser chamados de qualquer lugar do seu programa, enquanto métodos são funções associadas a objetos e são chamados usando a notação de ponto.',
  },
];

export const javaTheme: IQuizThemeProps[] = [
  {
    themeName: 'Java',
    questionNumber: 'Questão 01',
    question: 'O que é JVM e qual a sua importância no desenvolvimento Java?',
    responseOptions: [
      'É uma linguagem de programação de baixo nível.',
      'É um ambiente de desenvolvimento integrado (IDE).',
      'É um ambiente de execução que permite que programas Java sejam executados em diferentes plataformas.',
      'É um banco de dados relacional.',
      'É uma biblioteca de classes padrão para Java.',
    ],
    correctResponse: 'É um ambiente de execução que permite que programas Java sejam executados em diferentes plataformas.',
    explanation:
      'A JVM (Java Virtual Machine) é um ambiente de execução que permite que programas Java sejam executados em diferentes plataformas, traduzindo o bytecode Java em código nativo para a máquina em tempo de execução.',
  },
  {
    questionNumber: 'Questão 02',
    question: 'Qual é o tipo de dado primitivo em Java que representa um único caractere?',
    responseOptions: ['int', 'char', 'String', 'double', 'boolean'],
    correctResponse: 'char',
    explanation: 'O tipo de dado char é usado para armazenar um único caractere Unicode.',
  },
  {
    questionNumber: 'Questão 03',
    question: 'Qual operador é utilizado para concatenar strings em Java?',
    responseOptions: ['+', '*', '/', '%', '&'],
    correctResponse: '+',
    explanation: 'O operador + é usado tanto para adição numérica quanto para concatenar strings em Java.',
  },
  {
    questionNumber: 'Questão 04',
    question: 'Qual palavra-chave é utilizada para criar um objeto em Java?',
    responseOptions: ['new', 'create', 'object', 'instance', 'class'],
    correctResponse: 'new',
    explanation: 'A palavra-chave new é usada para instanciar um objeto de uma classe.',
  },
  {
    questionNumber: 'Questão 05',
    question: 'Qual é o papel do método main em uma aplicação Java?',
    responseOptions: [
      'É responsável por criar objetos.',
      'É utilizado para realizar cálculos matemáticos.',
      'É usado para definir classes.',
      'É o primeiro método a ser executado.',
      'É utilizado para controlar o fluxo de execução.',
    ],
    correctResponse: 'É o primeiro método a ser executado.',
    explanation: 'O método main é o ponto de entrada de uma aplicação Java. Quando um programa Java é executado, o método main é o primeiro a ser chamado.',
  },
  {
    questionNumber: 'Questão 06',
    question: 'Qual é a diferença entre uma variável local e uma variável de instância?',
    responseOptions: [
      'Não há diferença.',
      'Uma variável local é sempre do tipo primitivo, enquanto uma variável de instância pode ser de qualquer tipo.',
      'Uma variável local é acessível de qualquer lugar no programa, enquanto uma variável de instância só é acessível dentro da classe em que foi declarada.',
      'Uma variável local é declarada dentro de um método, enquanto uma variável de instância é declarada dentro de uma classe.',
      'Uma variável local é criada quando um objeto é instanciado, enquanto uma variável de instância é criada quando o programa é iniciado.',
    ],
    correctResponse: 'Uma variável local é declarada dentro de um método, enquanto uma variável de instância é declarada dentro de uma classe.',
    explanation:
      'Variável local: Existe apenas dentro do bloco de código em que foi declarada (por exemplo, dentro de um método). Variável de instância: Pertence a um objeto e pode ser acessada através de seus métodos.',
  },
  {
    questionNumber: 'Questão 07',
    question: 'Qual é a função da palavra-chave this em Java?',
    responseOptions: ['Referenciar a classe atual.', 'Referenciar o objeto atual.', 'Criar um novo objeto.', 'Chamar um método estático.', 'Encerrar um programa.'],
    correctResponse: 'Referenciar o objeto atual.',
    explanation: 'A palavra-chave this é usada dentro de um método para referenciar o objeto atual sobre o qual o método foi chamado.',
  },
  {
    questionNumber: 'Questão 08',
    question: 'O que é um array em Java?',
    responseOptions: [
      'Uma coleção ordenada de elementos do mesmo tipo.',
      'Uma estrutura de dados não ordenada.',
      'Uma classe que representa um objeto.',
      'Um tipo de dado primitivo.',
      'Um bloco de código que é executado repetidamente.',
    ],
    correctResponse: 'Uma coleção ordenada de elementos do mesmo tipo.',
    explanation: 'Um array armazena múltiplos valores do mesmo tipo em uma única variável.',
  },
  {
    questionNumber: 'Questão 09',
    question: 'Qual é a função do bloco try-catch em Java?',
    responseOptions: ['Criar um novo objeto.', 'Realizar um cálculo matemático.', 'Tratar exceções.', 'Definir uma classe.', 'Encerrar um programa.'],
    correctResponse: 'Tratar exceções.',
    explanation: 'O bloco try-catch é utilizado para tratar exceções, ou seja, erros que podem ocorrer durante a execução do programa.',
  },
  {
    questionNumber: 'Questão 10',
    question: 'Qual é a função da palavra-chave static em Java?',
    responseOptions: [
      'Tornar um membro de uma classe acessível apenas dentro daquela classe.',
      'Tornar um membro de uma classe independente de qualquer objeto da classe.',
      'Tornar um membro de uma classe acessível a partir de qualquer lugar do programa.',
      'Tornar um membro de uma classe final.',
      'Tornar um membro de uma classe abstrato.',
    ],
    correctResponse: 'Tornar um membro de uma classe independente de qualquer objeto da classe.',
    explanation: 'Membros estáticos pertencem à classe e não a um objeto específico. Eles podem ser acessados diretamente através do nome da classe.',
  },
];

export const angularTheme: IQuizThemeProps[] = [
  {
    themeName: 'Angular',
    questionNumber: 'Questão 01',
    question: 'Qual é o principal objetivo do Angular?',
    responseOptions: [
      'Criar interfaces gráficas para aplicativos desktop.',
      'Desenvolver aplicações web de página única (SPA).',
      'Construir APIs RESTful.',
      'Gerenciar bancos de dados relacionais.',
      'Criar jogos 2D e 3D.',
    ],
    correctResponse: 'Desenvolver aplicações web de página única (SPA).',
    explanation:
      'O Angular é um framework JavaScript popular para construir aplicações web dinâmicas e interativas, onde toda a aplicação é carregada em uma única página, proporcionando uma experiência de usuário mais fluida.',
  },
  {
    questionNumber: 'Questão 02',
    question: 'Qual é o componente fundamental do Angular?',
    responseOptions: ['Component', 'Service', 'Module', 'Template', 'Directive'],
    correctResponse: 'Component',
    explanation: 'O componente é a unidade básica de construção em Angular. Ele encapsula uma parte da interface do usuário e sua lógica associada.',
  },
  {
    questionNumber: 'Questão 03',
    question: 'Qual é a função do TypeScript no Angular?',
    responseOptions: [
      'Gerenciar o ciclo de vida dos componentes.',
      'Criar rotas para navegação entre componentes.',
      'Manipular eventos do usuário.',
      'Estilizar os componentes.',
      'Fornecer tipagem estática para o JavaScript.',
    ],
    correctResponse: 'Fornecer tipagem estática para o JavaScript.',
    explanation:
      'O TypeScript é uma superset do JavaScript que adiciona tipagem estática, facilitando a escrita de código mais seguro e escalável. O Angular utiliza o TypeScript como sua linguagem principal.',
  },
  {
    questionNumber: 'Questão 04',
    question: 'Qual é o papel do módulo em um projeto Angular?',
    responseOptions: [
      'Definir as rotas da aplicação.',
      'Manipular o DOM.',
      'Agrupar componentes e serviços relacionados.',
      'Gerenciar os dados da aplicação.',
      'Estilizar os componentes.',
    ],
    correctResponse: 'Agrupar componentes e serviços relacionados.',
    explanation: 'O módulo é um contêiner que organiza os diferentes elementos de uma aplicação Angular, como componentes, serviços e diretivas.',
  },
  {
    questionNumber: 'Questão 05',
    question: 'Qual é a função do decorator @Component?',
    responseOptions: ['Decorar um elemento do DOM.', 'Definir um serviço.', 'Marcar uma classe como um componente.', 'Criar um módulo.', 'Definir uma rota.'],
    correctResponse: 'Marcar uma classe como um componente.',
    explanation: 'O decorator @Component é usado para marcar uma classe como um componente Angular, fornecendo metadados como seletor, template e estilo.',
  },
  {
    questionNumber: 'Questão 06',
    question: 'Qual é a função do data binding no Angular?',
    responseOptions: [
      'Vincular dados de um componente a outro.',
      'Vincular dados de um componente ao DOM.',
      'Vincular dados de um serviço a um componente.',
      'Todas as alternativas acima.',
      'Nenhuma das alternativas acima.',
    ],
    correctResponse: 'Todas as alternativas acima.',
    explanation: 'O data binding permite sincronizar dados entre diferentes partes da aplicação, como componentes e o DOM.',
  },
  {
    questionNumber: 'Questão 07',
    question: 'Qual é o papel do template em um componente Angular?',
    responseOptions: [
      'Definir a lógica do componente.',
      'Estilizar o componente.',
      'Definir a estrutura visual do componente.',
      'Gerenciar os dados do componente.',
      'Criar um serviço.',
    ],
    correctResponse: 'Definir a estrutura visual do componente.',
    explanation: 'O template é a parte do componente responsável pela interface do usuário, definindo a estrutura HTML que será renderizada na página.',
  },
  {
    questionNumber: 'Questão 08',
    question: 'Qual é a função do service em um projeto Angular?',
    responseOptions: [
      'Agrupar componentes e serviços relacionados.',
      'Gerenciar os dados da aplicação.',
      'Definir as rotas da aplicação.',
      'Manipular o DOM.',
      'Estilizar os componentes.',
    ],
    correctResponse: 'Gerenciar os dados da aplicação.',
    explanation: 'O serviço é utilizado para compartilhar dados e lógica entre diferentes componentes, promovendo a reutilização de código e a organização da aplicação.',
  },
  {
    questionNumber: 'Questão 09',
    question: 'Qual é a função do router em um projeto Angular?',
    responseOptions: [
      'Agrupar componentes e serviços relacionados.',
      'Manipular o DOM.',
      'Gerenciar os dados da aplicação.',
      'Estilizar os componentes.',
      'Definir as rotas da aplicação.',
    ],
    correctResponse: 'Definir as rotas da aplicação.',
    explanation: 'O router é responsável por gerenciar a navegação entre diferentes partes da aplicação, definindo as rotas e as componentes que serão exibidas para cada rota.',
  },
  {
    questionNumber: 'Questão 10',
    question: 'Qual é a função do dependency injection no Angular?',
    responseOptions: [
      'Gerenciar o ciclo de vida dos componentes.',
      'Criar rotas para navegação entre componentes.',
      'Injetar dependências em componentes e serviços.',
      'Manipular eventos do usuário.',
      'Estilizar os componentes.',
    ],
    correctResponse: 'Injetar dependências em componentes e serviços.',
    explanation:
      'O dependency injection é um mecanismo que permite que componentes e serviços recebam as dependências de que precisam durante a criação, sem que precisem instanciá-las manualmente.',
  },
];
