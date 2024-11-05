"use strict";
console.clear();

//creo una funzione per verificare se la parola è palindroma
function wordisPalindroma(word) {
    word = word.replace(/\s+/g, '').toLowerCase();
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

// creo una funzione per generare un numero random tra 1 e 5
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// creo una funzione per verificare se un numero è pari o dispari
function verifyEvenOdd(number) {
    if(number % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}