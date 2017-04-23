const ClientController = require('../server/controllers').Client;
const StaffMemberController = require('../server/controllers').StaffMember;
const RoleController = require('../server/controllers').Role;
const CaseNoteController = require('../server/controllers').CaseNote;

module.exports = (app) => {
  app.post('/clients', ClientController.create);
  app.post('/staffmembers', StaffMemberController.create);
  app.get('/staffmembers', StaffMemberController.list);
  app.delete('/staffmembers', StaffMemberController.deleteAll);
  app.post('/roles', RoleController.create);
  app.get('/roles', RoleController.list); // build in optional pagination later
  app.delete('/roles', RoleController.deleteAll);
  app.post('/casenotes', CaseNoteController.create);
  app.delete('/casenotes', CaseNoteController.deleteAll);
};
