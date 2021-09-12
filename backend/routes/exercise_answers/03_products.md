--Create the view (NOTE: joining the store is optional in this example):
/*
    SELECT		pr.product_item AS product_item,
              pr.product_variety AS product_variety,
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
              pr.pack_size,
              pr.unit_sales_price,
              pr.inventory
    ORDER BY 	CAST(SUM(sd.items_sold) AS NUMERIC(9,1)) DESC
    LIMIT 		10;
*/


--Write the code from the view into line 12 of routes/products.js
    `
    SELECT product_item, product_variety, pack_size, unit_price, items_sold, inventory
    FROM "sequel-mart-schema"."v_Web_Home_Products";
    `