const userService = require('../services/userService')

module.exports.getUserByIdController = function getUserByIdController(req, res, next) {
  userService.getUserById(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(error => res.status(400).json({ message: error.message }))
}


module.exports.getAllUserController = function getAllUserController(req, res, next) {
  userService.getAllUsers()
    .then(result => res.status(200).json(result))
    .catch(error => res.status(400).json({ message: error.message }))
}