const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

let name = prompt("Hello! Please type your name:");

console.log(`Welcome ${name}! These are the diferent available flights:`);

var acumulatedCost = 0;
var acumulatedScale = "";

for (let i = 0; i < flights.length; i++) {
  var actualCost = flights[i].cost;
  acumulatedCost = acumulatedCost + actualCost;
  var flightCost = i;

  if (flights[i].scale == true) {
    console.log(
      `The flight with origin: ${flights[i].from}, and destination: ${flights[i].to} has a cost of ${flights[i].cost}€ and scale.`
    );
    acumulatedScale =
      acumulatedScale + `\n-${flights[i].from} to ${flights[i].to}.`;
  } else {
    console.log(
      `The flight with origin: ${flights[i].from}, and destination: ${flights[i].to} has a cost of ${flights[i].cost}€ and does not perform any scale`
    );
  }
}

let averageCost = acumulatedCost / (flightCost + 1);
console.log("The average cost of the flights is " + averageCost + "€.");

console.log(`The flights that scale are: ${acumulatedScale}`);

var acumulatedFlights = "";

for (let i = flights.length - 1; i > flights.length - 6; i--) {
  if (i == flights.length - 1) {
    acumulatedFlights = acumulatedFlights + flights[i].to;
  } else {
    acumulatedFlights = acumulatedFlights + ", " + flights[i].to;
  }
}

console.log(
  "The destination of the last flights of the day are: " + acumulatedFlights
);

function showElements() {
  for (let i = 0; i < flights.length; i++) {
    console.log(
      "ID: " +
        flights[i].id +
        ", TO: " +
        flights[i].to +
        ", FROM: " +
        flights[i].from +
        ", COST: " +
        flights[i].cost +
        ", SCALE: " +
        flights[i].scale
    );
  }
}

function adminUserQuestion() {
  let adminUserAnswer = prompt("What are you? \n - ADMIN \n - USER");

  switch (adminUserAnswer) {
    case "ADMIN":
      console.log("You have select Admin");
      return admin();
    case "USER":
      console.log("You have select User");
      return user();
    default:
      console.log("Invalid answer. Please type ADMIN or USER");
      return adminUserQuestion();
  }
  function admin() {
    function addFlight() {
      if (flights.length < 15) {
        flights.push({
          id: flights[flights.length - 1].id + 1,
          from: prompt("From:"),
          to: prompt("To:"),
          cost: prompt("Cost"),
          scale: askScale(),
        });
  
        console.log("Actualizado:");
        showElements();
      } else {
        console.log("Lista llena");
      }
      admin();
  
      function askScale() {
        let pushScale = prompt("Scale? y/n");
  
        switch (pushScale) {
          case "y":
            return true;
          case "n":
            return false;
          default:
            console.log("Invalid answer. Please, try again");
            return askScale();
        }
      }
    }
    function deleteFlight() {
      let deleteID = prompt(
        "Introduce the ID of the flight that you want to remove"
      );
      flights.splice(deleteID, 1);
      for (let i = 0; i < flights.length; i++) {
        flights[i].id = i;
      }
      showElements();
      admin();
    }
    let adminOption = prompt(
      "What do you want to do: \n 1 - Add a new flight \n 2 - Delete a flight \n 3 - Show the current list of flights \n 4 - Quit"
    );
  
    switch (adminOption) {
      case "1":
        return addFlight();
      case "2":
        return deleteFlight();
      case "3":
        showElements();
        return admin();
      case "4":
        console.log("Good bye, have a nice day!")
        return;
      default:
        console.log("Invalid answer. Please, try again");
        return admin();
    }
  }
  
  function user(){
    
    let searchByCost = prompt("Filter by cost:")
    console.log (`These are the flights with cost ${searchByCost}€ or less:`)
  
    for (let i = 0; i < flights.length; i++){
        if(flights[i].cost <= searchByCost){
            if (flights[i].scale == true) {
                console.log(
                    `The flight with origin: ${flights[i].from}, and destination: ${flights[i].to} has a cost of ${flights[i].cost}€ and scale.`
                  );
                } else {
                  console.log(
                    `The flight with origin: ${flights[i].from}, and destination: ${flights[i].to} has a cost of ${flights[i].cost}€ and does not perform any scale`
                  );
                }
          }
    }
    function askUserAgain(){
      switch(prompt("Do you want to filter by another amount?: y/n")){
        case "y":
          return user();
        case "n":
          console.log("Good bye, have a nice day!")
          return;
        default:
          console.log("Invalid answer. Please, try again");
          return askUserAgain();
      }
    }
    askUserAgain();
  }
}
adminUserQuestion();
