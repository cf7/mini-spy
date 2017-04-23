const Client = require('../models').Client;

module.exports = {
  create(request, response) {
    return Client
      .create({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        nickname: request.body.nickname,
        birthdate: request.body.birthdate,
        email: request.body.email,
        phoneNumber: request.body.phoneNumber,
        casePlan: request.body.casePlan
      })
      .then((client) => response.status(201).send(client))
      .catch((error) => {
        console.log(error);
        response.status(400).send(error);
      });
  },

  deleteAll(request, response) {
    if (process.env.NODE_ENV === 'test') {
      Client.truncate({ cascade: true, restartIdentity: true }).then(() => response.status(204).send({}));
    } else {
      response.status(403).send({ message: 'Whoa there' });
    }
  }
};