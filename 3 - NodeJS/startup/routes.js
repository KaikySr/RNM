const express = require('express');
const person = require('../routes/person');
const cars = require('../routes/cars');
const auth = require('../routes/auth')

module.exports = function(app) 
{
    app.use(express.json());
    app.use('/api/person', person);
    app.use('/api/cars', cars);
    app.use('/api/auth', auth);
}