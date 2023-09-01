const bodyParser = require('body-parser');
const person = require('./person');
const cars = require('./cars');
const auth = require('./auth')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        cars,
        person,
        auth
    )
}