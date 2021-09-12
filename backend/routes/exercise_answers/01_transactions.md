--Create the view:
/*
    `
    SELECT 		sh.sale_id AS transaction, 
			cu.customer_name AS customer, 
			sh.date_sale AS date, 
			SUM(sd.revenue) AS amount, 
			SUM(sd.items_sold) AS items, 
			sh.feedback_score AS feedback
    FROM 		"sequel-mart-schema"."Sales_Header" AS sh
    INNER JOIN	"sequel-mart-schema"."Sales_Detail" AS sd ON sh.sale_id = sd.sale_id
    INNER JOIN 	"sequel-mart-schema"."Customers" AS cu ON cu.customer_id = sh.customer_id
    GROUP BY	sh.sale_id, 
          cu.customer_name, 
          sh.date_sale,
          sh.feedback_score
    ORDER BY 	sh.date_sale DESC
    LIMIT 		10;
    `
*/


--Write the code from the view into line 12 of routes/transactions.js
    `
    SELECT  transaction, customer, date, amount, items, feedback
    FROM    "sequel-mart-schema"."v_Web_Home_Transactions";
    `