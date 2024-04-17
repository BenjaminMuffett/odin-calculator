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

let number1 = 0 
let number2 = 1
let operator = '+'

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