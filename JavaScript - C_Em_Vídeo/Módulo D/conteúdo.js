/*
 Referência em Vídeo - Condições ( PARTE 1 )
 Canal: Curso em Vídeo ( site ) - EP01 (Playlist: JavaScript)
 https://youtu.be/cOdG4eACN2A

    // COMENTÁRIO // 

  Dentre os demais conteúdos apresentados, o 11º conteúdo vai apresentar os funcionamentos
 das estruturas condicionais em funções direcionadas, especialmente as estruturas condicionais 
 simples. Os blocos de códigos foram aplicados através de sequências, comandos que são projetados 
 por etapas que descrevem uma ação.
 
    ex)
     - var n = 3
       -> n += 2 
         -> window.alert(n)
         
  As estruturas servem para controlar o fluxo de um programa, permitindo que os mecanismos sejam 
 executáveis por condições determinadas sobre valores booleanos ( true or false ). A condição simples
 avalia se os requisitos de um bloco são verdadeiros, caso contrário, o funcionamento executará de 
 forma ordenada. Fazendoa leitura dos fluxosgramas de códigos, os comandos são interpretados como:

    fluxograma:
     - losangulo = condição ( if )
      - entrada de dados = executado por uma função 
       - entrada de dados = executados por uma condicional oposta ( else )
        - saída de dados = ação realizada pela condição final

    tipo de condição simples:
      if ( a > b ) {
        - leia a 
      }   

    tipos de condição composta
     if ( a > b ) {
        - leia a 
     } else {
        - leia b 
     }
*/

/*
 Referência em Vídeo - Condições ( PARTE 2 )
 Canal: Curso em Vídeo (SITE) - EP02 (Playlist: JavaScript)
 https://youtu.be/EEStcIe8rAM

  // COMENTÁRIOS //

  Dando continuidade ao conteúdo anterior, a segunda parte do conteúdo de " Condicções Simples e Compostas "
 observa-se que a utilização de estruturas condicionais servem para diferentes finalidades, tendo o funcionamento
 de comandos e execuções de ações aplicadas em diferentes contextos. Um exemplo prático dessa junção de diversas 
 condções chama-se de " Condições Aninhadas ", onde uma condição é aplicada dentro de outra, permitindo que o código seja
 executado de forma mais complexa. Essa estrutura é utilizada para criar lógicas mais elaboradas, onde as condições
 são interligadas e dependem das demais condições.

   A condição é representada por um losango, onde a condição é avaliada e o fluxograma segue para o caminho verdadeiro ou falso.
   o comando é executado da seguinte maneira, por exemplo:
   
      - if ( condição 1 ) {
          - bloco de código 1 
      } else {
          - if ( condição 2 ) {
              - bloco de código 2 
          } else {
              - bloco de código 3 
          }
   
   Exemplo:

      var idade = 18;

      if ( idade > 18 ) {
        console.log('você pode votar')
      } else if ( idade == 65) {
        console.log('você pode votar volutariamente');
      }
        
      var now = new Date();
      var hora = now.getHours();
        console.log(`São ${hora} horas`);
      
      if ( hora < 12 ) {
        console.log('Bom dia!');
      } else if ( hora < 18 ) {
        console.log('Boa tarde!');
      } else {
       console.log('Boa noite');
      }

   Além da Condição Aninhada, existem outros tipos de condições que podem ser aplicadas, 
   como a condição de múltiplas alternativas ( SWITCH CASE = CASO ESCOLHA ). Esta condição 
   é utilizada para avaliar uma variável e exevutar um bloco de código específico com base
   no valor desta variável. A estrutura do SWITCH CASE é semelhante a uma série de if-else, mas
   é mais legível e organizada, especialmente quando há várias opções a serem avaliadas.
   
    A estrutura do SWIFT CASE é a seguinte:

      - switch ( expressão ) {
          -> case valor 1 :
              -> bloco de código 1;
              -> break;}
          -> case valor 2:
              -> bloco de código 2;
              -> break;
          -> case valor 3:
              -> bloco de código 3;
              -> break;
          -> default;

   Exemplo 

      var now = new Date();
      var Semana_Dia = now.getDate();
      Semana_Dia = 0;

         - switch ( Semana_Dia ) {
            -> case 0:
                -> console.log('Domingo');
                -> break;
            -> case 1:
                -> console.log('Segunda');
                -> break;
            -> case 2:
                -> console.log('Terça');
                -> break;
            -> case 3:
                -> console.log('Quarta');
                -> break;
            -> case 4:
                -> console.log('Quinta');
                -> break;
            -> case 5:
                -> console.log('Sexta');
                -> break;
            -> case 6:
                -> console.log('Sábado');
                -> break;
            default:
                -> console.log('[ERRO] Dia inválido!')
                -> break;
         }

          console.log("Hoje é " + Semana_Dia);
    

      var agora = new Date();
      var dia_Semana = agora.getDate();

      int diaSem[] = new Int[7];
      diaSem[0] = "Domingo";
      diaSem[1] = "Segunda";
      diaSem[3] = "Terça";
      diaSem[4] = "Quarta";
      diaSem[5] = "Quinta";
      diaSem[6] = "Sexta";
      diaSem[] = "Sábado";

      console.log(diaSem[dia_Semana});

*/

/*
 Referência em Vídeo - Exercícos de Condições
 Canal: Curso em Vídeo (SITE) - EP03 (Playlist: JavaScript)
 https://youtu.be/b2K7eo5Jdj8 -> Exercício ( parte 1 )
 https://youtu.be/UXSWgnbSHxs -> Exercício ( parte 2 )
 https://youtu.be/f5es-PpaUI8 -> Exercício ( parte 3 ) 

  // COMENTÁRIOS //

  O terceiro conteúdo do módulo de " Condições Simples e Compostas " apresenta uma 
  série de exercícios práticos que podem ser aplicados em situações do dia a dia. 

  O 1º exercício apresentou a forma construtiva de um site, sendo um projeto arquitetado 
  com a utilização do escopo do site ( HTML ), a parte de navegação ( JS ) e a estilização
  ( CSS ). O modelo apresentado será utilizado como base para futuros exercícios, possuindo 
  o mesmo objetivo e estruturação.

  A estrutura do exercício é formado por:

     - HTML ( Hyper Text Markup Language ) - Estruturação do site
        -> head
          - metadados
          - link href
          - title
        -> body 
        -> header
        -> div
          - input
          - type
          - id 
        -> section
        -> footer

      - CSS ( Cascading Style Sheets ) - Estilização do site
        -> body
         -> background
         -> color
         -> font 

        -> header
          -> color
          -> text-align

        -> section
          -> background
          -> border radaius
          -> padding
          -> margin 
          -> width
          -> bow shadow

        -> footer
          -> font-style
          -> text-align
          -> color

      - JS ( JavaScript ) - Lógica do site
        -> function
        -> document.getElementById().value
        -> document.getElementByName;
        -> innerHTML 


*/
