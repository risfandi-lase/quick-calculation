const sumButton = document.querySelector(`.summ`)
const substractButton = document.querySelector(`.substract`)
const multiplyButton = document.querySelector(`.multiply`)
const divideButton = document.querySelector(`.divide`)
const resetButton = document.querySelector(`.reset`)
// button

const firstInput = document.querySelector(`.input-one`)
const secondInput = document.querySelector(`.input-two`)
// user input value

const resultCount = document.querySelector(`.result`)
// changing result

sumButton.addEventListener(`click`, startSum)
substractButton.addEventListener(`click`, startSubstract)
multiplyButton.addEventListener(`click`, startMultiply)
divideButton.addEventListener(`click`, startDivide)
resetButton.addEventListener(`click`, resetNumber)

function startSum(){
    const num1 = parseFloat(firstInput.value)
    const num2 = parseFloat(secondInput.value) 
    const result = num1 + num2
    resultCount.textContent = result
}

function startSubstract(){
    const num1 = parseFloat(firstInput.value)
    const num2 = parseFloat(secondInput.value) 
    const result = num1 - num2
    resultCount.textContent = result
}

function startMultiply(){
    const num1 = parseFloat(firstInput.value)
    const num2 = parseFloat(secondInput.value) 
    const result = num1 * num2
    resultCount.textContent = result
}

function startDivide(){
    const num1 = parseFloat(firstInput.value)
    const num2 = parseFloat(secondInput.value) 
    const result = num1 / num2
    resultCount.textContent = result
    if (num2 === 0){
        alert(`Can't Divide by Zero`)
    }
}

function resetNumber(){
    firstInput.value = ``
    secondInput.value = ``
    resultCount.textContent =``
}
