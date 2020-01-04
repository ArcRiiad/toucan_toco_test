'use strict';

let dataUser = require('../config/data.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let formatedData = dataUser.map(user => {
      return ({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        gender: user.gender,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    })

    return queryInterface.bulkInsert('Users', formatedData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
