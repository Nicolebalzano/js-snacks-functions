/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Nicole';


// Dichiara la funzione qui.
function greetings(name) { 
    const date = new Date ();
    date.getHours();
    if(date <= 13) {
        let message = "Buongiorno" + " " + name;
        console.log(message);
    } else if (date > 13 && date < 17) {
        let message = "Buon pomeriggio" + " " + name;
        console.log(message);
    } else if (date > 17) {
        let message = "Buona sera" + " " + name;
        console.log(message);
    }
}

// Invoca la funzione qui e stampa il risultato in console

greetings(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.