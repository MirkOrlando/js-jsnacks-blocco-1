/* SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

const oddsList = [];

for (let i = 0; i < 6; i++) {
  const numberUser = parseInt(prompt("inserisci un numero"));
  console.log(numberUser);
  if (numberUser % 2 !== 0) {
    oddsList.push(numberUser);
  }
}

console.log(oddsList);
