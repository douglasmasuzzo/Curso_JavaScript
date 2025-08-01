
/*
 Referência em Vídeo - Estruturas de Repetição
 Canal: Curso em Vídeo ( site ) - EP01 ( Playlist: JavaScript ) 
 https://youtu.be/5rZqYPKIwkY

  // COMENTÁRIOS //

 O conteúdo de estruturas de repetição apresenta o funcionamento de laços de repetição, explicando como executar blocos de código
 de forma automática e controlada, economizando linhas de programação e permitindo a execução de tarefas repetitivas. O conceito do
 funcionamento de estruturas de repetição define-se ao processo de executar um bloco de código, que inicie uma ação, e continue em atividade 
 até o fim de sua execução. Para isto, exiga-se de uma condição que possibilite a execução de tarefas para tal finalidade. 
 
 - sequência
 - condição 
 - repetições / laço 

 ex) 

  -> function comerPizza() {
   - pegar um prato
   - comer a 1ª fatia
   - comer a 2º fatia
   - comer a 3º fatia...
   - comer a última fatia
  }

  -> function comerPizza(){
    -> while ( fatias > 0 ){
      - pegar um prato
      - comer fatia
      - comer outra fatia..
    }
  }
      
  -> do {
    - pegar um prato
      - comer fatia
       - comer outra fatia...
  } while ( fatia > 0 );

  -> while (enquanto):
   - Executa o bloco de código enquanto a condição for verdadeira. Nomeado 
   como: Estrutura de Repetição com Teste Lógico no Início 

  -> do...while (faça enquanto):
   - Executa o bloco ao menos uma vez, e depois continua enquanto a condição for verdadeira.

  -> for (para):
   - Permite definir uma variável de controle, a condição de parada e o incremento, tudo na mesma linha de comando, facilitando o controle do número de repetições.

 Além disso, o vídeo apresenta exemplos práticos e simulações para mostrar como cada estrutura funciona em situações
 do dia a dia da programação. A explicação visual ajuda a entender os fluxos de execução, especialmente para iniciantes.
 O objetivo é familiarizar o estudante com o conceito de loop, mostrando a importância dessas estruturas na automatização
 de processos repetitivos e na construção de algoritmos mais eficientes.
*/

/*
 Referência em Vídeo - Estrutura de Repetição ( PARTE 2 ) 
 canal: Curso em Vídeo ( site ) - EP02 ( Playlist: JavaScript )
 https://youtu.be/eX-lkN_Zahc

  // COMENTÁRIOS //

  A segunda parte do conteúdo de estruturas de repetição aprofunda o entendimento sobre laços de repetição,
  apresentando exemplos práticos e explicações detalhadas sobre como utilizar essas estruturas de forma eficaz.

  Durante a primeira parte do vídeo, foi apresentado o modelo de estrutura de repetição por sequências que executa blocos de códigos 
  para cumprir com tais funcionalidades, essas funcionalidades são aplicadas por uma ordem sequencial, do início ao fim. 
  As estruturas condicionais apresentam múltiplas opções de execuções durante sua operação, o processo de funcionamento é determinado por 
  uma verificação que define determinada ação seja realizada de acordo com a condição estabelecida. 
  A estrutura " for " é uma Estrutura de Repetição com Variável de Controle, nele, você define a inicialização,
  o teste lógico e o incremento, tudo em uma única linha de comando. Do qual realiza os processos seguindo as ordens pré-estabelecidas,
  executando o bloco de código até que a condição final seja alcançada.

  ex)

  for ( var cont = 1; cont <= 10; cont++ ){
    console.log(cont);
  }

  -> var cont = 1 
    - inicialização da variável 
  -> cont <= 10
    - teste lógico ( condição )
  -> cont++
    - incremento ( cont = cont + 1 )  
*/

/*
 Referência em Vídeo - Exercícios de Estruturas de Repetição
 canal: Curso em Vídeo ( site ) - EP03 ( Playlist: JavaScritp )
 https://youtu.be/6tyHypeY4-8 - Exercício ( parte 1 )
 https://youtu.be/oMNbc_LFz8w - Exercício ( parte 2 ) 


  // COMENTÁRIOS //

  O conteúdo de exercícios de estruturas de repetição apresenta uma série de desafios práticos que podem ser aplicados
  em situações do dia a dia. O primeiro exercício utilizará dos elementos mencionados em conteúdos anteriores, do qual desenvolve  
  a funcionalidade de uma página web que faz a iteração do HTML + JS com o uso iterativo do usuário.
  Já o segundo exercício, você precisa desenvolver uma função que calcule a tabuada do número selecionado, independentemente do 
  sinal deste valor, o programa deve incluir os memsmo elementos dos demais exercícios e suas funcionalidades. 
*/
