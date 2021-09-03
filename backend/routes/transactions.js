//Route into the database to retrieve customer information

const express = require('express');
const router = express.Router();
const db = require('../db');        //Connects to DB & sends a GET request for info


/* Specify a query, once the promise has been fulfilled, convert it to json & send it to the target page
- router.get('target page, (request, response), db.any = any number (unknown) of rows) */
router.get('/', (req, res) => {
  db.any(
    `
    SELECT transaction, customer, date, amount, items, feedback
    FROM "sequel-mart-schema"."v_Web_Home_Transactions";
    `
  )
  .then(rows => {
    
    // console.log(rows);
    res.json(rows);
  })
  .catch(error => {
    console.log(error);
  })
})

//Export it to be used by routes & files that need to connect
module.exports = router;



/* Table SQL script
    SELECT 		sh.sale_id AS transaction, 
			cu.customer_name AS customer, 
			sh.date_sale AS date, 
			SUM(sd.revenue) AS amount, 
			SUM(sd.items_sold) AS items, 
			sh.feedback_score AS feedback
    FROM 		"sequel-mart-schema"."Sales_Header" AS sh
    INNER JOIN	"sequel-mart-schema"."Sales_Detail" AS sd ON sh.sale_id = sd.sale_id
    INNER JOIN 	"sequel-mart-schema"."Customers" AS cu ON cu.customer_id = sh.customer_id
    INNER JOIN	"sequel-mart-schema"."Stores" AS st ON st.store_id = sh.store_id
    WHERE 		st.store_name = 'Northern Store'
    GROUP BY	sh.sale_id, 
          cu.customer_name, 
          sh.date_sale,
          sh.feedback_score
    ORDER BY 	sh.date_sale DESC
    LIMIT 		10;
*/