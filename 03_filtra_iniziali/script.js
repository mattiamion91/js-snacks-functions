/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function extractNamesByLetter(myNames, myLetter) {
//creo un array vuoto che conterrá i nomi che cominciano con una determinata lettera
const arrByletter = []
//ciclo che mi permette di scorrere tutti gli elementi dell'array
for (let i = 0; i < myNames.length; i++) {
    //considero il nome corrente
    const currentName = myNames[i];
    //estraggo la prima lettera
    const firstLetter = currentName[0]
    //confronto che la lettera fornita sia usale alla prima lettera del nomen
    if (myLetter === firstLetter) {
        arrByletter.push(currentName)
    }
}
//restituisco l'array con i nome che iniziano con la lettera
return arrByletter;
}
// Invoca la funzione qui e stampa il risultato in console

console.log(extractNamesByLetter(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//funzione arrow

const extractInitial