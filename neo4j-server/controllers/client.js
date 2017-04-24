module.exports = {
  create(request, response) {
    let session = request.driver.session();
    let queryString = 'CREATE (c:Client { firstName: {firstName} }) RETURN c';
    let params = { firstName: 'John' };
    session.run(queryString, params)
      .then((result) => {
        console.log("Success!!!");
        console.log(result);
        session.close();
      })
      .catch((error) => {
        console.error(error);
      });
  },

  deleteAll(request, response) {

  }
};