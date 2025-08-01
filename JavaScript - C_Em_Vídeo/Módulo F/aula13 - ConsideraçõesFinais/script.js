let carro = { 
    nome: "AAA",
    marca: "AAA",
    modelo: "AAA",
    pontos: "",
    multar( m = 0 ){
        console.log( "Mutado" );
        this.pontos += m;
    }
}

    carro.multar( 5 );
    console.log(`${ carro.nome }, ${ carro.pontos } pontos`)

// let carro = {
//     marca: "Nissan",
//     nome: "Lancer",
//     origem: "Japonesa",
// };
// console.log( carro.marca );