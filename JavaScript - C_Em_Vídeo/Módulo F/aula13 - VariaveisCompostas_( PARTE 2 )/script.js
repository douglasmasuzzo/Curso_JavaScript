let valores = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let valor = valores.indexOf( 30 );

if ( valor === -1 ) {
    console.log("Não encontrado");
} else {
    console.log("INDEX: " + valor );
} 
/*
    ex - PARTE 1 
     let valores = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        for ( let i in valores ) {
            console.log( valores[ i ] );
        }

    ex - PARTE 2 
     let valores = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

     for ( let i = 0; i < valores.length; i++ ){
     console.log("A posição " + i + " tem o valor: " + valores[ i ]);
     }

    ex - PARTE 3
     let number = [ 0, 1, 2, 3, 4 ];
    
     for ( let i = 0; i <= number.length; i++) {
         console.log( number[ i ] );
     }

    ex - PARTE 4
     let number = [ 4, 2, 5, 3, 9, 2, 0 ];
     number.sort();
     number.push(1);
     console.log(`Quantidade de elementos: `${number.length}`);
     console.log("O primeiro valor do vetor: " + number[0]);
*/
