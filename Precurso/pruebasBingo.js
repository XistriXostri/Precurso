const newCarton = () => {
  carton = []
  for (let i = 0; i < 15; i++) {
    randomNumber = generateRandomNumber();
    while(noRepes(carton)){
      randomNumber = generateRandomNumber();
    }
    carton.push(randomNumber)
  }
  console.log("Your carton is:")
  showCarton()
  askForNewCarton()
};

const askForNewGame = () => {
  let response = prompt("Would you like to play again? y/n")
  switch (response) {
    case "y":
      return bingo();
    case "n":
      return console.log("Good Bye! have a nice day!")
    default:
      console.log("Error, try again please")
      return askForNewGame();
  }
}

const askForNewCarton = () => {
  let response = prompt("Do you like this one? y/n")
  switch (response) {
    case "y":
      return;
    case "n":
      return newCarton();
    default:
      console.log("Error, try again please")
      return askForNewCarton();
  }
}

const showCarton = () => {
  let cartonForm = "| ";
  for (let i = 0; i < carton.length; i++) {
    if (carton[i]<10 || carton[i] === "X"){
        cartonForm = cartonForm + " "
    }
    if (i === 4 || i === 9) {
      cartonForm = cartonForm + carton[i] + " |\n| "
    } 
    else if (i < carton.length - 1){
      cartonForm = cartonForm + carton[i] + " | ";
    }      
    else {
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
  while(noRepes(numberRecord)) {
    randomNumber = generateRandomNumber();
  }
  numberRecord.push(randomNumber);
  console.log("The number of this turn is: " + randomNumber);
  turn++;
  for (i = 0; i < carton.length; i++) {
    if (randomNumber === carton[i]) {
      carton[i] = "X";
      finish++;
      if (i < 5){
        counters[0].count++
        }
        else if (i < 10){
        counters[1].count++
        }
        else {
        counters[2].count++
        }
    }
  }
  showCarton();
  if (finish > 14) {
    console.log("Bingo! It's been "+turn+" turns.");
  } 
  else if ((counters[0].count > 4 || counters[1].count > 4 || counters[2].count > 4) && (counters[3].lineaAlready === false)) {
    counters[3].lineaAlready = true
    console.log("LINEA!")
    askNewTurn();
  }
  else {
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
      console.log("Error, try again please")
      return askNewTurn();
  }
};

const noRepes = (array) => {
  for (let i = 0; i < array.length; i++) {
      if (randomNumber === array[i]) {
          return true
      }
  }
}

let turn;
let finish;
let carton = [];
let randomNumber;
let numberRecord = [];
let counters = [
  {file:1, count: 0},
  {file:2, count: 0},
  {file:3, count: 0},
  {lineaAlready: false}
]

let bingo = () => {
  finish = 0;
  turn = 0;
  newCarton();
  newTurn();
};

bingo();