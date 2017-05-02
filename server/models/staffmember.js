module.exports = (sequelize, DataTypes) => {
  const StaffMember = sequelize.define('StaffMember', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, {
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
        StaffMember.hasMany(models.Client, {
          foreignKey: 'caseManagerId',
          as: 'Clients',
        });
        StaffMember.hasMany(models.CaseNote, {
          foreignKey: 'author'
        });
        StaffMember.belongsToMany(models.Role, {
          through: 'StaffMemberRole',
          foreignKey: 'roleId',
          otherKey: 'staffMemberId',
        });
      },
    },
  });
  return StaffMember;
};
