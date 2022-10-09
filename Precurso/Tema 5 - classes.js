const avenger = {
    name: "Tony",
    class: "VII",
    id: 1,
  };

//1 Mostrar las propiedades de un objeto

const showPropeties = (object) => {
    for (let key in object) {
        console.log(key)
    } 
}

const showPropeties2 = (object) => {console.log(Object.keys(object))}

//2 Mostrar los valores de un objeto
const showValors = (object) => {
    for (let [key, value] of Object.entries(object)) {
        console.log(value);
    }
} 

const showValors2 = (object) => {
    for (let key in object) {
        console.log(object[`${key}`])
    } 
} 

//3- Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

const ejercicio3 = () => {
    avenger.class = "XI"
    console.log("new class: "+avenger.class)
}

//4- Ahora, elimina la propiedad ID y asegura los cambios.

const ejercicio4 = () => {
    delete avenger.id
    console.log("id: "+avenger.id)
}

//5- Añade una nueva propiedad, por ejemplo city y dale un valor.

const ejercicio5 = () => {
    avenger.city = "New york"
    console.log("New city: "+avenger.city)
}

//6- Lista el numero de propiedades que contiene el objeto.

const ejercicio6 = (object) => {
    let i = 0
    for (let key in object) {
    i++
    }
    console.log("There are "+i+" info fields")
}

//7- Cambia la propiedad name por fullName.

const ejercicio7 = () => {
    delete avenger.name
    avenger.fullname = "Tony Stark"
    console.log("New name "+avenger.fullname)
    console.log(avenger)
}

//8- Lista todas las propiedades del objeto a través de un console.log()
//8.1- Añade más propiedades al objeto, como... markAverage, country, job, studies...
//8.2- Asegura los cambios volviendo a listar los valores del objeto

const ejercicio8 = () => {
    showPropeties2(avenger);
    
    avenger.markAverage = 10;
    avenger.country = "USA";
    avenger.jog = "avengers";
    avenger.studies = "ingeneer"

    showPropeties2(avenger);
}

//9- Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

function ironman(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    this.description = function(){console.log(this.fullName+", "+this.classRoom+", "+this.city+", "+this.job+", "+this.studies+", "+this.markAv)}
  }

const ejercicio9 = () => {
      const tonyStark = new ironman("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
      console.log(tonyStark);
}

//10- Crea otro objeto y imprime sus propiedades por pantalla.

const ejercicio10 = () => {
    const xistri = new ironman("Cristian Martí", "IX", "Vila-real", "Developer", "UJI", 19)
    console.log(xistri)
}

//11- Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:

const ejercicio11 = () => {
    const xistri = new ironman("Cristian Martí", "IX", "Vila-real", "Developer", "UJI", 19)
    xistri.description();
}

//12- Ahora, crea una función que solo liste los nombres de los objetos instanciados

const ejercicio12 = () => {
    const tonyStark = new ironman("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
    const xistri = new ironman("Cristian Martí", "IX", "Vila-real", "Developer", "UJI", 19)
    return tonyStark.fullName + ", "+xistri.fullName
}

//13- Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.

let advengers = []

const newAdvenger = (name, City, MarkAv, id) => {
    advengers.push({
        fullName: name, 
        city: City,
        markAv: MarkAv,
        ID: id
        })
}

const ejercicio13 = () => {
    newAdvenger("Ironman", "NYC", 10);
    newAdvenger("Hulk", "NYC", 15);
    newAdvenger("Thor", "Asgard", 16);
    newAdvenger("Hawkeye", "NYC", 7);

    console.log(advengers)

    let cityArray = [];
let cityRepeated = false;

for (let i = 0; i < advengers.length; i++){
  cityRepeated = false;
  for (let j = 0; j < cityArray.length; j++){
    if (advengers[i].city === cityArray[j])
    cityRepeated = true;
  }
  if (!cityRepeated){
    cityArray.push (advengers[i].city)
  }
}

let showCities = () => {
  let actualCityMembers;
  let accounting;
  let habitantes;
  let actualName;

  for (let i = 0; i < cityArray.length; i++){
    actualCityMembers = [];
    accounting = 0;
    habitantes = "";

    for(let j = 0; j < advengers.length; j++){

      if (advengers[j].city === cityArray[i]){
        actualCityMembers.push(advengers[j].fullName);
        accounting++
  
      } else{
      }

    }

    for(let j = 0; j < actualCityMembers.length; j++){
      if (j != actualCityMembers.length - 1){
        habitantes = habitantes + actualCityMembers[j] + ", "
      }
      else {
        habitantes = habitantes + actualCityMembers[j] + "."
      }
    }
    console.log(`Are ${accounting} living in ${cityArray[i]}: ${habitantes}`)
  }
}

showCities()
}

//14- Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

const ejercicio14 = () => {
    newAdvenger("Ironman", "NYC", 10);
    newAdvenger("Hulk", "NYC", 15);
    newAdvenger("Thor", "Asgard", 16);
    newAdvenger("Hawkeye", "NYC", 7);
    newAdvenger("Xistri", "Vila-real", 19);

    console.log(advengers)

    let markAvMedia = 0;

    for (let i = 0; i < advengers.length; i++)
    {
        markAvMedia = markAvMedia + advengers[i].markAv
        console.log(`${advengers[i].fullName} tiene un MarkAv de: ${advengers[i].markAv}`)
    }    

    markAvMedia = markAvMedia / advengers.length
    console.log("La media de todas las markAv es de "+markAvMedia)
}

//15- Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.

const ejercicio15 = () => {

newAdvenger("Ironman", "NYC", 10, 0);
newAdvenger("Hulk", "NYC", 15, 1);
newAdvenger("Thor", "Asgard", 16, 2);
newAdvenger("Hawkeye", "NYC", 7, 3);

console.log(advengers)
let winner = "";

    if (advengers[0].markAv > advengers[1].markAv){
        winner = advengers[0].fullName
    }
    else {
        winner = advengers[1].fullName
    }
    console.log(`${advengers[0].fullName} vs ${advengers[1].fullName} => ${winner} is better!`)

    if (advengers[2].markAv > advengers[3].markAv){
        winner = advengers[2].fullName
    }
    else {
        winner = advengers[3].fullName
    }
    console.log(`${advengers[2].fullName} vs ${advengers[3].fullName} => ${winner} is better!`)
}

const ejercicio16 = () => {

    newAdvenger("Ironman", "NYC", 10, 0);
    newAdvenger("Hulk", "NYC", 15, 1);
    newAdvenger("Thor", "Asgard", 16, 2);
    newAdvenger("Hawkeye", "NYC", 7, 3);

    let battled = [];

    let getRandomNum = () => {return Math.floor(Math.random() *advengers.length)}

    while(battled.length < advengers.length){
        let randomNum = getRandomNum()
        while (battled.includes(randomNum)){
            randomNum = getRandomNum()
        }
        battled.push(randomNum);
    }

    let battle = (x, y) => {
        if (advengers[x].markAv > advengers[y].markAv){
            winner = advengers[x].fullName
        }
        else {
            winner = advengers[y].fullName
        }
        console.log(`${advengers[x].fullName} vs ${advengers[y].fullName} => ${winner} is better!`)
    }

    battle(battled[0], battled[1]);
    battle(battled[2], battled[3]);
}
ejercicio16()

