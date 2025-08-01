function fazerContagem(){
    let inicio = document.getElementById("inicio").value;
    let fim = document.getElementById("fim").value;
    let passos = document.getElementById("passos").value;
    let resultado = document.getElementById("resultado");

    if ( inicio.length == 0 || fim.lenght == 0 || passos.length == 0 ){
        window.alert("Insira os valores corretamente");
    } else {
        resultado.innerHTML = "Contando: <br>";
        let i = Number(inicio);
        let f = Number(fim);
        let p = Number(passos);

        if ( p <= 0 ) {
            alert("Passo inválido, começando pelo passo 1!");
            p = 1;
        }

        if ( i < f ) {
            for ( let cont = 1; cont <= f; cont+= p ){
                resultado.innerHTML += `${cont}`;
            }
        } else {
            for ( let cont = 1; cont >= f; cont -= p ){
                resultado.innerHTML += `${cont}`;
            }
        }

    }
    
}
