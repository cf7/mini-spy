module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Role', [
      {
        name: 'administator',
        description: 'administrates',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'staff',
        description: 'staffs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'volunteer',
        description: 'volunteers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Role', null, {});
  }
};
