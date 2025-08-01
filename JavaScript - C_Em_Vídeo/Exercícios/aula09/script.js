let contador = 0;
let result = document.querySelector('section#result');

function contar() {
    contador ++;
    result.innerHTML = `<p>O contador está com <mark>${nome}</mark> cliques.</p>`;
}

function zerar() {
    contador = 0;
    result.innerHTML= null;
}