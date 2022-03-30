/* SNACK 4
In un array sono contenuti i nomi degli invitati 
alla festa del grande Gatsby,
chiedi all’utente il suo nome e
comunicagli se può partecipare o no alla festa.
 */

const guestsList = [
  "luca",
  "marco",
  "claudio",
  "stefano",
  "lucia",
  "alice",
  "simona",
];

const userName = prompt("inserisci il tuo nome");
let find = false;

for (let i = 0; i < guestsList.length; i++) {
  const guestName = guestsList[i];
  if (userName.toLowerCase() === guestName) {
    find = true;
  }
}

if (find) {
  console.log("Benvenuto alla festa! Divertiti.");
} else {
  console.log("Mi spiace, ma il tuo nome non è sulla lista.");
}
