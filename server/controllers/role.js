const Role = require('../models').Role;

module.exports = {
  create(request, response) {
    return Role
      .create({
        name: request.body.name,
        description: request.body.description
      })
      .then((role) => response.status(201).send(role))
      .catch((error) => response.status(400).send(error));
  },

  list(request, response) {
    return Role
      .findAll({})
      .then((roles) => response.status(200).send(roles))
      .catch((error) => response.status(400).send(error));
  },

  deleteAll(request, response) {
    if (process.env.NODE_ENV === 'test') {
      Role.truncate({ cascade: true, restartIdentity: true }).then(() => response.status(204).send({}));
    } else {
      response.status(403).send({ message: 'Whoa there' });
    }
  }
};
