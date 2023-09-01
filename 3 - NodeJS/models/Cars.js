const mongoose = require('mongoose');

const Cars = mongoose.model('Cars', 
{
    nome: String,
    marca: String,
    quilometragem: Number,
    ano: Number,
    cor: String
})

module.exports = Cars;