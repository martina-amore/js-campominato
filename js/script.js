// Il computer deve generare 16 numeri casuali tra 1 e 100. OK
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// VARIABILI FISSE
var RANDOM_NUMBERS = 16;
var LIMITE_MIN = 1;
var LIMITE_MAX = 100;

// BONUS:
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// INSERISCO LA DIFFICOLTA'
var difficoltà = prompt("Inserisci la difficoltà: 0, 1, 2");
// SE SI SCEGLIE 0, IL RANGE MASSIMO DEI NUMERI CASUALI E' 100
if (difficoltà == 0) {
    LIMITE_MAX = 100;
}
// SE SI SCEGLIE 1, IL RANGE MASSIMO DEI NUMERI CASUALI E' 80
else if (difficoltà == 1) {
    LIMITE_MAX = 80;
}
// SE SI SCEGLIE 2, IL RANGE MASSIMO DEI NUMERI CASUALI E' 50
else {
    LIMITE_MAX = 50;
}

var GIRI = LIMITE_MAX - 16;

// INIZIALIZZO L'ARRAY DEI NUMERI CASUALI
var arrayNumeriCasuali = [];
// INSTAURO UN CICLO WHILE CON IL QUALE, SE IL NUMERO NON E' NELL'ARRAY
// DEI NUMERI CASUALI, VIENE INSERITO IN ESSO
while (arrayNumeriCasuali.length < RANDOM_NUMBERS) {
    var numeroCasualeAttuale = (numeroRandom(LIMITE_MIN, LIMITE_MAX));
    if (!isNumberInArray(numeroCasualeAttuale, arrayNumeriCasuali)) {
        arrayNumeriCasuali.push(numeroCasualeAttuale);
    }
}
console.log("arrayNumeriCasuali", arrayNumeriCasuali);

// INIZIALIZZO L'ARRAY DEI NUMERI IMMESSI DALL'UTENTE
// E LE VARIABILI NECESSARIE AL CICLO WHILE
var utenteHaVinto = false;
var utenteEVivo = true;
var arrayNumeriUtente = [];

// INSTAURO UN CICLO WHILE CON IL QUALE, FINCHE' L'UTENTE NON IMMETTE
// UN NUMERO CHE E' DENTRO L'ARRAY DEI NUMERI CASUALI, PUO' CONTINUARE A
// GIOCARE, QUINDI IL CICLO NON SI INTERROMPE
while (!utenteHaVinto && utenteEVivo) {
    var sceltaNumeroUtente = parseInt(prompt("Inserisci un numero tra " + LIMITE_MIN + " e " + LIMITE_MAX + ":"));
//
    // SE L'UTENTE INSERISCE DOPPIONE, SPUNTA QUEST'ALERT
    if (isNumberInArray(sceltaNumeroUtente, arrayNumeriUtente)) {
        alert("Hai già inserito questo numero. Inseriscine un altro:");
    }
    // SE L'UTENTE NON INSERISCE DOPPIONI, IL NUMERO VIENE INSERITO
    // NELL'ARRAY DEI NUMERI UTENTE. CI SONO DUE CASI:
    else {
        arrayNumeriUtente.push(sceltaNumeroUtente);
        // 1° CASO: SE IL NUMERO INSERITO E' PRESENTE NELL'ARRAY DEI NUM.
        // CASUALI, L'UTENTE PERDE E IL GIOCO TERMINA
        if (isNumberInArray(sceltaNumeroUtente, arrayNumeriCasuali)) {
            utenteEVivo = false;
            document.getElementById("messaggio").innerHTML = "Hai fatto esplodere la mina, hai perso!";
        // 2° CASO: IL GIOCO TERMINA QUANDO L'UTENTE RAGGIUNGE IL NUMERO
        // MAX DI GIRI
        }
        else if (arrayNumeriUtente.length === GIRI){
            utenteHaVinto = true;
            document.getElementById("messaggio").innerHTML = "Congratulazioni, hai vinto!";
        }
    }
}
console.log("vivo", utenteEVivo);
console.log("ha vinto", utenteHaVinto);
document.getElementById("punteggio").innerHTML += "Il tuo punteggio è: " + parseInt(arrayNumeriUtente.length - 1);
