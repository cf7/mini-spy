'use strict';
module.exports = function(sequelize, DataTypes) {
  var StaffMember = sequelize.define('StaffMember', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StaffMember;
};