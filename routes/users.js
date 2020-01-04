var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController')

/* GET users listing. */
router.get('/:id', userController.getUserByIdController);
router.get('/', userController.getAllUserController);

module.exports = router;
