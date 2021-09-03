//Route into the database to retrieve customer information

const express = require('express');
const router = express.Router();
const db = require('../db');        //Connects to DB & sends a GET request for info

/* https://www.youtube.com/watch?v=Qo-iQNXDf1c */
/* Specify a query, once the promise has been fulfilled, convert it to json & send it to the target page
- router.get('target page, (request, response), db.any = any number (unknown) of rows) */
router.get('/', (req, res) => {
  db.any(
    `
    SELECT total_transactions, total_products_sold, revenue, cost_of_sales, gross_profit, avg_feedback
    FROM "sequel-mart-schema"."v_Web_Home_Summary";
    `
  )
  .then(rows => {
    
    // console.log(rows);
    res.send(rows);
  })
  .catch(error => {
    console.log(error);
  })
})

//Export it to be used by routes & files that need to connect
module.exports = router;



/* Table SQL script
    SELECT 
    (
      SELECT COUNT(DISTINCT sale_id) AS Total_Transactions
      FROM "sequel-mart-schema"."Sales_Header"
    ),
    (
      SELECT SUM(items_sold) AS Total_Products_Sold
      FROM "sequel-mart-schema"."Sales_Detail"
    ),
    (
      SELECT SUM(revenue) AS Revenue
      FROM "sequel-mart-schema"."Sales_Detail"
    ),
    (
      SELECT SUM(cost_of_sales) AS Cost_Of_Sales
      FROM "sequel-mart-schema"."Sales_Detail"
    ),
    (
      SELECT SUM(revenue) - SUM(cost_of_sales) AS Gross_Profit
      FROM "sequel-mart-schema"."Sales_Detail"
    ),
    (
      SELECT CAST(AVG(feedback_score) AS NUMERIC(9,1)) AS avg_feedback
      FROM "sequel-mart-schema"."Sales_Header"
    );
*/