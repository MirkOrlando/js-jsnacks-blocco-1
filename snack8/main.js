/* SNACK 8
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre 
che compongono il numero. */

const numbLenght4 = prompt("Inserisci un numero di 4 cifre.").toString();
let error = false;

if (numbLenght4.length != 4) {
  alert("Attenzione! Non hai rispettato i parametri");
} else {
  const numbers = numbLenght4.split("");
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const digit = parseInt(numbers[i]);
    if (isNaN(digit)) {
      error = true;
    } else {
      console.log(digit);
      sum += digit;
    }
  }
  if (error) {
    alert("Attenzione! Non hai rispettato i parametri");
  } else {
    console.log(sum);
  }
}
