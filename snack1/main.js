/* SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
 */

const numb1 = parseInt(prompt("inserisci un numero"));
const numb2 = parseInt(prompt("inserisci un altro numero"));

console.log(numb1, numb2);

if (isNaN(numb1) || isNaN(numb2)) {
  alert(
    "Inserire solo dati numerici! Cortesemente ricaricare la pagina. Grazie"
  );
} else if (numb1 > numb2) {
  console.log(`il numero maggiore è ${numb1}`);
} else if (numb2 > numb1) {
  console.log(`il numero maggiore è ${numb2}`);
} else {
  console.log(`i due numeri inseriti sono uguali`);
}
