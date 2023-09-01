const express = require('express');
const router = express.Router();
const SportsController = require('../controller/SportsController');


router 
    .get('/', SportsController.getAllSports)
    .get('/:id', SportsController.getById)
    .post('/', SportsController.create)
    .patch('/:id', SportsController.updateById)
    .delete('/:id', SportsController.deleteById)

module.exports = router;