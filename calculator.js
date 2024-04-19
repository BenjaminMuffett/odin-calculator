// add function - returns the sum of two digits
function add(a, b) {
    return a + b
}

// subtract function - returns the difference of two digits 
function subtract(a, b) {
    return a - b
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

let number1 = Number() 
let number2 = Number()
let number3 = Number()
let result = Number()
let operation = ''

function clear() {
    number1 = Number() 
    number2 = Number()
    number3 = Number()
    result = Number()
    operation = ''
    display.textContent = '0'
}

let display = document.querySelector('#display')

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if ( number1 == +display.textContent) {
            display.textContent = ''
        }
        if (display.textContent.length < 11) {
            display.textContent = display.textContent + number.textContent
        }
        
    })
})
const operators = document.querySelectorAll('.operator.normal')
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (operation.length > 0) {
            number2 = +display.textContent
            display.textContent = operate(number1, number2, operation)
            number1 = +display.textContent
            number2 = Number()
            operation = ''
        }
        number1 = +display.textContent
        operation = operator.textContent 
    })
})

const equal = document.querySelector('#equal')
equal.addEventListener('click', () => { 
    number2 = +display.textContent
    result = operate(number1, number2, operation)
    if (result.toString().length > 11) {
        display.textContent = 'Well, this has gotten out of hand...'
    } else {
        display.textContent = result
        number1 = Number() 
        number2 = Number()
    }
    
})

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener('click', clear)
