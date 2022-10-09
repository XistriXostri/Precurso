/*
Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuantos vuelos efectúan escalas.
Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
*/

// This is a example of array of objects... each position of array contains one object...
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

let name = prompt("Hola! Porfavor introduce tu nombre:")

console.log(`Welcome ${name}! These are the diferent available flights:`)

var acumulatedCost = 0;
var acumulatedScale = "";

for(let i = 0; i < flights.length; i++){
   
    var actualCost = flights[i].cost;
    acumulatedCost = acumulatedCost + actualCost;
    var flightCost = i;

  if (flights[i].scale == true){
    console.log(`The flight with origin: ${flights[i].from}, and destination: ${flights[i].to} has a cost of ${flights[i].cost}€ and scale.`)
    acumulatedScale = acumulatedScale + `\n-${flights[i].from} to ${flights[i].to}.`

  } else {
    console.log(`The flight with origin: ${flights[i].from}, and destination: ${flights[i].to} has a cost of ${flights[i].cost}€ and does not perform any scale`)
  }
}

let averageCost = acumulatedCost / (flightCost + 1);
console.log("The average cost of the flights is "+averageCost+"€.")

console.log(`The flights that scale are: ${acumulatedScale}`)

var acumulatedFlights = ""

for(let i = flights.length -1; i > flights.length - 6; i--){
 
  if (i == flights.length -1){
    acumulatedFlights = acumulatedFlights + flights[i].to
  }
  else {
    acumulatedFlights = acumulatedFlights + ", " + flights[i].to
  }
}

console.log("The destination of the last flights of the day are: "+acumulatedFlights)

