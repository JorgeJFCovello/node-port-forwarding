require('dotenv').config()
const {
    welcomeMsg,
    setEnvVariables,
    pausa 
} = require('./inquirer/index.js')

const Connection = require('../server/client-connection')

class Console {
    constructor(){
        welcomeMsg()
    }
    
    startMenu = async() => {
        await pausa()
        let eleccion = 0
        await setEnvVariables()
        const connection = new Connection()
        connection.initialize()
    }

}

module.exports = Console