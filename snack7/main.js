/* SNACK 7 
Stampa le potenze di 2 fino a 1000.*/

const base = 2;
let power;

for (let i = 0; i <= 1000; i++) {
  power = base ** i;
  console.log(`Se la è ${base} e l'esponente è ${i} il risultato è ${power}`);
}
