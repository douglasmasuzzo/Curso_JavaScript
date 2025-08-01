let number = document.querySelector('input#fnumero');
let lista = document.querySelector('select#flista');
let resposta = document.querySelector('div#resposta');
let valores = [];


function isNumero ( num ) {
    if ( Number( num ) >= 1 && Number( num <= 100 )){
        return true;
    } else {
        return false;
    }
}

function inLista( num, l ){
    if (l.indexOf( Number ( num )) != -1 ){
        return true;
    } else {
        return false;
    }
}

function Adicionar() {
    if ( isNumero( number.value ) &&  !inLista ( number.value, valores )) {
        valores.push( Number( number.value ));
        let item = document.createElement('option');
        item.text = `Valor ${number.value} adicionado`;
        lista.appendChild(item);
        resposta.innerHTML = '';
    } else {
        alert("Valor inválido");
    }

    number.value = "";
    number.focus();
}

function Verificar(){
    if ( valores.length == 0 ){
        alert("Campo vazio, adicione um valor");
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for ( let i in valores ){
            soma += valores[ i ];

            if ( valores[ i ] > maior ) {
                maior = valores[ i ];
            }
            if ( valores[i] < menor ) {
                menor = valores[ i ];
            } 
        }
            media = soma / total;

        resposta.innerHTML = '';
        resposta.innerHTML += `<p>Temos ${ total } números cadastrados</p>`;
        resposta.innerHTML += `<p>O maior valor foi: ${ maior }</p>`;
        resposta.innerHTML += `<p>O menor valor foi: ${ menor }</P>`;
        resposta.innerHTML += `<p>Somando os valores: ${ soma }</p>`;
        resposta.innerHTML += `<p>Média final: ${ media } </p>`;
    }
}