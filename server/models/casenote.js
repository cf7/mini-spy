module.exports = (sequelize, DataTypes) => {
  const CaseNote = sequelize.define('CaseNote', {
    clientId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    content: DataTypes.STRING,
  }, {
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
        CaseNote.belongsTo(models.StaffMember, {
          foreignKey: 'author'
        });
      },
    },
  });
  return CaseNote;
};
