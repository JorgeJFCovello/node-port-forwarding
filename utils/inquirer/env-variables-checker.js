const inquirer = require('inquirer')
require('colors')
require('dotenv').config()

const {readInputWithoutCheck, readInput,confirmar} = require('./others')

const setEnvVariables = async() => {
    let returnedValue  = await readInputWithoutCheck(`Pick the SSH ip to connect (default: ${ process.env.SSH_IP || '127.0.0.1' })`)
    process.env.SSH_IP = returnedValue || '127.0.0.1'
    returnedValue = await readInputWithoutCheck(`Pick the SSH port to connect (default: ${ process.env.SSH_PORT || '22' })`)
     process.env.SSH_PORT = returnedValue || '22'
     returnedValue = await readInputWithoutCheck(`Pick the REMOTE ip to connect (default: ${ process.env.REMOTE_IP || '127.0.0.1' })`)
     process.env.REMOTE_IP = returnedValue || '127.0.0.1'
     returnedValue = await readInputWithoutCheck(`Pick the REMOTE port to connect (default: ${ process.env.REMOTE_PORT || '3306' })`)
     process.env.REMOTE_PORT = returnedValue || '3306'
     returnedValue = await readInputWithoutCheck(`Pick the Local ip to work (default: ${ process.env.LOCAL_IP || '127.0.0.1' })`)
     process.env.LOCAL_IP = returnedValue || '127.0.0.1'
     returnedValue = await readInputWithoutCheck(`Pick the Local port to work (default: ${ process.env.LOCAL_PORT || '8080' })`)
     process.env.LOCAL_PORT = returnedValue || '8080'
     returnedValue = await readInput(`Write your username: `)
     process.env.USERNAME = returnedValue || '8080'
     returnedValue = await confirmar(`Are you going to use a private key file? `)
     if(!returnedValue){
         returnedValue = await readInput(`Write your password: `)
         process.env.USERPASSWORD = returnedValue
     } else {
         returnedValue = await readInput(`Write the path to your private Key: `)
         process.env.PATH_TO_PRIVATE_KEY = returnedValue
     }
     console.log(!process.env.PATH_TO_PRIVATE_KEY)
}
module.exports = {
    setEnvVariables
}