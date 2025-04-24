/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = prompt("come ti chiami?");


// Dichiara la funzione qui.
function helloName (name) {
    let message = "Ciao" + " " + name + "!"
        console.log(message);
}

// Invoca la funzione qui e stampa il risultato in console

helloName(name);

//Risultato atteso se si passa 'Mario': // ciao Mario