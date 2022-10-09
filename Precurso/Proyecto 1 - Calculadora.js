var r1 = parseInt(prompt("introduce el primer numero"))

if (isNaN(r1)){
    console.log("Error. no has introducido un número")
}else {
    var r2 = parseInt(prompt("introduce el segundo numero"))
    calculadora(r1, r2)
}

function calculadora(a, b){

    const funciones = {
        sum: a + b,
        rest: a - b,
        mult: a * b,
        div: a / b
    } 
    if(isNaN(b)) {
        var raizCuadrada = Math.sqrt(a)
        console.log(raizCuadrada.toFixed(3))
    }  else {
        let funcion = prompt("¿Que operación quieres hacer? \n - Suma -> sum \n - Resta -> rest \n - Multiplicación -> mult \n - División -> div ")
        var resultadoFuncion = funciones[funcion]
        console.log(resultadoFuncion.toFixed(3))
    }
}