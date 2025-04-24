/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function vowes(word){
    let wordVowes = [];
    console.log(wordVowes);
    for( let i = 0; i < word.length; i++){
        let curLetter = word[i];
        console.log(curLetter);
        if (curLetter === "a" || curLetter === "e" || curLetter === "i" || curLetter === "o" || curLetter === "u"){
            wordVowes.push(curLetter);
        }
    }
}

// Invoca la funzione qui e stampa il risultato in console

vowes(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)