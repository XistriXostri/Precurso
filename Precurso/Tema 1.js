let name = "Cristian"
let lastname = "Martí"
let age = 28


//5- Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
let yo = [name, lastname, age]

console.log(yo[0])
console.log(yo[1])
console.log(yo[2])

//6- Crea una estructura condicional que imprima el número mayor entre dos números.
//6.1- Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:

let numberA = 25
let numberB = 25

if (numberA < numberB){
    console.log(numberB)
} else if (numberA === numberB){
    console.log("Los numeros son iguales")
} else {
    console.log(numberA)
}

//7- Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.

let arrayN = [1 , 2 , 3, 4, 5]

for(let i = 0; i < arrayN.length; i++){
    if(i === 2){
        console.log(arrayN[i]+" estamos en la mitad loco")
    } else {
        console.log(arrayN[i])
    }
}

//8- Declara tu nombre y tu edad y luego crea un condicional para que en caso de no coincidir con tus datos, mostrar un error

let myName = "Cristian"
let myAge = 28

if(name === myName && age === myAge){
    console.log("yeee fiera")
} else {
    console.log("tu no eres Xistri")
}
//8.1- Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

let arrayYo = ["Pedro", "Javier", myName, "David"]

for (let j = 0; j < arrayYo.length; j++) {
    if(arrayYo[j] === myName){
        console.log("Encontramos tus datos Xistri!")
    } else {
        console.log(arrayYo[j])
    }
}