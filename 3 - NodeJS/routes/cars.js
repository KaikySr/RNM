const express = require('express');
const router = express.Router();
const CarsController = require('../controller/CarController');


router 
    .get('/', CarsController.getAllCars)
    .get('/:id', CarsController.getById)
    .post('/', CarsController.create)
    .patch('/:id', CarsController.updateById)
    .delete('/:id', CarsController.deleteById)

module.exports = router;