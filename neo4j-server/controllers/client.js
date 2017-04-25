module.exports = {
  create(request, response) {
    let session = request.driver.session();
    let queryString = 'CREATE (c:Client {params}) RETURN c';
    let parameters = { params: request.body };
    session.run(queryString, parameters)
      .then((result) => {
        session.close();
        response.status(201).send({ message: "Successfully created client profile", result: result });
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  },
  list(request, response) {

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