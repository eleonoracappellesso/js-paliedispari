"use strict";
console.clear();

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedo all'utente una parola
let word = prompt("Inserisci una parola:");
console.log(word);

// // rimuovo gli spazi e trasformo la parola in minuscolo
// word = word.replace(/\s+/g, '').toLowerCase();

// // trasformo la stringa in array, la inverto e la faccio tornare di tipo stringa
// let reversedWord = word.split('').reverse().join('');
// console.log(reversedWord);

// verifico se la parola è palindroma
// if(word === reversedWord){
//     console.log('La parola scelta è palindroma!')
// } else {
//     console.log('La parola scelta non è palindroma!')
// }

// verifico se la parola è palindroma
if (wordisPalindroma(word)) {
    console.log('La parola scelta è palindroma!')
} else {
    console.log('La parola scelta non è palindroma!')
}


/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// chiedo all'utente di scegliere pari o dispari
let evenOdd = prompt('Scegli pari o dispari?').toLowerCase();

// verifico la scelta dell'utente e se valida gli chiedo un numero
if (evenOdd === 'pari' || evenOdd === 'dispari') {
    console.log("Hai scelto", evenOdd);
    let userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5:"));
    //verifico il numero dell'utente e se valido genero un numero per il computer e procedo con la somma
    if (userNumber >= 1 && userNumber <= 5) {
        let computerNumber = randomNumber();
        let sum = userNumber + computerNumber;
        console.log("Il numero scelto dall'utente è", userNumber);
        console.log("Il numero random del computer è", computerNumber);
        console.log("La somma dei due numeri è", sum);
        let sumResult = verifyEvenOdd(sum);
        console.log("La somma è un valore", sumResult);
        // verifico se la somma corrisponde alla scelta iniziale dell'utente
        if (evenOdd === sumResult) {
            console.log("Complimenti hai vinto!");
        } else {
            console.log("Mi dispiace :( Hai perso!");
        }
    } else {
        console.log("Inserisci un numero valido.");
    }
} else {
    console.log("Opzione non valida. Riprova.");
}