let showCarton = () => {
  let cartonForm = "| ";
  for (let i = 0; i < carton.length; i++) {
    if (i < carton.length - 1) {
      cartonForm = cartonForm + carton[i] + " | ";
    } else {
      cartonForm = cartonForm + carton[i] + " |";
    }
  }
  return console.log(cartonForm);
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * (10 - 1) + 1);
};

let newTurn = () => {
  let randomNumber = generateRandomNumber();
  console.log("The number of this turn is: " + randomNumber);
  for (let i = 0; i < carton.length; i++) {
    if (randomNumber === carton[i]) {
      carton[i] = "X";
      finish++;
    }
  }
  showCarton();
  if (finish > 4) {
    console.log("Bingo!");
  } else {
    asknewTurn();
  }
};

let askNewTurn = () => {
  let response = prompt("Next turn? y/n");
  switch (response) {
    case "y":
      return newTurn();
    case "n":
      console.log("Okay take your time...");
      return asknewTurn();
    default:
      return asknewTurn();
  }
};

let finish;
let carton;

let bingo = () => {
  finish = 0;
  carton = [2, 5, 9, 8, 4];
  console.log("This is your Carton for this game:");
  showCarton();
  newTurn();
};

bingo();
