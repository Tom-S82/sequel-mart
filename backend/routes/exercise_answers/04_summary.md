--Create the view:
/*

`
CREATE OR REPLACE VIEW "sequel-mart-schema"."v_Web_Home_Summary"
 AS
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
`
*/


--Write the code from the view into line 12 of routes/summary.js
    `
    SELECT total_transactions, total_products_sold, revenue, cost_of_sales, gross_profit, avg_feedback
    FROM "sequel-mart-schema"."v_Web_Home_Summary";
    `