module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Programs', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      subProgramId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Program',
          key: 'id',
        }
      },
      parentProgramId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Program',
          key: 'id',
        }
      }
    });
  },
  down(queryInterface/* , Sequelize */) {
    return queryInterface.dropTable('Programs');
  }
};
