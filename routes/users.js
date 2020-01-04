var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController')
var userValidator = require('../middlewares/validators/userValidator')

/* GET users listing. */
router.get('/:id', userValidator.checkUserId, userController.getUserByIdController);
router.get('/', userController.getAllUserController);

module.exports = router;
