/* SNACK 6 
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.*/

let n = parseInt(prompt("Inserisci un numero"));

if (isNaN(n)) {
  alert("Cortesemente inserire un valore numerico.");
} else if (n < 1) {
  alert("Cortesemente inserire un numero superiore a 0.");
} else {
  for (let i = 1; i < n + 1; i++) {
    console.log(i ** 3);
  }
}
