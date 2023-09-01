const express = require('express');
const sports = require('../routes/sports');

module.exports = function(app) 
{
    app.use(express.json());
    app.use('/api/sports', sports);
}