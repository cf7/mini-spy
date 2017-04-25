# mini-spy

(Many of the commands and scripts mentioned below most likely only work for Mac OSX. Cross-platform commands are coming soon.)

### Requirements
Install `npm`, `postgres`, and `neo4j` if you don't already have them installed
```
brew install node
brew install postgresql
brew install neo4j
```

Install dependencies (run from top-level directory)
```
npm install
```

Install Sequelize-CLI Globally
```
npm install -g sequelize-cli
```
### Config Files

TODO

### Using the PostgreSQL Database

Initialize PostgreSQL for mini-spy
```
npm run db-init
```

Start Database
```
npm run db-start
```

Stop Database
```
npm run db-stop
```

Reset Database (stop, initialize, start)
```
npm run db-reset
```

### Using Sequelize

Undo Sample Data
```
sequelize db:seed:undo:all
```

Selectively Undo Sample Data
```
sequelize db:seed:undo --seed <pathToSeederFile in server/seeders>
```

Add Sample Data
```
sequelize seed:create --name <nameofseederfile>
```

After creating and modifying the seeder file (with appropriate query calls), add its path to the bash seed file
`seed_db.sh`
```
$(npm bin)/sequelize db:seed --seed $(npm bin)/../../server/seeders/<filename of newly generated seeder file>
```

### Running & Development

Start the Web server
```
npm start
```

Alternately, start server to auto restart when a file changes, _provided by [nodemon](https://github.com/remy/nodemon/)_
```
npm run nodemon
```

Test the App
```
npm test
```

### Using the Neo4j Database

After installing Neo4j (either from their website or via brew (see above)) setup the username and password when first starting the Neo4j server.

There are two extra config files needed to run Neo4j with `mini-spy`.

First, make sure there is a `.env` file in the top-level of the `mini-spy` repo.
Add the following lines to that `.env` file.
```
NEO4J_DATABASE_URL=bolt://localhost:7687   <-- default url for neo4j server
NEO4J_USERNAME=your_neo4j_username
NEO4J_PASSWORD=your_neo4j_password
DB=neo4j                                   <-- "neo4j" exactly
```

Second, make sure there is a `neo4j_config.sh` bash script in the top-level of the `mini-spy` repo.
Add the following lines to that `neo4j_config.sh` file.
```
#!/bin/bash

export NEO4J_DATABASE_URL=bolt://localhost:7687;
export NEO4J_USERNAME=neo4j;
export NEO4J_PASSWORD=thisisapassword3;
```


