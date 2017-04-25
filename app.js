// A typical Express webservice. All JSON, all the time. Logging with Morgan.
require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const neo4j = require('neo4j-driver').v1;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.DB === 'neo4j') { // Neo4j
  console.log(neo4j);
  const driver = neo4j.driver(process.env.NEO4J_DATABASE_URL, neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD), { encrypted: 'ENCRYPTION_OFF' });
  driver.onCompleted = () => {
    console.log("Succesfully connected to Neo4j database . . .");
  };
  driver.onError = (error) => {
    console.error("DB connection failed . . .", error);
  };
  app.request.driver = driver;
}

/*
  Options for initializing Neo4j with scripts
  1) Just make sure everyone has brew installed neo4j
  and recorded their own passwords
  Instruct developers to add username and password
  they have chosen into the .env file
  2) Disable authentication
  keep a copy of the .neo4j.conf file in the repo
  when the script runs, it navigates to the current Neo4j
  directory (which should be in its default location
  Users/Username/Documents/Neo4j on a Mac) and deletes the
  current .neo4j.conf and copies the repo's .neo4j.conf into
  the Docuemnts/Neo4j location
*/

// else PostgreSQL

require(path.join(__dirname, '/routes'))(app);

// A catch-all route for anything the webservice does not define.
app.get('*', (req, res) => res.status(404).send({
  message: 'Nothing to see here',
}));

module.exports = app;
