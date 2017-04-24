let ClientController;
let StaffMemberController;
let RoleController;
let CaseNoteController;

if (process.env.DB === 'neo4j') {
  ClientController = require('../neo4j-server/controllers').Client;
  StaffMemberController = require('../neo4j-server/controllers').StaffMember;
  RoleController = require('../neo4j-server/controllers').Role;
  CaseNoteController = require('../neo4j-server/controllers').CaseNote;
} else {
  ClientController = require('../server/controllers').Client;
  StaffMemberController = require('../server/controllers').StaffMember;
  RoleController = require('../server/controllers').Role;
  CaseNoteController = require('../server/controllers').CaseNote;
}

module.exports = (app) => {
  app.post('/clients', ClientController.create);
  // app.post('/staffmembers', StaffMemberController.create);
  // app.get('/staffmembers', StaffMemberController.list);
  // app.delete('/staffmembers', StaffMemberController.deleteAll);
  // app.post('/roles', RoleController.create);
  // app.get('/roles', RoleController.list); // build in optional pagination later
  // app.delete('/roles', RoleController.deleteAll);
  // app.post('/casenotes', CaseNoteController.create);
  // app.delete('/casenotes', CaseNoteController.deleteAll);
};
