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

Undo Sample Data
```
sequelize db:seed:undo:all
```

Selectively Undo Sample Data
```
sequelize db:seed:undo --seed <pathToSeederFile in server/seeders>
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