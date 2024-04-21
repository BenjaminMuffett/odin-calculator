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

function displayCheck(number) {
    let roundVal = Math.round(((number) + Number.EPSILON) * 100) / 100
    if (roundVal.toString().length < 13 || roundVal == '') {
        return roundVal
    } else {
        return 'Too many digits :('
    }
    //could also maybe use number.toFixed(2) and not need a function
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

function negPos() {
    if (number1 == display.textContent) {
        number1 = (+number1 * -1).toString()
        display.textContent = number1

    }
    if (number2 == display.textContent) {
        number2 = (+number2 * -1).toString()
        display.textContent = number2
    }
}

function toPercent() {
    if (number1 == display.textContent) {
        number1 = (+number1 / 100).toString()
        display.textContent = number1

    }
    if (number2 == display.textContent) {
        number2 = (+number2 / 100).toString()
        display.textContent = number2
    }
}


let display = document.querySelector('#display')
const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener("click", () => {
    if (operation.length == 0) {
        if (number1.toString().length <12) {
            number1 = number1 + number.textContent
            display.textContent = number1
        }
    }

    if (result.toString().length > 0 && number1 == display.textContent ) {
        clear()
        number1 = number1 + number.textContent
        display.textContent = number1
    }

    if (operation.length == 1) { 
        if (number2.toString().length <12) {
            number2 = number2 + number.textContent
            display.textContent = number2
        }
    }
    
    if (display.textContent.length > 15) {
        clear()
    }

    })
})
const operators = document.querySelectorAll('.operator.normal')
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        
        if (result.toString().length > 0) {
            operation = operator.textContent
            result = ''
            number2 = ''
        }
        if (operation.length == 1 && number1.toString().length > 0 && number2.length > 0) {
            number3 = displayCheck(operate(+number1, +number2, operation))
            number1 = number3
            number2 = ''
            display.textContent = number1
            operation = operator.textContent
        }

        if (number1.toString().length > 0) {
            operation = operator.textContent
        }
    })
})

const equal = document.querySelector('#equal')
equal.addEventListener('click', () => {
    if (number1.toString().length > 0 && operation.length > 0) {
        result = displayCheck(operate(+number1, +number2, operation))
        number1 = result
        display.textContent = number1
    }
})

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener('click', clear)

const signChange = document.querySelector('#sign')
signChange.addEventListener('click', negPos)

const percentChange = document.querySelector('#percent')
percentChange.addEventListener('click',toPercent)