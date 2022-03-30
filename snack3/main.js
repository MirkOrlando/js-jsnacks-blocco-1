/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

let numbersList = [];
let sum;

for (let i = 0; i < 10; i++) {
  numbersList.push(parseInt(prompt("inserisci un numero")));
}

for (let i = 0; i < numbersList.length; i++) {
  console.log(numbersList[i]);
  sum += parseInt(numbersList[i]);
}

console.log(sum);
