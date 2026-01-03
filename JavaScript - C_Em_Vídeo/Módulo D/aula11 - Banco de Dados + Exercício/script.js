function carregar() {
    let msg = window.document.getElementById('msg'); 
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = 10;
    msg.innerHTML = "Agora são " + hora + " horas.";

    if ( hora >= 0 && hora < 12 ) {
        img.src = "imagem_dia.jpeg"
        document.body.style.background = '#e2cd9f';
    } else if ( hora >= 12 && hora < 18 ) {
        img.src = "imagem_tarde.png";;
        document.body.style.background = '#b9846f';
    } else {
        img.src = 'imagem_noite.jpeg';
        document.body.style.background = '#515154';
    }
}
