//Start the database connections (express)

const express = require('express');

//Initialise a port from an environment variable folder with 5000 as a failsafe default
const PORT = process.env.PORT || 5000;

//Initialise the express app
const app = express();

/* Make sure the database connection details are available in the project
(e.g. from the exported db/index.js) */
const db = require('./db')

/* Add middleware for linking express to the html template as static */
app.use(express.static("frontend"));

//Get the response and parse it to json
app.use(express.json());

//Tell express where to listen for initialisation
app.listen(PORT, () => 
  console.log(`Server running at http://localhost:${PORT}`)
);


/* ROUTES */
//Summary Route - Enable the data to be picked up from the router that contains the SQL code
const summaryRouter = require('./routes/summary');
app.use('/summary', summaryRouter);

//Customer Route - Enable the data to be picked up from the router that contains the SQL code
const customersRouter = require('./routes/customers');
app.use('/customers', customersRouter);

//Transactions Route - Enable the data to be picked up from the router that contains the SQL code
const transactionsRouter = require('./routes/transactions');
app.use('/transactions', transactionsRouter);

//Products Route - Enable the data to be picked up from the router that contains the SQL code
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

//Customer Route - Enable the data to be picked up from the router that contains the SQL code
const customersDistinctRouter = require('./routes/customers_distinct');
app.use('/customers_distinct', customersDistinctRouter);

//Products Route - Enable the data to be picked up from the router that contains the SQL code
const productsDistinctRouter = require('./routes/products_distinct');
app.use('/products_distinct', productsDistinctRouter);