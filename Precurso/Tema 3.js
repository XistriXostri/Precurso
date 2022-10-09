const character = {
    name: "Jon",
    family: "Snow",
    id: 1,
  };

//Ejercicio 1
console.log(
    "\nEjercicio 1-  Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)\n");

    function keysObject(object){
        return Object.keys(object)
    }
    
    console.log(keysObject(character))

    
    //Ejercicio 2
console.log(
    "\nEjercicio 2- Ahora, crea una función que liste solo los valores de las propiedades.)\n");

    function valuesObject(object){
        return Object.values(object)
    }
    
    console.log(valuesObject(character))

//Ejercicio 3
console.log(
    "\nEjercicio 3- Cambia el valor de la propiedad family por Lannister y asegurate de que los cambios se han efectuado.\n");

    character.family = "Lannister";
    console.log(valuesObject(character))

//Ejercicio 4
console.log(
    "\nEjercicio 4- Ahora, elimina la propiedad ID y asegura los cambios.\n");

    delete character.id;
    console.log(keysObject(character))

//Ejercicio 5
console.log(
    "\nEjercicio 5- Añade una nueva propiedad, por ejemplo age y dale un valor.\n");

    character.age = 28
    console.log(character.age)

//Ejercicio 6
console.log(
    "\nEjercicio 6- Lista el numero de propiedades que contiene el objeto.\n");

console.log(keysObject(character).length)


//Ejercicio 7
console.log(
    "\nEjercicio 7- Cambia la propiedad name por fullName.\n");

character.fullName = character.name +" "+ character.family
delete character.name

console.log(character)


//Ejercicio 8
console.log(
    "\nEjercicio 8- Lista todas las propiedades del objeto a través de un console.log()\n");

console.log(`Mi nombre es ${character.fullName} y tengo ${character.age} años.`)

//Ejercicio 9
console.log(
    "\nEjercicio 9- Añade más propiedades al objeto, como... location, job...\n");

character.location = "hivernalia"
character.job = "mercenary"

console.log(character)