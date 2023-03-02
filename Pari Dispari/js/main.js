/*
    Pari e Dispari
        L’utente sceglie pari o dispari e 
        inserisce un numero da 1 a 5.
        Generiamo un numero random (sempre da 1 a 5) 
        per il computer (usando una funzione).
        Sommiamo i due numeri
        Stabiliamo se la somma dei due numeri è pari o
        dispari (usando una funzione)
        Dichiariamo chi ha vinto.
*/
let userChoice = prompt("Scegli fra pari o dispari:");
let computerNumber = randomNumber(1, 5);
let userNumber;

// do{
//     userChoice = prompt("Scegli fra pari o dispari:");
// }while(!(userChoice === "pari") || !(userChoice === "dispari"));

do{
    userNumber = parseInt(prompt("digita un numero da 1 a 5:"));
}while(isNaN(userNumber) || userNumber < 1 || userNumber > 5);


function randomNumber(min, max){
    generatedNumber = Math.floor(Math.random() * (max - min)) + min;
    return generatedNumber;
}
console.log(computerNumber);