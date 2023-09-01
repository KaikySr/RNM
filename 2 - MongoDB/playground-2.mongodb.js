////Create And Use Database
    use ('bancoDeTeste')

////Insert data on collection
    // const arrayPeoples = 
    // [
    //     {
    //         name: "Kaiky",
    //         lastname: "Ribeiro",
    //         salary: 20000
    //     },
    //     {
    //         name: "Don",
    //         lastname: "Gon",
    //         salary: 18000
    //     },
    // ]

    // db.people.insertMany(arrayPeoples) ////insertMany - inserir varias pessoas de uma vez
                                          ////insertOne - inserir uma pessoa só
use ('bancoDeTeste')
//Serach data
    db.people.find()
    // db.people.find({ name: "diferentao"})   ////Pesquisar por nome completo
    // db.people.find({ name: /o/ })    ////Pesquisar por nomes que tenham a letra o
    // db.people.find({ $and: [{name: 'Kaiky'} , {lastname: 'Ribeiro'}] }) ////Duas condições para pesquisar
    // db.people.find({ salary: {$gt: 123} }) ////Pesquisar salarios MAIORES que 123
    // db.people.find({ salary: {$gte: 1234} }) ////Pesquisar salarios MAIORES ou IGUAIS a 1234
    // db.people.find({ {name: 1, lastname: 1} })

use ('bancoDeTeste')
//Update Data
    // db.people.updateOne(
    //     { _id: ObjectId('64db667ab986b13548ae40bc')},
    //     { $set:{ name: 'diferentao' }}
    // )

    db.people.updateMany(
        { salary: 20000 },
        { $set: {salary:12345}}
    )

use ('bancoDeTeste')
//Delete Data
    // db.people.deleteOne({
    //     name: /diferentao/   //Deletar somente 1(o primeiro) atraves do nome que contenha diferentao
    // })

    // db.people.deleteMany({
    //     name: /o/            //Deletar todos que contenham a letra 'o'
    // })