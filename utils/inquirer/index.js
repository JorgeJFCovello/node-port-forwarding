const msgs = require('./msg-bienvenida')
const others = require('./others')
const envVariabelsChecker = require('./env-variables-checker')

module.exports = {
    ...msgs, ...others, ...envVariabelsChecker
}