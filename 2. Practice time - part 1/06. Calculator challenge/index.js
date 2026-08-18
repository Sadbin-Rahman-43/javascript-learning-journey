let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sum = document.getElementById("sum-el")

function add() {
    let res = num1 + num2
    sum.textContent = "sum: " + res
}

function subtract() {
    let res = num1 - num2
    sum.textContent = "sum: " + res
}

function divide() {
    let res = num1 / num2
    sum.textContent = "sum: " + res
}

function multiply() {
    let res = num1 * num2
    sum.textContent = "sum: " + res
}
