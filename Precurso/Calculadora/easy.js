const addEventListener = () => {
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArray = Array.from(keypadButtons); 

    keypadButtonsArray.forEach((button) =>{
        button.addEventListener('click', ()=>{
            calculator(button, display);
        });
    });

};


const calculator = (button,display) => {
   switch (button.innerHTML) {
        case 'AC':
            clear(display)
            break;

        case '=':
            calculate(display)
            break;
        
        case '+/-':
            calculateVs(display)
            break;

        default:
            update(display,button)
            break;
   }
}

const calculate = (display) => {
   display.innerHTML = eval(display.innerHTML);
}
 

const calculateVs = (display) => {
    display.innerHTML = -eval(display.innerHTML);
}

const update = (display, button) => {
    if(display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML
}

const clear = (display) => {
    display.innerHTML = 0;
}


addEventListener();