//Route into the database to retrieve customer information

const express = require('express');
const router = express.Router();
const db = require('../db');        //Connects to DB & sends a GET request for info

/* Specify a query, once the promise has been fulfilled, convert it to json & send it to the target page
- router.get('target page, (request, response), db.any = any number (unknown) of rows) */
router.get('/', (req, res) => {
  db.any(
    `
    SELECT customer, most_recent, transactions, avg_spend, avg_items, avg_feedback
    FROM "sequel-mart-schema"."v_Web_Home_Customers";
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
SELECT		cu.customer_name AS customer, 
MAX(sh.date_sale) AS most_recent,
COUNT(sh.sale_id) AS transactions,
CAST(AVG(sd.revenue::numeric) AS NUMERIC(9,2)) AS avg_spend,
CAST(AVG(sd.items_sold) AS NUMERIC(9,1)) AS avg_items,
CAST(AVG(sh.feedback_score) AS NUMERIC(9,1)) AS avg_feedback
FROM 		"sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN	"sequel-mart-schema"."Sales_Detail" AS sd ON sh.sale_id = sd.sale_id
INNER JOIN 	"sequel-mart-schema"."Customers" AS cu ON cu.customer_id = sh.customer_id
INNER JOIN	"sequel-mart-schema"."Stores" AS st ON st.store_id = sh.store_id
WHERE 		st.store_name = 'Northern Store'
GROUP BY	cu.customer_name
ORDER BY 	CAST(AVG(sd.revenue::numeric) AS NUMERIC(9,2)) DESC
LIMIT 		10;
*/