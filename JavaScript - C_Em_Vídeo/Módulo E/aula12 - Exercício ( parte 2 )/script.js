function fazerTabuada(){
    let numero = document.getElementById("txtn").value;
    let tabuada = document.getElementById("seltabuada");

    if ( numero.length == 0 ){
        window.alert("Insira um número válido");
    } else {
        let num = Number(numero);
        let cont = 1;

        tabuada.innerHTML = "";

        while ( cont <= 10 ){
            let item = document.createElement("option");
            item.text = `${num} x ${cont} = ${num * cont}`;
            item.value = cont;
            // item.value = "tab " + cont;
            tabuada.appendChild(item);
            cont++;
        }
    }

}