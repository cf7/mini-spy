/* eslint-disable no-unused-vars, arrow-body-style */
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
    return queryInterface.bulkInsert('StaffMemberRole', [
      {
        staffMemberId: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        staffMemberId: 2,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        staffMemberId: 3,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        staffMemberId: 4,
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        staffMemberId: 5,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        staffMemberId: 6,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        staffMemberId: 7,
        roleId: 3,
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
    return queryInterface.bulkDelete('StaffMemberRole', null, {});
  }
};
