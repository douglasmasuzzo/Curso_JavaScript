var now = new Date();
var horas = now.getDate();
var minutos = now.getMinutes();

if ( horas > 6 && horas < 12 ) {
    console.log("BOM DIA!");
} else if ( horas > 13 && horas < 18 ) {
    console.log("BOA TARDE!");
} else if ( horas > 19 && horas < 24 ) {
    console.log("BOA NOITE!");
} else {
    console.log("VAI DORMIR MORCEGO!");
}

console.log(`Agora são ${horas} horas e ${minutos} minutos`);