// FUNZIONI
// AL MOMENTO IN LISTA:
// 1) FUNZIONE PER CREARE UN NUMERO CASUALE
// 2) FUNZIONE PER VERIFICARE SE UN NUMERO E' DENTRO UN ARRAY


// FUNZIONE PER CREARE UN NUMERO CASUALE
function numeroRandom(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNZIONE PER VERIFICARE SE UN NUMERO E' DENTRO UN ARRAY
function isNumberInArray(num, numArray) {
    for (var i = 0; i < numArray.length; i++) {
        if (num === numArray[i]) {
            return true;
        }
    }
    return false;
}
