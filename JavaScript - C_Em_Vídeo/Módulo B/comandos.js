/*
 Referência em Vídeo - Tipos de Dados e Variáveis 
 Canal: Curso em Vídeo - EP01 (Playlist: JavaScript)
 https://youtu.be/Vbabsye7mWo 

  // COMENTÁRIO // 

 Anteriormente, na última aula do Módulo 1, conhecemos os uso de comandos e suas funcionalidades para diferentes fins.
 Os conceito de notificar uma mensagem "window.alert()", interação de confirmação "window.confirm()" e a verificação de
 análise "window.prompt()" são utilizados em diversas páginas para aprimorar a navegação do usuário, mas a execução desses 
 comandos exige um local para que estas respostas sejam armazenadas e salvas.
 
 Na programação, o uso de comentários permite o fácil entendimento de um código e agiliza a duração de um projeto, destacando-se
 uma comunicação atenta para a formação de uma boa documentação. O uso são representados por símbolos como:
  - " // ": comentário em uma única linha
    - " /* ": comentário com demais linhas

 (obs: Na linguagem JS, se a linha de código possuir apenas um "=" na função, não pode ser interpretado como símbolo comparativo/resultante
  mas sim como a ação de retorno("return") de uma função.

 Abrangendo nosso conteúdo a seguir, os conceitos de variáveis são definidos por marcações que delimitam os objetos e são atribuidos em 
 diferentes contentos, sendo utilizadas para inserir/armaenar/alterar as informações de dados. As variavéis são representadas por:
 "var" (escopo antigo, amplo e menos seguro), "let" (moderno, porém limitado) e "const" (valores fixos / sem alterações). 
 
  ex01)
    var n1 = 5;
    var n2 = 10;
    var n3 = 1;

    function exibirNumeros{
     return `n1: ${n1}, n2: ${n2}, n3: ${n3};
    } 
    console.log((exibirNumeros());
  
  ex02)    
     var s1 = "JavaScript";
     var s2 = 'Pyton';
     var s3 = `Java`;

 O uso de identificadores são essenciais para registrar uma variável, tendo restrições como:
  - pode começar com letras, "$" ou " _ "
  - não pode começar com números
  - pode usar letras ou números
  - pode usar acentos ou símbolos
  - não pode conter espaços
  - não pode possuir palavras reservadas (usadas na própria linguagem)

 E para evitar certos deslizes, aqui estão dicas importantes como:
  - maiúsculos e minúscos fazem a diferença 
  - tente denominar as variáveis com nomes coerentes
  - evite se tornar o "programador alfabeto / contador" ( "abcd ou 1234")
  
 Graças a essas dicas e instruções, a funcionalidade das varáveis acontecem de forma correta e são 
 aplicadas para diferentes tipos de declarações:
 
  Data Types: TypeOf() 
    numbers
      conceitos internos:
        - infinity
        - NaN (not an number)
      - números inteiros "int" : 5, 10, 20, 30...1.000.000.000
      - números reais "float": 3.14, 0.5, 98.9, 100.6...
    strings
      - literal: "google", "maria", 'javascript', 'abc'....
    boolean
      - true ou false
    null / undefined
    object
      conceito interno
        - array
    function
*/

/*
 Referência em Vídeo - Manipulação de Dados
 Canal: Curso em Vídeo (Site) - EP02 (Playlist: JavaScript)
 https://youtu.be/OJgu_KCCUSY

 // COMENTÁRIO //

 Na aula anterior, fomos apresentados aos comandos que constituem a lingugagem, seus tipos de dados, o armazenamento de dados e e etc.
 Nesta aula, os tipos de datas que serão abordados através desse módulo e como serão aplicados em estruturas são os "numbers" e as "strings". Além disso,
 será explicado como funciona o processo de salvar e guardar informações através do comando "prompt" (específico para retornar a entrada de um usuário).

 Usando o exemplo da funcionalidade do comando prompt, se a proposta da página for obter uma interação dinâmica com o usuário, é possível utilizar dos mecanismos 
 dessa ação para certificar uma captura de dados e retornar-lo conforme o desejado, por exemplo:
  ex)
    var n = window.prompt("escreva seu nome");
      alert('prazer conhecer-lo, ' + n);
       - o uso do sinal "+" serve para somar numerais e unificar (concatenar) strings.

  ex - sem as especificações:
    var n1 = prompt('escolha um N')
    var n2 = prompt('escolha outro N)
    var soma = alert('soma de n1 + n2 é: ' + n1 + n2)
      - o resultado apresentado é a adição da string + número, não efetuando a soma.

 Quando possui um documento que abrange uso de strings e números no mesmo comando, a interpretação feita pela linuguagem interefe na lógica executada,
 necessitando converter especificações para cada área selecionada pelo usuário. Deste modo, a execução da conversão entre letras e números é direcionada,
 respectivamente, às suas descrições.

  String -> Numbers ( '->': "para" )
    Number.parseiInt(n) ou "parseInt"
      - número '->' número inteiro
    Number.parseFloat(n) ou "parseFloat"
      - número -> número real/decimal 
    Number(n) ou "number"
      - uso diverso para números gerais (intreiros, reais e etc)
  Número -> String
    String(n) ou "string" 
      - usada para definir strings
    n.toString() ou "toString"
      - conveter -> uma string
 
 Também podemos usar diferentes comandos, como por exemplo:
  ex)
    - document.write() (escreve conteúdo diretamente no html)

 Dando importância para a engrenagem, a nova versão do ECMAScript possibilita a ágil formatação e configuração de strongs e números.
  ex)
        var s = 'javaScript'
          - "estou aprendendo s" = (não faz interpolação)
          - "estou aprendendo " + S = (usa concatenação)
          - "estou aprendendo ${S}" = (usa template string)
            - " ${S} = Template String"
          - S.length (indica quantas letras a string possui)
          - s.toUpperCase() = (maiúsculas)
          - s.toLowerCase() = (minúsculas)

    ex)
        var n1 = 1543.1
          - n1.toFixed(2) = (usado para converter os pontos -> vírgulas em diferentes posições) 
          - n1.toLocalString('pt-BR', {style:'currency', 
              currency:'BRL'})
*/

/*
 Referência em Vídeo - Operadores Artiméticos
 Canal: Curso em Vídeo (Site) - EP03 (Playlist: JavaScript)
 https://youtu.be/hZG9ODUdxHo

  // COMENTÁRIO //
 O conteúdo apresentado anteriormente retrata sobre a manipulação de dados sob controle de um comando na linguagem js, além da forma de converter formatações
  para diferentes conceitos e o uso de sinais (artiméticos) que influenciam na leitura de uma ação. Contudo, o uso das operações são essenciais para efetuar registros,
  incorporando diferentes tipos de sinais na construção de um código. Como exemplo:
    ex) 
      Operadores:
        - Aritméticos
        - Atribuições
        - Relacionais 
        - Lógicos
        - Ternário
        - Unário = (TypeOff)          

 Os operadores aritméticos são usados para efetuar cálculos matemáticos, operados por números ou valores convertidos em núemeros, 
 e retornam o resultado da operação.
  Os símbolos aritméticos (operantes) por números binários são..:
    - " + " = adição
    - " - " = subtração
    - " * " = multiplicação
    - " / " = divisão (real)
    - " % " = módulo (inteira / resto)
      ex) " > " - resto
        5 / 2 = 2
        5 - 4 = 1
          5 / 2 > 1  

    - " ** " = potenciação 

 O uso dessas operações pode apresentar erro dependendo da forma em que a estrutura lógica foi monatada, notificando ao desenvolvedor, 
 falha de código devido o termo sintático. Durante o desenvovlmento em um programa, pode haver situações em que não apresente um erro sintático
 devido sua lógica, mas provávelmente por sua interpretação e execução do código. 
  
 Em diferentes linguagens de programação, a ordem de precedência dos operadores aritméticos funcionam da seguinte forma:
  
  - Ordem de Precedência (O. Aritméticos)
    - " () " = 1°
    - " ** " = 2° 
    - " * ", " / ", " % " = 3º (se houver +1, sempre começa pela esq -> dir)
    - " + ", " - " = 4º 

    ex)
      - 5 + 3/ 2 = 6.5
        ex) 
          3 / 2 = 1.5 
          5 + 1.5 = 6.5

      - (5 + 3) / 2 = 4
        ex)
          5 + 3 = 8
          8 / 2 = 4          
 
 A aplicação de uma Atribuição Simples compõe diferentes operadores em cálculos, sempre baseados em na concatenação e 
 de atribuição ("+" e "=").
  ex) // -> resultado final

  var a = 5 + 3  // (8)
  var b = "a" % 5  // (3)
     (8 / 5 = 1)
        (8 - 5 = 3)
  var c = 5 * b ** 2  // (45)
     (3 ** 2 = 9)
        (5 * 9 = 45)
  var d = 10 - a / 2  // (6)
      (8 / 2 = 4) 
        (10 - 4 = 6)
  var e = 6 * 2 / d  // (2)
      (6 * 2 = 12)
        (12 / 6 = 2)
  var f = b % e + 4 / e  // (3) 
    (3 % 2 = 1)
      (4 / 2 = 2)
          (1 + 2 = 3)

 Idém, para solucionar os cáculos usando as atribuições, são as Auto-Atribuições, formas que atualizam o valor de uma variável combinando
 operadores matemáticos (com o operador de atribuição "=") para simplificar operações que envolvem a própria variável.
  ex)
      var n = 3;
        n = n + 4; // (n = 7)
      n = n - 5; // (n = 2)
        (7 - 5 = 2) 
      n = n * 4;  // (n = 8)
        (2 * 4 = 8)
      n = n / 2;  // (n = 4) 
        (8 / 2 = 4)
      n = n ** 2  // (n = 16)
        (4 ** 2 = 16)
      n = n % 5  // (n = 1)
        (16 % 5 = 1)

  E você pode simplificar uma atribuição, sem exigir todo esforço para declarar e salvar uma variável. A maneira de auto-referência de simplificações 
  só pode ocorrer caso se ela for representar a mesma variável (var):
    ex)
      var n = 3;
      n += 4;
      n -= 5;
      n *= 2;
      n /= 4;
      n **= 3;
      n %= 16;

 Também é utilizado o Incremento, operações aplicadas para aumentar ou diminuir valor de variáveis. Possuem diferentes funconalidades em
 situações das quais necessitam de ajuste repetidamente.
  ex)
    Pós-Incremento
      var x = 5
        x += 2; // x++ / ++x
          (x = 7)
    Pré-Incremento    
        x -= 1; // x-- / --x
          (x = 6)       
*/

/*
 Referência em Vídeo - Operadores Artiméticos (Parte 2)
 Canal: Curso em Vídeo (Site) - EP04 (Playlist: JavaScript)
// https://youtu.be/BP63NhITvao 

  // COMENTÁRIO // 

 Seguindo os aprendizados da aula anterior, esta aula apresenta a continuação sobre o conceito debatido, dando continuiade aos demais operadores existentes nessa linguagem.
 Dentre diferentes conceitos, os Relacionais são rlacionados ao uso de ações comparativas para determinar valores e a relação entre eles. O retorno dessa ação resulta em um 
 valor booleano "ifElse" ('true or false'), de acordo com o comando. Os sinais são representados por:
    ex)
      " > " = maior que 
      " < " = menor que
      " >= " = maior ou igual a 
      " <= " = menor ou igual a
      " == " = equivalentes / igualdade
      " != " = diferente 
 
 Os relacionais também possuem identidade. Na linguagem, quando possui números iguais mas com diferenes detalhes,
 o programa verifica o valor exibido sem determinar o tipo de resultado (mesmo sendo convertido) através do sinal de atribuição,
 do qual não condena o tipo de valor mas retorna a grandeza que a solução abrange.
 Contudo, o conceito abrange a diferenciação dos operadores da classe Identidade, definida também como "Operador de Igualdade Restrita".
 Este operador possui 3 sinais de atribuição (===) e são utilizados para determinar se são idênticos comparados 
 ao mesmo valor e ao mesmo tipo.     
  ex)
    5 == 5 -> true
    5 == "5" -> true
    5 === '5' -> false
    '5' === '5' -> true
    5 !== '5' -> false

 Os Operadores Lógicos são usados para combinar ou inverter expressões booleanas, permitindo
 a criação de condições complexas em estruturas de laços ("if" / "while" / "for").
  ex)
    " ! " -> negação (Operador Unário)
        - true -> false
        - false -> true 
    " && " -> conjunções (ou "e" lógico) (Op. Binário)
      - true && true -> true 
      - true && false -> false
      - false && true -> false
      - false && false -> false 
    " || " -> disjunções (ou "ou" lógico) (O. Binário)
      - true || true -> true
      - true || false -> true
      - false || true -> true
      - false || false - false  
      
 Se houver, em uma junção, variáveis com operadores aritméticos, relacionais, incrementais e lógicos.
 Eles serão interpretados da seguinte forma:
    - Operadores Lógicos
      - Ordem: 
      - !
      - &&
      - ||
      
 Exemplos que representam o que foi apresentado:
  ex)
    id >= 15 && id <= 17 // a idade é entre 15 e 17?
    estado == 'RJ' || estado == 'SP' // é RJ ou SP?
    sal > 1500 && sex != 'M' // o salário é acima de 1500 e não é homem?

 Após analisar todos os tipos executáveis de operadores, os sinais que compõem a Ordem de Precedência são adicionados e 
 podem ser interpretados da seguinte forma:
  Tipos de Ordem
    - Op. Aritméticos 
      - " () " = 1°
      - " ** " = 2° 
      - " * ", " / ", " % " = 3º (se houver +1, sempre começa pela esq -> dir)
      - " + ", " - " = 4º 
    
    - Op. Relacionais (da esq -> dir)
      " > " = maior que 
      " < " = menor que
      " >= " = maior ou igual a 
      " <= " = menor ou igual a
      " == " = equivalentes / igualdade
      " != " = diferente
    
    - Op. Lógicos
      - !
      - &&
      - ||
      
 O Operador Ternário possui dois símbolos presentes em uma mesma função, o operador possui esse nome por escrever uma expressão
 condicional usada para atribuir valores com base em condições:
  
  - " ? " -> Representa condição
  - " : " -> Separa o valor do caso verdadeiro -> o caso falso
    ex)
      teste " ? " true " : " false 

*/  