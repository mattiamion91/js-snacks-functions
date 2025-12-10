/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)


function contaNumeroVocali(parola) { //creo una funzione che mi conta il numero delle vocali in una paorla

    let listaVocali = []; //variabile con array vuoto che conterra le vocali estratte

    const vocali = [ //creo array con tutte le vocali per usarlo come confronto
        'a',
        'e',
        'i',
        'o',
        'u'
    ];

    for (let x = 0; x < parola.length; x++) { //ciclo for che mi scorre tutte le lettere della parola che inserisco come parametro della funzione
        
        for (let y = 0; y < vocali.length; y++) { //ciclo che mi scorre tutte le vocali contenute nell'array vocali 
            
            if (parola[x] === vocali[y]) { //se nella parola é presente quella vocale...
                
                listaVocali.push(parola[x]) //allora pusha quella volcale nell array vocali vuoto
            
            }
        
        }
    
    }
    
    return listaVocali.length + listaVocali; //ritorno la lunghezza dell'array con le vocali pushate e le vocali stesse

}

console.log(contaNumeroVocali(word));
