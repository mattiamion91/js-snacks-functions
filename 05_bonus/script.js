/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)

*/
const myName = 'Mario';

// Dichiara la funzione qui.

//funzione che saluta utente basandosi su orario macchina
function cheersByTime (word){

    //creo const che mi ritornino l'ora attuale
    const currentDate = new Date();
    const currentHours = currentDate.getHours();

    //creo let che mi ritorni il saluto in base all'orario seguito dal nome
    let correctCheers;

    //creo un if..else per discriminare il saluto giusto al momento giusto
    if (currentHours >= 6 && currentHours < 13) {
        correctCheers = 'Buongiorno ' + word;

    } else if (currentHours >= 13 && currentHours < 17) {
        correctCheers = 'Buon pomeriggio ' + word;

    } else {
        correctCheers = 'Buonasera ' + word
    }

    return correctCheers
}

// Invoca la funzione qui e stampa il risultato in console

console.log(cheersByTime(myName));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.