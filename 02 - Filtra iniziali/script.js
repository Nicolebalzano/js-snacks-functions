/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array
 contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];



// Dichiara la funzione qui.
function nameWithLetter(names) {
    let newNames = [];
    console.log(newNames);
    for(let i = 0; i < names.length; i++ ){
        let curName = names[i];
        console.log(curName);
        for ( let i = 0; i < curName.length; i++)
           curLetter = curName[i - (curName.length - 1)];
        if(curLetter === "A"){
            newNames.push(curName);
        }
        }
     
}
    
    
// Invoca la funzione qui e stampa il risultato in console

nameWithLetter(names);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]