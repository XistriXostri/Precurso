function newNumbers() {
    let getNumbers;
    const numbers = [];

    do {
        getNumbers = prompt("Insert all the numbers that you want.");
    
        if(getNumbers !== null){
            numbers.push(parseInt(getNumbers));
        }
    } while (getNumbers !== null);
    return numbers;
}

function calculatorPro (numbersArray) {
    if (!numbersArray?.length) {
        return console.log("There is not any number inserted.")
    } else if (numbersArray.every((element) => !isNaN(element))){
        if (numbersArray.length === 1){
            const squareRoot = Math.sqrt(numbersArray)
            console.log("The square root of the number inserted is: "+ squareRoot.toFixed(3))
        } else {
            let sum = numbersArray[0];
            for (i = 1; i < numbersArray.length; i++){
                sum += Number(numbersArray[i]);
            }
            let rest = numbersArray[0];
            for (j = 1; j < numbersArray.length; j++){
                rest -= Number(numbersArray[j]);
            }
            let mult = numbersArray[0];
            for (k = 1; k < numbersArray.length; k++){
                mult *= Number(numbersArray[k]);
            }
            let div = numbersArray[0];
            for (l = 1; l < numbersArray.length; l++){
                div /= Number(numbersArray[l]);
            }
            console.log("The numbers entered are: "+numbersArray+"\n -Their sum is: "+sum+"\n -Their subtraction is: "+rest+"\n -Their multiplication is: "+mult+"\n -Their division is: "+div.toFixed(3));
        }

    } else {
        console.log("Comprobar los parametros e insertar solo numeros");
    }
    function askAgain(){
        let again = prompt("Do you want to introduce new numbers? y/n")
        switch (again) {
            case "y":
                return calculatorPro(newNumbers());
            case "n":
                return console.log("Ok. Have a nice day! :)")
            default:
                console.log("Invalid answer.")
                return askAgain()
        }
    }
    askAgain()
}

let numbersInserted = newNumbers()
calculatorPro(numbersInserted)