'use strict';
module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define('Client', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nickname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    casePlan: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Client;
};