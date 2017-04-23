// A typical Express webservice. All JSON, all the time. Logging with Morgan.
require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const neo4j = require('neo4j-driver');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.DB === 'neo4j') { // Neo4j

  const driver = neo4j.driver(process.env.NEO4J_DATABASE_URL, neo4j.auth.basic(process.env.DB_USERNAME, process.env.DB_PASSWORD));
  driver.onCompleted(() => {
    console.log("Succesfully connected to Neo4j database . . .");
  });
  driver.onError = ((error) => {
    console.error("DB connection failed . . .", error);
  });
  app.set('driver', driver);
  require(path.join(__dirname, '/neo4j-routes'))(app);

} else { // PostgreSQL

  require(path.join(__dirname, '/postgres-routes'))(app);

}

// A catch-all route for anything the webservice does not define.
app.get('*', (req, res) => res.status(404).send({
  message: 'Nothing to see here',
}));

module.exports = app;
