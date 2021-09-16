## Exercises:

---
### INSERT INTO ...
1. Add yourself as a customer
2. Try to add a new **product**
3. Try to add some new records to a table you created in the CREATE TABLE section

*HINT: Right-click on the table and go to 'Scripts' and 'INSERT Script' to speed things up*

```
--Example
INSERT INTO "sequel-mart-schema"."Customers" (customer_name, date_joined)
VALUES ('<your_name>', CURRENT_TIMESTAMP));

INSERT INTO "sequel-mart-schema"."Products"(
	product_id, product_category, product_item, product_variety, pack_size, wholesale_price, unit_sales_price, inventory, popularity)
	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
```

---
### UPDATE ...
1. Try updating a **customer** record
2. Try updating a **product** record
3. Try to update some new records to a table you created in the CREATE TABLE section
4. Try updating a **sale**

*Warning: If you change an _id column, this will change the customer, product etc for that sale)*

*Warning: If there is no WHERE clause, every row will be updated with the replacement value*
```
--Example
UPDATE "sequel-mart-schema"."Customers"
SET date_joined = CURRENT_TIMESTAMP
WHERE customer_id = 1;
```

---
### DELETE ...
1. Try deleting the **customer, product or sales** records you’ve just added.
2. Check they are removed with an appropriate `SELECT` query
3. Try deleting some of the records from your own tables
```
--Example
DELETE
FROM "sequel-mart-schema"."Customers"
WHERE customer_name = <your_name>;
```

*Warning: If there is no WHERE clause, every row will be deleted!!*

---
### TRUNCATE TABLE ...
1. Try truncating a table you created in the CREATE TABLE section

*Warning: Make sure you are deleting the correct table.  Measure twice, cut once!!*

```
--Example
TRUNCATE TABLE <schema_name>.<table_name>;
```

---
### DROP ...
1. Try dropping a table from your own schema (re-create one if necessary with CREATE TABLE)

```
DROP TABLE <schema_name>.<table_name>;
```

---
### ALTER COLUMN ...
1. Try to change one of these attributes of a column in one of your own databases
	- If a proposed change is violated by any existing data, it will fail and rollback to what it was
	- If a table is used in a view it will fail as the view is dependent on it
	
