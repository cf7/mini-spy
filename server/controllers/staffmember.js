const StaffMember = require('../models').StaffMember;

module.exports = {
  create(request, response) {
    return StaffMember
      .create({
        username: request.body.username,
        password: request.body.password,
        firstName: request.body.firstName,
        lastName: request.body.lastName
      })
      .then((staffmember) => response.status(201).send(staffmember))
      .catch((error) => {
        console.log(error);
        response.status(400).send(error);
      });
  },

  list(request, response) {
    return StaffMember
      .findAll({})
      .then((staffmembers) => response.status(200).send(staffmembers))
      .catch((error) => response.status(400).send(error));
  },

  deleteAll(request, response) {
    if (process.env.NODE_ENV === 'test') {
      StaffMember.truncate({ cascade: true, restartIdentity: true }).then(() => response.status(204).send({}));
    } else {
      response.status(403).send({ message: 'Whoa there' });
    }
  }

};
