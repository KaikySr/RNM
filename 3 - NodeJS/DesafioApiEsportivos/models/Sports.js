const mongoose = require('mongoose');

const Sports = mongoose.model('Sports', 
{
    nome: String,
    categoria: String,
    descricao: String,
    preco: Number

})

module.exports = Sports;