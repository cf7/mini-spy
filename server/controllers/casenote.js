const CaseNote = require('../models').CaseNote;

module.exports = {
  create(request, response) {
    return CaseNote
      .create({
        clientId: request.body.client,
        authorId: request.body.author,
        content: request.body.content
      })
      .then((casenote) => response.status(201).send(casenote))
      .catch((error) => {
        console.log(error);
        response.status(400).send(error);
      });
  },

  deleteAll(request, response) {
    if (process.env.NODE_ENV === 'test') {
      CaseNote.truncate({ cascade: true, restartIdentity: true }).then(() => response.status(204).send({}));
    } else {
      response.status(403).send({ message: 'Whoa there' });
    }
  }
};