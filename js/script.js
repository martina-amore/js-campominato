// Il computer deve generare 16 numeri casuali tra 1 e 100. OK
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

var MAX_ROUND = 3;

// FUNZIONE PER CREARE UN NUMERO CASUALE
function numeroRandom(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrayNumeriCasuali = [];

for (var i = 0; i < 16; i++) {
    // Il computer deve generare 16 numeri casuali tra 1 e 100
    arrayNumeriCasuali.push(numeroRandom(1, 100));
    arrayNumeriCasuali.sort();
    }
console.log("arrayNumeriCasuali", arrayNumeriCasuali);

var isInRandomList;
var arrayNumeriUtente = [];
for (var f = 0; f < MAX_ROUND; f++) {
    var numeriUtente = parseInt(prompt("Inserisci un numero tra 1 e 100:"));
    arrayNumeriUtente.push(numeriUtente);
    console.log("arrayNumeriUtente", arrayNumeriUtente);
    for (var j = 0; j < arrayNumeriCasuali.length; j++) {
        if (numeriUtente == arrayNumeriCasuali[j]) {
            // console.log("vero");
            // isInRandomList = true;
            // alert("Hai perso");
        }
        // else {
        //     isInRandomList = false;
        //     console.log("falso");
        // }
    }
}

if (isInRandomList == true) {
    document.getElementById("risultato").innerHTML = "Hai perso";
    document.getElementById("punteggio").innerHTML = "";
}



// console.log("arrayNumeriUtente", arrayNumeriUtente);
    // Se il numero è presente nella lista dei numeri generati, la partita termina
    // altrimenti si continua chiedendo all'utente un altro numero.

// }

// console.log("arrayNumeriUtente", arrayNumeriUtente);
// console.log("arrayNumeriUtente[f]", arrayNumeriUtente[f]);
