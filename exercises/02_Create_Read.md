## Exercises:

---

### Create Table
1. Create a new table in the sandbox schema.
	- Give it a few columns
	- Try to add some of the features listed above
		+ experiment with data types
		+ add default values
		+ add constraints

2. Explore the `sequel-mart-schema` schema
	- Find a table
	- Right-click & open Scripts > CREATE Script

3. Review the table design
	- Familiarise yourself with the features they contain
	- Try to piece together the characteristics of the table

---

### SELECT ...
1. Add or multiply two numbers and/or decimals
2. Print some text.
3. Different fields of text can be merged using the `CONCAT(<field1>, <field2>)` function.
	- Try printing some concatenated text
4. Try selecting True or False
5. Try selecting a date (e.g. '2021-08-02 11:00:15') or `CURRENT_TIMESTAMP`

---

### FROM ...
1. Write a `SELECT FROM` script to retrieve data from the table you created in the sandbox
2. Try replacing the columns with `SELECT *`
	- this returns all the columns - great for testing but try to avoid in production
3. Query a couple of the tables in the `Sequel-Mart` schema
	- Familiarise yourself with the structures and observe how they join![](Sequel-Mart-Schema.jpg)
*HINT: Rather than writing out the schema and table, find it in the Browser Panel (on the left in pgAdmin), and drag it onto the Query Window*

```
--Example
SELECT product_id, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products";
```

---

### WHERE ...
1. Practice filtering some of the data in the Sequel-Mart schema
	- e.g. `SELECT * FROM "sequel-mart-schema"."Products" WHERE popularity > 80`*
2. Try a few different comparison operators
	- `=, >, <, >=, <=`
3. Try filtering a query using the `IN()` predicate

*HINT: Use SELECT * first to familiarise yourself with the contents*

```
--Example
SELECT product_id, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE popularity > 80;
```

---

### ORDER BY ...
1. Practice ordering some of your above queries in the Sequel-Mart schema
2. Try ordering ascending & descending
	- Use `ASC` and `DESC`
	- Try leaving out `ASC` when ordering ascending
3. Try ordering by more than one field
	- the **second field** will only be used if the **first field** values are identical
4. Try ordering by text and dates
	- Note that these use the declared data type to sort

*HINT: The default sort is ASC so this keyword does not need to be included*

```
--Example
SELECT product_id, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE popularity > 80
ORDER BY popularity DESC;
```

---

### GROUP BY & HAVING ...
1. Practice aggregating on a couple of tables on the `Sequel-Mart` schema
	- Experiment with `SUM`, `COUNT`, `AVG`, `MIN`, `MAX`, `STDDEV`
2. Try combinations of aggregators that can include or exclude `HAVING`
3. Try an aggregator that excludes both `GROUP BY` and `HAVING`
	- This should only have the aggregated column in the `SELECT`
	
```
--Example
SELECT product_category, COUNT(product_category)
FROM "sequel-mart-schema"."Products"
WHERE popularity > 80
GROUP BY product_category
HAVING COUNT(product_category) > 5;
```
	
---

### LIMIT...
1. Add limits to a couple of tables on the `Sequel-Mart` schema

```
--Example
SELECT product_id, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE popularity > 80
ORDER BY popularity DESC
LIMIT 5;
```


---
### INNER JOIN...
1. Refer to the ERD.![](Sequel-Mart-Schema.jpg)
2. Join the sales header or detail table with one that’s compatable
	- e.g. Sales Head & Customers
	- e.g. Sales Detail & Products
3. Make sure to alias the tables with `AS`

```
--Example
SELECT cu.customer_name, cu.date_joined, sh.customer_id, sh.date_id, sh.feedback_score, sh.date_sale
 product_variety, popularity
FROM "sequel-mart-schema"."Customers" AS cu
INNER JOIN "sequel-mart-schema"."Sales_Header" AS sh ON sh.customer_id = cu.customer_id
WHERE cu.customer_name LIKE 'Amelie%';
```

---
### LEFT OUTER JOIN...
1. Review your query from the last section 
2. Change the `INNER JOIN` to `LEFT OUTER JOIN`
3. See if the row counts change
	- If they have, have any NULLs have been added
4. Try to remove these NULLS by replacing the column with:  
```
CASE WHEN <field_name> IS NULL
	THEN <replacement_value
	ELSE <field_name>
END AS <column_alias>                                                                               

--Example
SELECT cu.customer_name, cu.date_joined, sh.customer_id, sh.date_id, sh.feedback_score, sh.date_sale
 product_variety, popularity
FROM "sequel-mart-schema"."Customers" AS cu
LEFT OUTER JOIN "sequel-mart-schema"."Sales_Header" AS sh ON sh.customer_id = cu.customer_id
WHERE cu.customer_name LIKE 'Amelie%';
```

---
### Nested Statements
1. Recreate the below query
```
SELECT 'Summary' AS Title,
	(SELECT COUNT(DISTINCT sale_id) FROM "sequel-mart-schema"."Sales_Header") AS total_transactions,
	(SELECT AVG(feedback_score) FROM "sequel-mart-schema"."Sales_Header") AS avg_feedback,
	(SELECT SUM(revenue) - SUM(cost_of_sales) FROM "sequel-mart-schema"."Sales_Detail") AS gross_profit;
```

2. Experiment with some of the aggregators and columns