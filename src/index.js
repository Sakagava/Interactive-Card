import './index.html'
import './index.css'
import { inputs, inputCompleteButton } from '../modules/variables'
import { startInput, inputNum, inputHold, inputShortNum, inputInImg, defaultInput, inputError, inputDone, checkAllInputs, startWindowOutput, sliceValue } from '../modules/functions'
import { verificationValue, verificationLength, verificationHold, verificationNum, verificationMM, verificationYY, checkMaxValue } from '../modules/verification'

inputs.onpointerdown = function (e) {
    if (e.target.id == 'buttonConfirm') {
        checkAllInputs(e)
        return
    }

    if (e.target.type) {
        const inputTarget = e.target;

        startInput(inputTarget)

        if (verificationValue(inputTarget)) {
            inputTarget.value = ''
        } 

        inputTarget.onkeydown = function(e) {
            if (verificationLength(inputTarget, e.key)) {
                e.preventDefault()
                return
            }
            
            const targetLength = inputTarget.value.length

            switch (inputTarget.name) {

                case 'inputNum': 
                    inputNum(e, inputTarget, targetLength)
                    break;

                case 'inputHold':
                    inputHold(e)
                    break

                case 'inputCVC':
                    inputShortNum(e)
                    break

                case 'inputMM':
                    inputShortNum(e)
                    break

                case 'inputYY':
                    inputShortNum(e)
                    break
            }
        }

        inputTarget.onkeyup = function () {
            if (checkMaxValue(inputTarget)) {
                sliceValue(inputTarget)
                return
            }

            inputInImg (this)
        }
        
        inputTarget.onblur = function () {
            if (inputTarget.value.length == 0) {
                defaultInput(inputTarget)
                return
            }
            
            if (verificationHold(inputTarget)) {
                inputError(inputTarget, 'Incorrect value')
                return
            }

            if (verificationMM(inputTarget)) {
                inputError(inputTarget, `Can't be blank` )
                return
            }
            
            if (verificationYY(inputTarget)) {
                inputError(inputTarget, `Can't be blank`)
                return
            }

            if (verificationNum(inputTarget)) {
                inputError(inputTarget, `Can't be blank`)
                return
            } else {
                inputDone(inputTarget);
                return
            }
        }
    }
}

inputCompleteButton.onpointerdown = function () {
    startWindowOutput()
}