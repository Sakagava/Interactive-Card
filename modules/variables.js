import '../src/index.html'

export const inputsPaymentCard = document.getElementsByClassName('inputsPaymentCard_inputs')[0];
export const inputComplete = document.getElementsByClassName('inputComplete')[0];
export const inputCompleteButton = document.getElementById('inputComplete_button');
export const numOnImg = document.getElementsByClassName('cardFront_requisites_num')[0];
export const holdOnImg = document.getElementsByClassName('cardFront_requisites_hold')[0];
export const mmOnImg = document.getElementsByClassName('cardFront_requisites_mm')[0];
export const yyOnImg = document.getElementsByClassName('cardFront_requisites_yy')[0];
export const cvcOnImg = document.getElementsByClassName('cardBack_cvc')[0];
export const buttonConfirm = document.getElementById('buttonConfirm');
export const inputs = document.getElementsByClassName('inputsPaymentCard_inputs')[0];
export const errorText = document.getElementsByClassName('warningText')
export const HOLD_REGEXP = /^\S{0,}[A-Z]{3,}\s[A-Z]{3,}$/gm

export const allInputsCard = {
    inputHold: {
        value: "e.g. Jane Appleseed",
        imgValue: 'JANE APPLESEED',
        maxLength: 21,
        imgChild: 'cardFront_requisites_hold',
        space: 1,
        warning: warningHold,
    },
    inputNum: {
        value: "e.g. 1234 5678 9123 0000",
        imgValue: '0000 0000 0000 0000',
        maxLength: 19,
        checkLength: [4, 9, 14],
        imgChild: 'cardFront_requisites_num',
        space: 3,
        warning: warningNum,
    },
    inputMM: {
        value: "MM",
        imgValue: '00',
        maxLength: 2,
        imgChild: 'cardFront_requisites_mm',
        warning: warningDate,
    },
    inputYY: {
        value: "YY",
        imgValue: '00',
        maxLength: 2,
        imgChild: 'cardFront_requisites_yy',
        warning: warningDate,
    },
    inputCVC: {
        value: "e.g. 123",
        imgValue: '000',
        maxLength: 3,
        imgChild: 'cardBack_cvc',
        warning: warningCVC,
    },
}