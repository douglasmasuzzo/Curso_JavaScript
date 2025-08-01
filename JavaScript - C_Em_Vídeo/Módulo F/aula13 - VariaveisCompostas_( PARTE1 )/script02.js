// RECURSIVIDADE 

function Fatorial( number ){
    if ( number == 1 ){
        return 1;
    } else {
        return number * Fatorial ( number -1 );
    }
}

console.log( Fatorial( 5 ));


// function fatorial ( number ) {
//     let fat = 1;
//     for ( let i = number; i > 1; i--){
//         fat *=  i;
//     }
//     return fat;
// }
// console.log( fatorial( 5 ) );


// let chamada = function( X ) {
// -> é possível alocar uma função em uma variável
//     return X * 2;
// }
// console.log( chamada( 4 ) );