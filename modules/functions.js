import '../src/index.html'
import '../src/index.css'
import { propertiesDoneInput, propertiesErrorInput } from "./properties";
import { inputs, allInputsCard, errorText, inputsPaymentCard, inputComplete } from "./variables";
import { checkForNumber } from "./verification";

export function startInput(elem) {
    elem.style.outline = '0.1vw solid hsl(277, 69%, 28%)';
    elem.style.color = 'hsl(278, 68%, 11%)';
    allInputsCard[elem.name].warning.style.visibility = 'hidden';
}


export function inputNum (event, elem, targetLength) {
    if (checkForNumber(event.key)) {
        event.preventDefault()
        return
    }

    if (event.key == 'Backspace') {
        return
    }

    allInputsCard['inputNum'].checkLength.forEach((num) => {
        if (num == targetLength) {
            elem.value += ' '
        }
    })
}


export function inputHold (e) {
    if (Number(e.key)) {
        e.preventDefault()
        return
    }
}


export function inputShortNum (e) {
    if (checkForNumber(e.key)) {
        e.preventDefault()
        return
    }
}


export function inputInImg (target) {
    document.getElementsByClassName(allInputsCard[target.name].imgChild)[0].innerHTML = target.value.toUpperCase()
}


export function defaultInput (input) {
    input.value = allInputsCard[input.name].value 
    document.getElementsByClassName(allInputsCard[input.name].imgChild)[0].innerHTML = allInputsCard[input.name].imgValue
    inputDone (input)
}


export function inputError (input, text) {
    input.style.outline = propertiesErrorInput.outline
    input.style.color = propertiesErrorInput.color
    allInputsCard[input.name].warning.style.visibility = 'visible';
    allInputsCard[input.name].warning.innerHTML = `${text}`
}


export function inputDone (input) {
    input.style.outline = propertiesDoneInput.outline
    input.style.color = propertiesDoneInput.color
    allInputsCard[input.name].warning.style.visibility = 'hidden';
}

export function checkAllInputs (e) {
    for (let input of inputs.querySelectorAll('.input')) {
        if (input.value == allInputsCard[input.name].value) {
            inputError(input, `Can't be blank`)
        }
    }
    for (const text of errorText) {
        if (text.style.visibility == 'visible') {
            e.preventDefault()
            return
        }
    }

    inputsPaymentCard.style.display = 'none'
    inputComplete.style.display = 'grid'
}

export function startWindowOutput () {
    inputsPaymentCard.style.display = 'grid'
    inputComplete.style.display = 'none'

    for (let input of inputs.querySelectorAll('.input')) {
        input.value = allInputsCard[input.name].value
    }
    
    for (let elem in allInputsCard) {
        document.getElementsByClassName(`${allInputsCard[elem].imgChild}`)[0].innerHTML = allInputsCard[elem].imgValue
    }
}

export function sliceValue (elem) {
    elem.value = elem.value.slice(0, allInputsCard[elem.name].maxLength)
}