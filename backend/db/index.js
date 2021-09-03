//Connection to the database for use around the project (pg-promise)

//Set up Dependencies
const pgp = require('pg-promise')();

//Connection string = 1.type of database, 2.username & password, 3.where server is running
const connectionString =
  "postgresql://postgres:PgsTES072021@localhost:5432/sequel-mart";

//Initialise the connection
const db = pgp(connectionString);

//Export it to be used by routes & files that need to connect
module.exports = db;