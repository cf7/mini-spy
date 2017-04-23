const RoleController = require('../server/controllers').Role;
const StaffMemberController = require('../server/controllers').StaffMember;

module.exports = (app) => {
  app.post('/roles', RoleController.create);
  app.get('/roles', RoleController.list); // build in optional pagination later
  app.delete('/roles', RoleController.deleteAll);
  app.post('/staffmembers', StaffMemberController.create);
  // app.get('/staffmembers', StaffMemberController.findAll);
};
