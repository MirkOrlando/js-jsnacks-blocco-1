/* SNACK 9
Calcola la somma e la media dei primi 10 numeri. */

let sum = 0;
let average;
const n = 10;

for (let i = 1; i <= n; i++) {
  sum += i;
  console.log(i);
}

average = sum / n;
console.log(sum, average);
