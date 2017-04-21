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
    return queryInterface.bulkInsert('StaffMember', [
      {
        username: 'staff123',
        password: 'thisisapassword',
        firstName: 'Carrie',
        lastName: 'Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'newstaff',
        password: 'thisisapassword1',
        firstName: 'Kathy',
        lastName: 'Jones',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'staffer',
        password: 'thisisapassword2',
        firstName: 'Ted',
        lastName: 'Greene',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'staff-person',
        password: 'thisisapassword3',
        firstName: 'Ben',
        lastName: 'Shin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'staff',
        password: 'thisisapassword4',
        firstName: 'Alice',
        lastName: 'Riley',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'hmiles',
        password: 'thisisapassword4',
        firstName: 'Henry',
        lastName: 'Miles',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'adiaz',
        password: 'thisisapassword4',
        firstName: 'Alyssa',
        lastName: 'Diaz',
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
    return queryInterface.bulkDelete('StaffMember', null, {});
  }
};
