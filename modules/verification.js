import { allInputsCard, HOLD_REGEXP } from "./variables";

export function verificationValue (elem) {
    return elem.value == allInputsCard[elem.name].value
}

export function verificationLength (elem, key) {
    return elem.value.length >= allInputsCard[elem.name].maxLength && key.length == 1
}

export function checkForNumber (key) {
    return !Number(key) && key !== '0' && key.length == 1
}

export function checkMaxValue (elem) {
    return elem.value.length > allInputsCard[elem.name].maxLength
}

export function verificationMM (elem) {
    return elem.name == 'inputMM' && elem.value > 12
}

export function verificationYY (elem) {
    return elem.name == 'inputYY' && elem.value < 23
}

export function verificationHold (elem) {
    return elem.name == 'inputHold' && (elem.value.toUpperCase().match(HOLD_REGEXP) == null)
}

export function verificationNum (elem) {
    return elem.value.length !== allInputsCard[elem.name].maxLength && elem.name !== 'inputHold'
}