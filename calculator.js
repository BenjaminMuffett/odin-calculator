// add function - returns the sum of two digits
function add(a, b) {
    return a + b
}

// subtract function - returns the difference of two digits 
function subtract(a, b) {
    return (a - (b))
}

// multiply function - returns the product of two digits 
function multiply(a, b) {
    return a * b
}

// division function - returns the quotient of two digits and checks divisor not equal to zero
function divide(a, b) {
    if (b == 0) {
        return "Are you sure about that?"
    } else {
        return Math.round(((a / b) + Number.EPSILON) * 100) / 100
    }
}

function operate (n1, n2, operator) {
    switch (operator) {
        case '+': 
            return add(n1, n2)
        case '-':
            return subtract(n1, n2)
        case '*':
            return multiply(n1, n2)
        case '/':
            return divide(n1, n2)
    }
}

let number1 = '' 
let number2 = ''
let number3 = ''
let result = ''
let operation = ''

function clear() {
    number1 = '' 
    number2 = ''
    number3 = ''
    result = ''
    operation = ''
    display.textContent = '0'
}


// if ( number1 == +display.textContent) {
//     display.textContent = ''
// }

let display = document.querySelector('#display')
const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener("click", () => {
    // if (result.toString().length > 0) {
    //     number2 = '' + number.textContent
    // }
    if (operation.length == 0) {
        number1 = number1 + number.textContent
        display.textContent = number1
    }
    if (operation.length == 1) {
        number2 = number2 + number.textContent
        display.textContent = number2
    }

    })
})
//operation.length == 0 &&
const operators = document.querySelectorAll('.operator.normal')
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (number1.toString().length > 0) {
            operation = operator.textContent
        }
        if (result.toString().length > 0) {
            operation = operator.textContent
            result = ''
            number2 = ''
        }
        if (operation.length == 1 && number1.toString().length > 0 && number2.length > 0) {
            number3 = operate(+number1, +number2, operation)
            number1 = number3
            number2 = ''
            display.textContent = number1
            operation = operator.textContent
        }
    })
})

const equal = document.querySelector('#equal')
equal.addEventListener('click', () => {
    if (number1.toString().length > 0 && operation.length > 0) {
        result = operate(+number1, +number2, operation)
        number1 = result
        display.textContent = number1
    }
    
    
    
    

    
})

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener('click', clear)
