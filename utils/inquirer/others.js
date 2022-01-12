const inquirer = require('inquirer')
require('colors')

const confirmacion = {
    type: 'input',
    name: 'value',
    message: `Presione ${'ENTER'.blue} para continuar`
}
const pausa = async() => {
    await inquirer.prompt(confirmacion)
}

const readInputWithoutCheck = async(msg) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: msg
        }
    ]
    const {desc} = await inquirer.prompt(question)
    return desc
}

const readInput = async(msg) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: msg,
            validate(value) {
                if(value.length === 0)
                    return 'This field cannot be blank'
                return true
            }
        }
    ]
    const {desc} = await inquirer.prompt(question)
    return desc
}


const confirmar = async (msg) => {

    const confirmationQuestion = [
        {
            type: 'confirm',
            name: 'ok',
            message: msg
        }
    ]
    const {ok} = await inquirer.prompt(confirmationQuestion)
    return ok
}


module.exports = {

    pausa,
    confirmar,
    readInputWithoutCheck,
    readInput
}