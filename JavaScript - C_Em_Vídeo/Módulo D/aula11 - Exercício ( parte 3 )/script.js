function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if ( fano.value.lenght == 0 ){
        window.alert("Verifique os dados e tente novamente");
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = "";
        var faixaEtaria = "";

        if ( fsex[0].checked ){
            genero = 'Homem';
                if ( idade >= 0 && idade < 10 ) {
                    faixaEtaria = "Você é uma criança";
                } else if ( idade < 18 ){
                    faixaEtaria = "Você é um adolescente";
                } else if ( idade < 30 ) {
                    faixaEtaria = "Você é um jovem adulto";    
                } else {
                    faixaEtaria = "Você é um adulto";
                }
        } else if ( fsex[1].checked ) {
            genero = 'Mulher';
                if ( idade >= 0  && idade < 10 ) {
                    faixaEtaria = "Você é uma criança";
                } else if ( idade < 18 ) {
                    faixaEtaria = "Você é uma adolescente";
                } else if ( idade < 30 ) {
                    faixaEtaria = "Você é uma dovem adulta";
                } else {
                    faixaEtaria = "Você é uma adulta";
                }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Você é ${genero}, tem ${idade} anos e... ${faixaEtaria}.`;
    }
}