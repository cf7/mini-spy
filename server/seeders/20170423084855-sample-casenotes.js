/* eslint-disable no-unused-vars */
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
    return queryInterface.bulkInsert('CaseNote', [
      {
        clientId: 1,
        authorId: 1,
        content: 'Here is casenote for the client.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clientId: 2,
        authorId: 1,
        content: 'Here is casenote for the client.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clientId: 3,
        authorId: 5,
        content: 'Here is casenote for the client.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clientId: 4,
        authorId: 4,
        content: 'Here is casenote for the client.',
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
    return queryInterface.bulkDelete('CaseNote', null, {});
  }
};
