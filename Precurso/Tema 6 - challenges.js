//1- Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.
const nums = [1,2,3,4,5,6,7,8,9]

const ejercicio1 = () => {
    for(let i = 0; i < nums.length-1; i++){
        let pairs = []
        pairs.push(nums[i]*2)
        pairs.push(nums[i+1]*2)
        console.log(`${i+1}ª pareja ${pairs[0]} - ${pairs[1]}`)
    }
}

//1.b- La funcion debería aceptar la array a tratar como argumento.
const ejercicio1b = () => {
    let doubles = nums.map(function(x) {return x * 2})
    for(let i = 0; i < nums.length-1; i++){
        console.log(`${i+1}ª pareja ${doubles[i]} - ${doubles[i+1]}`)
    }
}

//1.c- Pasa también el numero a multiplicar a la función como argumento
const ejercicio1c = (y) => {
    console.log("El número escogido es: "+y)
    let doubles = nums.map(function(x) {return x * y})
    for(let i = 0; i < doubles.length-1; i++){
        console.log(`${i+1}ª pareja ${doubles[i]} - ${doubles[i+1]}`)
    }
}

//1.d- La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.
const ejercicio1d = (y, parejas) => {
    console.log("El número escogido es: "+y)
    console.log(`Se quieren mostrar las ${parejas} primeras parejas`)
    let doubles = nums.map(function(x) {return x * y})
    for(let i = 0; i < parejas; i++){
        console.log(`${i+1}ª pareja ${doubles[i]} - ${doubles[i+1]}`)
    }
}

//2- Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?
//2.1 Puedes añadir además, la posición de cada resultado?
//2.2 Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.
//2.3 Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

const ejercicio2 = (amount) => {
    let fibo = [0 , 1]
    for (let i = 0; i < amount; i++){
        fibo.push(fibo[i]+ fibo[i+1]);
        console.log(`${fibo[i+1]} - position ${i+1}`)
    }
    
}

//2.4 Ahora, muestra los resultados en forma piramidal:

const ejercicio2b = (amount) => {
    let fibo = [0 , 1]
    let piramide = ""
    for (let i = 0; i < amount; i++){
        fibo.push(fibo[i]+ fibo[i+1]);
        piramide = piramide + fibo[i] + " "
        console.log(piramide)
    }
    for (let i = 0; i < amount+1; i++){
        piramide = ""
        fibo.pop();
        for(let y = 0; y < fibo.length; y++){
            piramide = piramide + fibo[y] + " "
        }
        console.log(piramide)
    }
}

//3- Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código

const ejercicio3 = (code) => {

    let arrayCode = Array.from(String(code), Number)
    let newCode = ""
    let position = []
    let getRandomNum = () => {return Math.floor(Math.random() *arrayCode.length)}
    
    for (let i = 0; i < arrayCode.length; i++){
    
        let randomNum = getRandomNum()
        
        while (position.includes(randomNum)) {
            randomNum = getRandomNum()
        }

        position.push(randomNum)
        newCode = newCode + arrayCode[randomNum]
    }
    console.log(newCode)
}

//3.b Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)

const ejercicio3b = (code1, code2) => {
        let arrayCode1 = Array.from(String(code1), Number)
        let arrayCode2 = Array.from(String(code2), Number)
        let arrayCode = arrayCode1.concat(arrayCode2) 
        let newCode = ""
        let position = []
        let getRandomNum = () => {return Math.floor(Math.random() *arrayCode.length)}
        
        for (let i = 0; i < arrayCode.length; i++){
            
        
            let randomNum = getRandomNum()
            
            while (position.includes(randomNum)) {
                randomNum = getRandomNum()
            }
            position.push(randomNum)
            if (i === 4){
                newCode = newCode + " "
            }
            newCode = newCode + arrayCode[randomNum]
        }
        return console.log(newCode)
}

//3.c Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)

const ejercicio3c = (code1, code2) => {
    let arrayCode1 = Array.from(String(code1), Number)
    let arrayCode2 = Array.from(String(code2), Number)
    let arrayCode = arrayCode1.concat(arrayCode2) 
    let newCode = []
    let position = []
    let getRandomNum = () => {return Math.floor(Math.random() *arrayCode.length)}
    
    for (let i = 0; i < arrayCode.length; i++){
        
    
        let randomNum = getRandomNum()
        
        while (position.includes(randomNum)) {
            randomNum = getRandomNum()
        }
        position.push(randomNum)
        
        newCode.push(arrayCode[randomNum])
    }

    const encrypter = (Code) => {
        let encriptedNewCode = []

        Code.forEach(element => {
            if (element *2 < 10){
                encriptedNewCode.push(element*2)
            } else {
                encriptedNewCode.push(element)
            }
        });

        return encriptedNewCode;
    }
    
    newCode = encrypter(newCode)
    
    const codeToString = (x) => {
        let codeString = ""
        for (let i = 0; i < x.length; i++){
            if(i === 4){
                codeString = codeString + " "
            }
            codeString = codeString + x[i]
        }
        console.log(codeString)
    }
    
    return codeToString(newCode)
}

ejercicio3c (1234, 5698);

