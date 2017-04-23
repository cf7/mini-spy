# mini-spy

### Requirements
Install `npm` and `postgres` if you don't already have them installed
```
brew install node
brew install postgresql
```

Install dependencies (run from top-level directory)
```
npm install
```

Install Sequelize-CLI Globally
```
npm install -g sequelize-cli
```

### Using the Database

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