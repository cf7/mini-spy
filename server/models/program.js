module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define('Program', {
    name: DataTypes.STRING
  }, {
    freezeTableName: true,
    classMethods: {
      associate(models) {
        Program.belongsTo(models.Program, {
          foreignKey: 'parentProgramId',
          as: 'parentProgram',
        });
        Program.hasMany(models.Program, {
          foreignKey: 'subProgramId',
          as: 'subPrograms',
        });
      },
    },
  });
  return Program;
};
