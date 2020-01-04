var models = require("../models");

module.exports.getUserById = async function getUserById(userId) {
  let user = await models.User.findOne({ where: { id: userId } })

  if (!user) throw new Error('User not found')

  return user
}

module.exports.getAllUsers = async function getAllUsers() {
  let user = await models.User.findAll()

  return user
}
