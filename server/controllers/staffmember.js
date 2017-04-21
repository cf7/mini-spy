const StaffMember = require('../models').StaffMember;

module.exports = {
  create(request, response) {
    return StaffMember
      .create({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        username: request.body.username,
        password: request.body.password
      })
      .then((staffmember) => response.status(201).send(staffmember))
      .catch((error) => {
        console.log(error);
        response.status(400).send(error);
      });
  }
};
