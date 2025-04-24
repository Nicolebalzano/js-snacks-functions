/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array
 con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
firstLetters(names);

// Dichiara la funzione qui.
function firstLetters(names){
    let firstLetter = [];
    console.log(firstLetter)
for(let i = 0; i < names.length; i++ ){
let curName = names[i];
console.log(curName);
for ( let i = 0; i < curName.length; i++)
   curLetter = curName[i - (curName.length - 1)];
firstLetter.push(curLetter.toUpperCase());
}
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]