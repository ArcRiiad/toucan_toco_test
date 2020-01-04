'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['Female', 'Male', 'Other']
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};