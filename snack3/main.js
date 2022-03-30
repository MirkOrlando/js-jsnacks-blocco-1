/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

let numbersList = [];
let sum = 0;
let error = false;

for (let i = 0; i < 10; i++) {
  numbersList.push(parseInt(prompt("inserisci un numero")));
}

for (let i = 0; i < numbersList.length; i++) {
  if (isNaN(numbersList[i])) {
    error = true;
  } else {
    console.log(numbersList[i]);
    sum += numbersList[i];
  }
}

if (error) {
  console.log("uno o più dati inseriti non sono numerici");
} else {
  console.log(`la somma totale dei numeri inseriti è ${sum}`);
}
