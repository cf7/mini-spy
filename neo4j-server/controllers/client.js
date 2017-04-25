module.exports = {
  create(request, response) {
    let session = request.driver.session();
    let queryString = 'CREATE (c:Client { firstName: {firstName} }) RETURN c';
    let params = { firstName: 'John' };
    session.run(queryString, params)
      .then((result) => {
        session.close();
        response.status(201).send({ message: "Successfully created client profile", result: result });
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  },

  deleteAll(request, response) {
    let session = request.driver.session();
    let queryString = 'MATCH (n:Client) DETACH DELETE n';
    session.run(queryString)
      .then(() => {
        session.close();
        response.status(200).send("Successfully deleted all client profiles");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }
};