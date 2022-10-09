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

  function showFlightsProperly(i) {
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

    console.log("Inicial:")
    
    for (let i = 0; i < flights.length; i++){
        showFlightsProperly(i);
        }

//El usuario debe poder buscar por precio. Cuando el usuario ponga el precio, debera mostrar los vuelos que tengan ese precio o mas baratos. 



    let searchByCost = 150
    console.log ("\n Filtro de 150€ \n")

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
