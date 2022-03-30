/* SNACK 2
l'utente inserisce due parole in successione con due prompt.
Il softwarte stampa prima la parola più corta, poi la più lunga
 */

const word1 = prompt("inserisci una parola");
const word2 = prompt("inserisci un'altra parola");

let wordLonger;
let wordShorter;
let sameLength = false;

if (word1 === "" || word2 === "") {
  alert(
    "Cortesemente inserire almeno una parola per ogni campo! Ricaricare la pagina"
  );
} else if (word1.includes(" ") || word2.includes(" ")) {
  alert(
    "Cortesemente inserire solo una parola per ogni campo! Ricaricare la pagina"
  );
} else if (word1.length > word2.length) {
  wordLonger = word1;
  wordShorter = word2;
} else if (word2.length > word1.length) {
  wordLonger = word2;
  wordShorter = word1;
} else if (word1.length === word2.length) {
  sameLength = true;
}

if (sameLength) {
  console.log(
    `La parola ${word1} e la parola ${word2} hanno la stessa lunghezza`
  );
} else {
  console.log(wordLonger);
  console.log(wordShorter);
}
