/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function extractInitial(myNames) {
    //array che conterrá tutte le iniziali
    const initial = [];

    //ciclo che mi permette di scorrere tutti gli elementi dell'array
    for (let i = 0; i < myNames.length; i++) {
        //considero il nome corrente
        const currentName = myNames[i];

        //normalizzo input, lo trasformo in una stringa
        const cleanName = String(currentName);

        //estraggo la prima lettera
        const firstLetter = cleanName[0];

        //aggiungo la prima lettera all' array vuoto che ho creato
        initial.push(firstLetter);
    }
//restituisco l'array con tutte le iniziali
    return initial;
}
// Invoca la funzione qui e stampa il risultato in console

console.log(extractInitial(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]