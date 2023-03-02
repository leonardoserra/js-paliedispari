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
// }while(!(userChoice === 'pari') || !(userChoice === 'dispari'));

do{
    userNumber = parseInt(prompt("digita un numero da 1 a 5:"));
}while(isNaN(userNumber) || userNumber < 1 || userNumber > 5);

console.log(`il player scommette sul ${userChoice} e punta sul numero ${userNumber}`);
console.log(`il computer punta sul numero ${computerNumber}`);

let total = sumTwoNumbers(userNumber, computerNumber);

console.log(`la somma dei numeri giocati è: ${total}`);

if(evenOdd(total) == userChoice){
    console.log('Hai vinto!')
}else{
    console.log('hai perso..vince il pc, RIPROVA!')
}


////////    Functions    ///////// 


function randomNumber(min, max){

    const generatedNumber = Math.floor(Math.random() * (max - min)) + min;
    return generatedNumber;

}

function sumTwoNumbers(n1, n2){

    const sum = n1 + n2;
    return sum;

}

function evenOdd(number){
    let result;
    if(number % 2 === 0){
        return result = "pari";
    }else{
        return result = "dispari";
    }
}