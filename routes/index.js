const Role = require('../server/models').Role;
const StaffMember = require('../server/models').StaffMember;

module.exports = (app) => {
  app.post('/roles', Role.create);
  app.get('/roles', Role.findAll); // build in optional pagination later
  app.post('/staffmembers', StaffMember.create);
  app.get('/staffmembers', StaffMember.findAll);
};