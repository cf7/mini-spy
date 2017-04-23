module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CaseNote', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Client',
          key: 'id',
        },
      },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'StaffMember',
          key: 'id',
        },
      },
      content: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },

  down: (queryInterface /* , Sequelize */) => {
    return queryInterface.dropTable('CaseNote');
  }
};
