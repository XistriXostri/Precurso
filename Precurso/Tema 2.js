//Ejercicio 1
console.log("\nEjercicio 1- Puedes contar cuantas letras tiene tu nombre?\n");

const name = "Cristian";

function letrasName() {
  return "Mi nombre tiene " + name.length + " letras.";
}
const result = letrasName();
console.log(result);

//Ejercicio 2
console.log(
  "\n2- Añade tu apellido a name e indica en que posición del string empieza (modificando el método prueba a buscar el espacio entre el nombre y el apellido):\n"
);

//2 formas de hacerlo:

const lastname = "Marti";

//Función con un bucle que saca letra a letra

const myFullName = name + " " + lastname;
const nameWithLastname2 = `${name} ${lastname}`;

function indexOfLastname(nameWithLastname) {
  for (let i = 0; i < nameWithLastname.length; i++) {
    let actualChar = nameWithLastname[i];
    if (actualChar === " ") {
      return i + 1;
    }
  }
}

console.log(
  `El apellido empieza en la posición ${indexOfLastname(myFullName)}`
);

//Con un metodo de String
console.log(
  `El apellido empieza en la posición ${myFullName.indexOf(" ") + 1}`
);

//Ejercicio 3
console.log(
  "\nEjercicio 3- Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):\n"
);

//3 formas de hacerlo:

//Función con un bucle que saca letra a letra
function getName(nameToGet) {
  let onlyName = "";
  for (let i = 0; i < indexOfLastname(nameToGet); i++) {
    onlyName = onlyName + nameToGet[i];
  }
  return onlyName;
}
console.log(getName(myFullName));

//Metodo Slice: Extrae una sección de una cadena y devuelve una nueva cadena.
console.log(myFullName.slice(0, indexOfLastname(myFullName)));

//Metodo Split: Divide la cadena y devuelve la cadena que llames.
console.log(myFullName.split(" ")[0]);

//Ejercicio 4
console.log("\nEjercicio 4- Ahora, solo tu apellido.\n");

//3 formas de hacerlo:
//Función con un bucle que saca letra a letra
function getLastname(fullName) {
  let onlyName = "";
  for (let i = indexOfLastname(fullName); i < fullName.length; i++) {
    onlyName = onlyName + fullName[i];
  }
  return onlyName;
}

console.log(getLastname(myFullName));

//Metodo Slice: Extrae una sección de una cadena y devuelve una nueva cadena.
console.log(myFullName.slice(indexOfLastname(myFullName), myFullName.length));

//Metodo Split: Divide la cadena por el caracter indicado y devuelve la cadena que llames.
console.log(myFullName.split(" ")[1]);

//Ejercicio 5
console.log(
  "\nEjercicio 5- Ahora, reemplaza tu nombre por Mr/Ms y vuelve a mostrar la variable con los cambios.\n"
);

var mrLastname = "Mr. " + myFullName.split(" ")[1];
console.log(mrLastname);

//Ejercicio 6
console.log(
  "\nEjercicio 6- Selecciona tu apellido y transfórmalo a MAYÚSCULAS.\n"
);

console.log(myFullName.split(" ")[1].toUpperCase());

//Ejercicio 7
console.log(
  "\nEjercicio 7- Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.\n"
);

var awesome = myFullName.split(" ")[1] + " is awesome.";
console.log(awesome);

//Ejercicio 8
console.log(
  "\nEjercicio 8- Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?\n"
);

console.log(myFullName[0] + "." + myFullName.split(" ")[1][0]);

//Ejercicio 9
console.log(
  "\nEjercicio 9- Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por /\n"
);

let myFullNameArray = Array.from(myFullName);
myFullNameArray.splice(myFullNameArray.indexOf(" "), 1);

function includeBar(ArrayToIncludeBar) {
  return ArrayToIncludeBar.join("/");
}
console.log(includeBar(myFullNameArray));

//Ejercicio 10
console.log(
  "\nEjercicio 10- Ahora solo selecciona tu apellido y muestra cada letra separada por |\n"
);

let lastnameArray = myFullNameArray.splice(indexOfLastname(myFullName) - 1);

console.log(lastnameArray.join("|"));

//Ejercicio 11
console.log(
  "\nEjercicio 11- Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)\n"
);

let myNameArray = myFullNameArray.splice(0, indexOfLastname(myFullName));

function nameOrdenate(fullName) {
  let nameNumbered = "";
  for (let i = 0; i < fullName.length; i++) {
    let j = i + 1;

    if (i === fullName.length - 1) {
      nameNumbered = nameNumbered + j + "º " + fullName[i];
    } else {
      nameNumbered = nameNumbered + j + "º " + fullName[i] + ", ";
    }
  }
  return nameNumbered;
}

console.log(nameOrdenate(myNameArray));

//Ejercicio 12
console.log(
  "\nEjercicio 12- Como en el ejercicio anterior, pero seleccionando tu apellido\n"
);

console.log(nameOrdenate(lastnameArray));

//Ejercicio 13
console.log(
  "\nEjercicio 13- Puedes indicarme las iniciales de tu nombre y apellido?\n"
);

myFullNameArray = Array.from(myFullName);

console.log(
  myFullNameArray[0] +
    "." +
    myFullNameArray[myFullNameArray.indexOf(" ") + 1] +
    "."
);

//Ejercicio 14
console.log(
  "\nEjercicio 14- Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.\n"
);

const age = 28;

let myselfArray = [name, lastname, age];

console.log(`Mi nombre es ${myselfArray[0]} y tengo ${myselfArray[2]} años.`);

//Ejercicio 15
console.log(
  "\nEjercicio 15- Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.\n"
);

const city = "Vila-real";

myselfArray.push(city);
console.log("City added to Array -> " + myselfArray);

//Ejercicio 16
console.log(
  "\nEjercicio 16- Crea ahora, una funcion para eliminar la variable City y asegura los cambios.\n"
);

myselfArray.pop();
console.log("City removed from Array -> " + myselfArray);

//Ejercicio 17
console.log("\nEjercicio 17- Ahora, elimina el nombre y asegura los cambios\n");

myselfArray.shift();
console.log("Name removed from Array -> " + myselfArray);

//Ejercicio 18
console.log(
  "\nEjercicio 18- Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?\n"
);

myselfArray.splice(0, 0, name);
console.log("Name removed from Array -> " + myselfArray);

//Ejercicio 19
console.log(
  "\nEjercicio 19- Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.\n"
);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var doubles = numbers.map(function (x) {
  return x * 2;
});

console.log(numbers);
console.log(doubles);

//Ejercicio 20
console.log(
  "\nEjercicio 20- Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.\n"
);

let num = 3;

var multByNum = numbers.map(function (x) {
  return x * num;
});

console.log(multByNum);

//Ejercicio 21
console.log("\nEjercicio 21- Podrías mostrarlos en el orden inverso?\n");

console.log(numbers.sort((a, b) => b - a));

//Ejercicio 22
console.log(
  "\nEjercicio 22- Puedes indicarme que letras se repiten de tu nombre y cuantas veces?\n"
);

function countLetters(letters) {
  let countedLetters = {};

  letters.forEach(function (letter) {
    if (letter in countedLetters) {
      countedLetters[letter]++;
    } else {
      countedLetters[letter] = 1;
    }
  });
  return countedLetters;
}

console.log(countLetters(myFullNameArray));

function repeatedLetters(fromArray) {
  let countedObject = countLetters(fromArray);

  Object.filter = function (letter, filter) {
    return Object.keys(letter)
      .filter(function (ObjectKey) {
        return filter(letter[ObjectKey]);
      })
      .reduce(function (result, ObjectKey) {
        result[ObjectKey] = letter[ObjectKey];
        return result;
      }, {});
  };

  console.log("Las letras son", countedObject);

  var targetSubjects = Object.filter(countedObject, function (countedObject) {
    return countedObject > 1;
  });

  console.log("Las letras que se repiten son", targetSubjects);
}

repeatedLetters(myFullNameArray)

//Ejercicio 23
console.log(
  "\nEjercicio 23- Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras?\n"
);

function noRepeatedLetters(fromArray) {
  let countedObject = countLetters(fromArray);

  Object.filter = function (letter, filter) {
    return Object.keys(letter)
      .filter(function (ObjectKey) {
        return filter(letter[ObjectKey]);
      })
      .reduce(function (result, ObjectKey) {
        result[ObjectKey] = letter[ObjectKey];
        return result;
      }, {});
  };

  console.log("Las letras son", countedObject);

  var targetSubjects = Object.filter(countedObject, function (countedObject) {
    return countedObject <= 1;
  });

  console.log("Las letras que no se repiten son", targetSubjects);
}

noRepeatedLetters(myFullNameArray)

//Ejercicio 24
console.log(
  "\nEjercicio 24- Que hora es? Declara la hora como número y devuelvela como String\n");

const time = 12.50

timeString = time.toString()

console.log("Son las "+timeString+" de la tarde")

//Ejercicio 25
console.log(
  "\nEjercicio 25- No no, que hora exactamente? Dime la hora sin minutos!\n");

const timeWithoutMin = Math.trunc(time)
console.log("son las "+timeWithoutMin+" de la tarde")

//Ejercicio 26
console.log(
  "\nEjercicio 26- Ahora, declara tu hora y muéstrala redondeada.\n");

timeRound = Math.round(time)
console.log("Son sobre las "+timeRound+" de la tarde")

//Ejercicio 27
console.log(
  "\nEjercicio 27- Hagamos una calculadora. Primero, la suma. Crea variables con valores distintos y súmalos.\n");

const const1 = 5
const const2 = 6

console.log("Tenemos dos constantes: "+const1+" y "+const2)

var sum = const1 + const2

console.log("Sumadas dan: "+sum)

//Ejercicio 28
console.log(
  "\nEjercicio 28- Añade la resta\n");

var rest = const1 - const2
console.log("Restadas dan: "+rest)

//Ejercicio 29
console.log(
  "\nEjercicio 29- Añade la multiplicación\n");

var mult = const1 * const2
console.log("Multiplicadas dan: "+mult)

//Ejercicio 30
console.log(
  "\nEjercicio 30- Añade la división\n");

var div = const1 / const2
console.log("Divididas dan: "+div)  

//Ejercicio 31
console.log(
  "\nEjercicio 31- Ahora, intenta multiplicar un número por una string, que devuelve?\n");

console.log(timeString * const1)

var multString = timeString * const2
console.log("Si intento multiplicar un numero por una String da: " + multString)

//Ejercicio 32
console.log(
  "\nEjercicio 32- Podemos controlar este error con un condicional if?\n");