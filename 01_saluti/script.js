/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

const inputName = prompt('inserisci nome')

// Dichiara la funzione qui.

/*function sayHello(mmName) {
return "Ciao " + mmName
}*/

//funzione arrow

const sayHello = (mmName) => 'Ciao ' + mmName

// Invoca la funzione qui e stampa il risultato in console

console.log(sayHello(inputName));

//Risultato atteso se si passa 'Mario': // ciao Mario
