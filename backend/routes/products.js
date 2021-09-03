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
    SELECT product_item, product_variety, product_full, pack_size, unit_price, items_sold, inventory
    FROM "sequel-mart-schema"."v_Web_Home_Products";
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
    SELECT		pr.product_item AS product_item,
              pr.product_variety AS product_variety,
              CONCAT(pr.product_item, ' - ', pr.product_variety) AS product_full,
              pr.pack_size AS pack_size,
              pr.unit_sales_price AS unit_price,
              CAST(SUM(sd.items_sold) AS NUMERIC(9,1)) AS items_sold,
              pr.inventory
    FROM 		  "sequel-mart-schema"."Sales_Header" AS sh
    INNER JOIN	"sequel-mart-schema"."Sales_Detail" AS sd ON sh.sale_id = sd.sale_id
    INNER JOIN 	"sequel-mart-schema"."Products" AS pr ON pr.product_id = sd.product_id
    INNER JOIN	"sequel-mart-schema"."Stores" AS st ON st.store_id = sh.store_id
    WHERE 		st.store_name = 'Northern Store'
    GROUP BY	pr.product_item,
              pr.product_variety,
              CONCAT(pr.product_item, ' - ', pr.product_variety),
              pr.pack_size,
              pr.unit_sales_price,
              pr.inventory
    ORDER BY 	CAST(SUM(sd.items_sold) AS NUMERIC(9,1)) DESC
    LIMIT 		10;
*/