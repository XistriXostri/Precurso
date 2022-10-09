//Ejercicio 1
console.log(
    "\nEjercicio 1-  Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.\n");

    const greet = (myName) => {
        console.log("Hello "+ myName)
    };

    greet("Cristian")


//Ejercicio 2
console.log(
    "\nEjercicio 2- Intenta retornar los valores en lugar de usar console.log\n");

    const greet2 = (myName) => {
        return "Hello " + myName
    };

    console.log(greet2("Cristian"))

//Ejercicio 3
console.log(
    "\nEjercicio 3- Ahora, añade tu edad y concaténala al return\n");

    const greet3 = (myName, myAge) => {
        console.log("Hello "+ myName + ", you're "+ myAge + " years old.")
    };

    greet3("Cristian", 28)

//Ejercicio 5
console.log(
    "\nEjercicio 5- Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados\n");

    const myName = () => {return "Cristian"}
    const myAge = () => {return 28}

    console.log(myName() +" "+ myAge())

//Ejercicio 5.1
console.log(
    "\nEjercicio 5.1- Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.\n");

    console.log(myName()+" "+(myAge() + Math.random()*10).toString())

//Ejercicio 6
console.log(
    "\nEjercicio 6- Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.\n");

    const name = "Cristian"
    const age = 28

    const myName2 = (name) => {return name}
    const myAge2 = (age) => {return age}

    console.log(myName2(name) + " "+ myAge2(age))

//Ejercicio 7
console.log(
    "\nEjercicio 7- Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas\n");

    const nameAge = (x, y) => {
        return x + " " + y
    }

    console.log(nameAge(name, age));

//Ejercicio 8
console.log(
    "\nEjercicio 8- Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()\n");

    const randomNumber = () => {return Math.random()}

    console.log(nameAge(name, randomNumber()))

//Ejercicio 9
console.log(
    "\nEjercicio 9- Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50\n");

    const randomNumber2 = () => {return Math.random()*50}

    const getRandomNumber = randomNumber2()

    if (getRandomNumber < 20){
        console.log(nameAge(name, getRandomNumber));
    }
    else {
        console.log(getRandomNumber+"...Sure you're "+myName()+"?")
    }

//Ejercicio 10
console.log(
    "\nEjercicio 10- Al return de la función name(), concaténale otro mensaje\n");

    console.log(myName()+ "..., "+myAge()+"...Sure you're "+myName()+"?")

//Ejercicio 10
console.log(
    "\nEjercicio 11- Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable\n");

//Dejo de hacer esto porque es todo el rato lo mismo de modificar las funciones y considero de que ya se hacerlo haciendo pruebas
