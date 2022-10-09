let carton = [];
let numberRecord;
let randomNumber;
let namePlayer;
let counters = [
  { name: "linea 1", count: 0 },
  { name: "linea 2", count: 0 },
  { name: "linea 3", count: 0 },
  { lineaAlready: false },
  { name: "turn", count: 0 },
  { name: "finish", count: 0 },
  { name: "points", count: 0 },
  { name: "games", count: 0 },
];
let ranking = [];

const newCarton = () => {
  carton = [];
  for (let i = 0; i < 15; i++) {
    randomNumber = generateRandomNumber();
    while (repeated(carton)) {
      randomNumber = generateRandomNumber();
    }
    carton.push(randomNumber);
  }
  console.log("Your carton is:");
  showCarton();
  askForNewCarton();
};

const askForNewGame = () => {
  let response = prompt("Would you like to play again? y/n");
  switch (response) {
    case "y":
      counters[7].count++;
      return bingo();
    case "n":
      return console.log("Good Bye! have a nice day!");
    default:
      console.log("Error, try again please");
      return askForNewGame();
  }
};

const askForNewCarton = () => {
  let response = prompt("Do you like this one? y/n");
  switch (response) {
    case "y":
      return;
    case "n":
      return newCarton();
    default:
      console.log("Error, try again please");
      return askForNewCarton();
  }
};

const showCarton = () => {
  let cartonForm = "| ";
  for (let i = 0; i < carton.length; i++) {
    if (carton[i] < 10 || carton[i] === "X") {
      cartonForm = cartonForm + " ";
    }
    if (i === 4 || i === 9) {
      cartonForm = cartonForm + carton[i] + " |\n| ";
    } else if (i < carton.length - 1) {
      cartonForm = cartonForm + carton[i] + " | ";
    } else {
      cartonForm = cartonForm + carton[i] + " |";
    }
  }
  return console.log(cartonForm);
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * (100 - 1) + 1);
};

const newTurn = () => {
  randomNumber = generateRandomNumber();
  while (repeated(numberRecord)) {
    randomNumber = generateRandomNumber();
  }
  numberRecord.push(randomNumber);
  console.log("The number of this turn is: " + randomNumber);
  counters[4].count++;
  for (i = 0; i < carton.length; i++) {
    if (randomNumber === carton[i]) {
      carton[i] = "X";
      counters[5].count++;
      if (i < 5) {
        counters[0].count++;
      } else if (i < 10) {
        counters[1].count++;
      } else {
        counters[2].count++;
      }
    }
  }
  showCarton();
  if (counters[5].count > 14) {
    counters[6].count += (100 - counters[4].count) * 2;
    console.log(
      "Bingo! It's been " +
        counters[4].count +
        " turns.\nScore: " +
        counters[6].count
    );
    if (counters[7].count != 0) {
      let rankingPosition;
      for (let i = 0; i < ranking.length; i++) {
        if (counters[6].count > ranking[i].score) {
          rankingPosition = i;
          break;
        } else {
          rankingPosition = i + 1;
        }
      }
      ranking.splice(rankingPosition, 0, {
        name: namePlayer,
        score: counters[6].count,
      });
    } else {
      ranking.push({ name: namePlayer, score: counters[6].count });
    }
    showRanking();
    askForNewGame();
  } else if (
    (counters[0].count > 4 || counters[1].count > 4 || counters[2].count > 4) &&
    counters[3].lineaAlready === false
  ) {
    counters[3].lineaAlready = true;
    counters[6].count = 100 - counters[4].count;
    console.log("LINEA! You won: " + counters[6].count + " points!");
    askNewTurn();
  } else {
    askNewTurn();
  }
};

const askNewTurn = () => {
  let response = prompt("Next turn? y/n");
  switch (response) {
    case "y":
      return newTurn();
    case "n":
      console.log("Okay... take your time...");
      return askNewTurn();
    default:
      console.log("Error, try again please");
      return askNewTurn();
  }
};

const repeated = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (randomNumber === array[i]) {
      return true;
    }
  }
};

const showRanking = () => {
  console.log("*************RANKING*************");
  for (let i = 0; i < ranking.length; i++) {
    console.log(ranking[i].name + "........" + ranking[i].score);
  }
};

let bingo = () => {
  counters[0].count = 0;
  counters[1].count = 0;
  counters[2].count = 0;
  counters[3].lineaAlready = false;
  counters[4].count = 0;
  counters[5].count = 0;
  counters[6].count = 0;
  numberRecord = [];
  namePlayer = prompt("How is your name?");
  newCarton();
  newTurn();
};

console.log(
  "Welcome to the Bingo game.\nThe point system is as follows:\n- Line: You earn points equal to the number of possible remaining turns.\n- Bingo: You earn points equal to twice the number of possible remaining turns.\n\nLet's start the game! Good luck!"
);
bingo();
