const Role = require('../server/controllers').Role;
const StaffMember = require('../server/controllers').StaffMember;

module.exports = (app) => {
  app.post('/roles', Role.create);
  app.get('/roles', Role.list); // build in optional pagination later
  // app.post('/staffmembers', StaffMember.create);
  // app.get('/staffmembers', StaffMember.findAll);
};