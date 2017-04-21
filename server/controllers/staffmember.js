const StaffMember = require('../models').StaffMember;

module.exports = {
  create(request, response) {
    return StaffMember
      .create({
        firstName: request.body.firstname,
        lastName: request.body.lastname,
        userName: request.body.username,
        passwordHash: request.body.passwordhash
      })
      .then((staffmember) => response.status(201).send(staffmember))
      .catch((error) => response.status(400).send(error));
  }
};
