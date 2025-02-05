let animals = ["Adler", "Löwe", "Leopard", "Snake"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

//BEISPIEL-1

for (let i = -40; i <= -20; i++) {
  console.log(i);
}

//BEISPIEL-2

const readlineSync = require("readline-sync");

const choices = ["stein", "papier", "schere"];

while (true) {
  const userChoice = readlineSync
    .question(
      'Stein, Papier oder Schere wählen (zum Beenden "ende" eingeben): '
    )
    .toLowerCase();

  if (userChoice === "ende") {
    console.log("Spiel beendet!");
    break;
  }

  if (!choices.includes(userChoice)) {
    console.log("Ungültige Wahl, bitte erneut versuchen.");
    continue;
  }

  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  console.log(`Computerwahl: ${computerChoice}`);

  let result;
  if (userChoice === computerChoice) {
    result = "Unentschieden";
  } else if (
    (userChoice === "stein" && computerChoice === "schere") ||
    (userChoice === "papier" && computerChoice === "stein") ||
    (userChoice === "schere" && computerChoice === "papier")
  ) {
    result = "Du hast gewonnen!";
  } else {
    result = "Du hast verloren!";
  }

  console.log(result);
}


