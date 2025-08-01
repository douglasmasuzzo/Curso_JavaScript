/*
 Referência em Vídeo - Variáveis Compostas ( PARTE 1 ) 
 canal: Curso em Vídeo ( site ) - EP01 ( Playlist JavaScript )
 https://youtu.be/XdkW62tkAgU

  // COMENTÁRIOS // 

 Antes de compreender o contexto, conceito e fundamentos sobre o uso de variáveis compostas na linguagem de programação,
 necessitamos entender quais são as características que a diferencia da varíavel simples. Como reforçado durante todo o 
 desenvolvimento do curso, as Variáveis Simples só podem armazenar um valor por vez, podendo receber mutações de acordo 
 com a necessidade de um código.
 Entretanto, a funcionalidade das variáveis compostas conseguem armazenar diferentes valores em uma única estrutura, sem 
 dificuldade de preservar os valores descritos. Contudo, ARRAYS / VETORES viabilziam o uso de múltiplos valores ao mesmo 
 tempo, sem perder a fidelidade e funcionalidade dessas variáveis.

 Em um exemplo prático, posssuímos um código que representa um estacionamento com determinados números de vagas para os veículos,
 e neste contexto, cada veículo ocupa um espaço consequentemente. Ao codifica-lo, o desenvolvedor tem a missão de otimizar a
 seleção destas vagas sem complexar o bloco de código, aplicando os conceitos de variáveis compostas com definição de índices 
 para obter agilidade durante a construção do código
 
    ex - VARIÁVEL SIMPLES  
     var a1
     var a2
     var a3
     var a4
     var a5
 
    ex - VARIÁVEL COMPOSTA 
     var vagas = [ , , , ]; 
     - vagas = conjunto de vagas ( arrays )
     - " , " = alocação entre os índices ( elementos )
     - " [ ] " = locais ondes as variáveis serão lidas

    " Um ARRAY / VETOR / VARIÁVEL COMPOSTA é uma variável que possui vários elemento, 
     e esses elementos possuem um valor e uma chave de identificação ( index ) " ( GUANABARA ) 

     Quando você precisa adicionar uma elemento em um índice que não é definido, você pode diferentes
     formas de incremento ao criar um valor para um específico espaço.

    ex - FORMA PRÁTICA 
     - let number = [ 0, 1, 2 ];
      -> number[ 3 ] = 3;
      
    ex - FORMA EXPLÍCITA 
     - let number = [ 0, 1, 2 ];
      -> number.push( 3 )w

    - COMANDOS APLICÁVEIS EM JAVASCRIPT
     -> number[] = valor adicionado + elementos criado 
     -> number.push() = inserir um elemento no índex
     -> number.length = analisa a medida dos elementos de um array
     -> number.sort() = classifica os valores do índex sob ordem crescente
     -> in = visualiza os elementos pertencentes ao array

 Ao utilizar os conceitos de Estrutura de Repetição com os valores de Variáveis Compostas, é possível manipular um array
 repetidamente enquanto o laço não é quebrado. O conceito nomeado de " PERCURSO DE PERSEGUIÇÃO " do vetor é construído 
 da seguinte forma:

    -> let number [ 0, 1, 2, 3, 4];
    -> for ( let i = 0; i < number.length(); i++ ){
      - console.log( number[ i ] ); 
    }

 Porém, se você deseja obter mais agilidade e reduzir processos, recomenda-se 
 utilizar outro modo de repetição. O conceito " IN " abrange a existência pertencente 
 àquele objeto, sendo visualizado dentro dos elementos :

   -> for ( let i in number ){
      console.log ( number );
   }

 Além disso, é possível buscar os valores internos do index, exigindo ao sistema que ele verifique onde
 o valor está inserido no elemento, retornando o local presente do index. Ao verificar um valor do qual não 
 está presente, o sistema corresponde apresentando um valor negativo, que afirma não ter encontrado a 
 localização do index;

   - COMANDO 
      -> number.indexOf();
*/

/*
 Referência em Vídeo - Variáveis Compostas ( PARTE 2 )
 Canal: Curso em Vídeo ( site ) - EP02 ( Playlist: JavaScript ) 
 https://youtu.be/mc3TKp2XzhI
 
  // COMENTÁRIOS //

 Dando continuidade ao conteúdo anterior, esta aula prossegue com os ensinamentos dos conceitos mencionados
 anteriormente com a aplicação de funções, sem distrinchar os retornos de parâmetros funcionais e demais 
 fundamentos sobre uma linguagem que abragem contextos funcionais. 

  - ex 
   -> chamada
   -> conjunto de parâmetros
   -> ação
   -> retorno

  - funções
   -> ações executadas que ocorrem automaticamente 
      decorrentes a um específico evento
   -> pode receber parâmetros e retornar resultados
   
  - exemplo
    -> let verificar = parImp( 20 );
    -> function parImp( num ){
      if ( num % 2 == 0 ){
        return par;
      } else {
        return impar;
      }
   }
*/

/*
 Referência em Vídeo - Variáveis Compostas ( EXERCÍCIOS ) 
 Canal: Curso em Vídeo ( site ) - ( Playlist: JavaScript )
 https://youtu.be/vEOEZ03ZyiE - ( EP03 - PARTE 1 )
 https://youtu.be/slLoLLCd-k0 - ( EP04 - PARTE 2 )


  // COMENTÁRIOS //

  Este episódio é dedicado a resolução de exercícios utilizando dos conceitos de Arrays e Functions
*/

/*
 Referência em Vídeo - Próximos Conteúdos 
 curso: Curso em Vídeo ( site ) - EP05 ( Playlist: JavaScript )
 https://youtu.be/roP93FA-NgU

  // COMENTÁRIOS //

 A trajetoria de aprendizagem percorrida até o momento autal, apresentou os conhecimentos básicos que 
 constituem a metodologia desta linguaguem de progrmação, navegando entre diversos tópicos como: 

  -> fundamentos
   - origem
   - funcionamento / evolução

  -> variáveis simples e dados
   - tipos de variáveis
   - uso de dados / tratamento de dados

  -> operadores
   - aritméticos
   - lógicos
   - relacionais
  
  -> condições
   - condições simples
   - condições compostas
   - condições alinhadas

  -> laços de repetições
   - enquanto ( while )
   - faça - enquanto ( do while ) 
   - para ( for )

  -> variáveis compostas 
   - arrays / vetores

  -> functions
   -
  -> DOM
   - manipulação por website / inspeção 
   
  Contudo, apesar dos conteúdos apresentados, existem mais materiais que serão utilizados para dar
  continuidade aos estudos, explorando diferentes áreas e expandindo os níveis de conhecimentos. 
  Os métodos de aprendizagem recomendados são:  

  -> functions
  -> objetos
  -> modularização
  -> RegEx 
  -> JSON
  -> AJAX 
  -> NodeJS
  -> ANGULAR
  
  O conceito de Programação Orientada à Objetos em JavaScript possui alguns fundamentos que constituem 
  este tópico, do qual pode ser utilizado em diversas linguagens, de forma prática e eficiente. 
  Um objeto é uma coleção de informações organizadas por classes, permitindo a representação de entidades 
  de forma estruturada. A declaração de um objeto em JS ocorre da seguinte forma

    ex
     let num = [];
    
     -> let carro = { 
        nome: "",
        marca: "",
        origem: "",
        modelo: "",
        multas( multa > 0 ):{
         console.log( multa )
         this.mutas += multa;}
        }

        carro.multas();
        console.log( carro.nome; carro.marca; carro.mutas );
      }

    -> 

    " a linguagem interpreta o Array e o Objeto como estrutura da mesma classe, 
    que possuem a mesma origem "
*/