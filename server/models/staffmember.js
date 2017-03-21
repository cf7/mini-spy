module.exports = (sequelize, DataTypes) => {
  const StaffMember = sequelize.define('StaffMember', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) { // eslint-disable-line no-unused-vars
        // associations can be defined here
      },
    },
  });
  return StaffMember;
};
