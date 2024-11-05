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

// rimuovo gli spazi e trasformo la parola in minuscolo
word = word.replace(/\s+/g, '').toLowerCase();

// trasformo la stringa in array, la inverto e la faccio tornare di tipo stringa
let reversedWord = word.split('').reverse().join('');

// verifico se la parola è palindroma
if(word === reversedWord){
    console.log('La parola scelta è palindroma!')
} else {
    console.log('La parola scalta non è palindroma!')
}