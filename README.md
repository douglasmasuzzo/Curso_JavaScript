# **Curso JavaScritp** #

--------------------------------------------

## Descrição ##

Este diretório reúne os materiais de estudo, anotações e exercícios desenvolvidos durante o acompanhamento do curso "JavaScript – Curso em Vídeo", ministrado por Gustavo Guanabara. O conteúdo armazenado tem como objetivo consolidar os conceitos fundamentais da linguagem JavaScript, combinando teoria e prática por meio de exemplos progressivos, códigos comentados e pequenos experimentos realizados ao longo do curso.

## Objetivo ##
- Organizar os materiais produzidos durante o curso
- Registrar a evolução do aprendizado em JavaScript
- Praticar conceitos fundamentais da linguagem
- Servir como base de consulta futura
- Apoiar o desenvolvimento de projetos mais avançados

--------------------------------------------------------------

### _Conteúdos Abordados_ ###
  - Introdução ao JavaScript
  - Sintaxe básica
  - Variáveis e tipos de dados
  - Operadores
  - Estruturas condicionais
  - Estruturas de repetição
  - Funções
  - Arrays
  - Manipulação *DOM* ( Document Object Model )
  - Interação com usuário

### _Comandos da linguagem_ ###

  - _Declaração de variável_
    - ``` let ``` ( _bloco_ ) 
    - ``` const ``` ( _fixo_ )
    - ``` var ``` ( _global / function_ )
   
  - _Tipos primitivos_
    - ```
        let nome = "pessoa";
        let status = true;
        let ano = 2019;
      ```
      
  - _Operadores_
    - ``` let somaTotal = ( A + B + C ) / 3; console.log( somaTotal ); ```    
   
  - _Estrutura Condicional_
    - ```
        if ( idade < 17 ) {
          console.log( "Adolescente" );
        } else {
          console.log ( "Adulto" );
        } 
       ```
      
  - _Estrutura de Repetição_
    - ```
        for ( let i = 0; i < 5; i++ ) { console.log( i ); }
      ```
   
  - _Functions_
    - ```
        function somar( A , B ){ return A + B; }
      ``` 
   
  - _Manipulação de String_
    - ```
       let nome = " JavaScript "; console.log( nome.toUpperCase() );
      ``` 
   
  - _Arrays_
    - ```
        let numbers = [ 0 , 1 , 2 ]; numbers.lenght;
      ``` 
   
  - _Objeto_
    - ```
        let pessoa = { nome = "ABC" , idade : 20 }; console.log( pessoa );
      ```  
   
  - _Manipulação DOM_
    - ``` document.getElementById() ```
    - ``` document.querySelector() ```
    - ``` .innerHTML ```
    -  ``` addEventListener() ```
   
  - _Interação com usuário ( I/O )_
    - ``` let preco = window.prompt( " INFORME UM VALOR " ); window.alert( `PREÇO : ${ preco }` ); ```
   
### _Uso em outros projetos_ ###

  - Projetos Front-End
    * [ **Gerenciamento de Senhas** ]( https://github.com/douglasmasuzzo/Projetos_Ferias/tree/main/Projeto%20-%20Ger.%20de%20Senhas ) 
  - Consumo de API's e Integração com Back-End 
    * [ **DataBase Curso** ]( https://github.com/douglasmasuzzo/Projetos_Ferias/tree/main/Projeto%20-%20DataBase_Curso )

------------------------------------------------------------------------------

## **Considerações Finais** ##

Este diretório possui caráter educacional e acadêmico, sendo destinado exclusivamente ao estudo e prática da linguagem JavaScript. Ele documenta o processo de aprendizagem e serve como referência contínua para revisões futuras.
