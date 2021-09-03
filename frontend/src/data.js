import getDataTransactions from './data-transactions.js';
import getDataCustomers from './data-customers.js';
import getDataProducts from './data-products.js';
import getDataSummary from './data-summary.js';
import getOrderFormCustomers from './order-form-customer.js';
import getOrderFormProducts from './order-form-products.js';

{
  const setDefault = (root) => {
    const table = document.createElement("table");

    table.classList.add("table-refresh__table");

    /* Initial holding html for the table (Loading...) */
    table.innerHTML = `
      <thead>
        <tr></tr>
      </thead>
      <tbody class="table_refresh_tbody">
        <tr>
          <td>Loading...</td>
        </tr>
      </tbody>
    `;

    // console.log(root);
    root.append(table);
  }

  /* Get every element in the html that is for the following class & data source combo */
  for (const root of document.querySelectorAll(".data-table-transactions[data-url]")) {
    setDefault(root);
    getDataTransactions(root);
  }

  /* Get every element in the html that is for the following class & data source combo */
  for (const root of document.querySelectorAll(".data-table-customers[data-url]")) {
    setDefault(root);
    getDataCustomers(root);
  }

  /* Get every element in the html that is for the following class & data source combo */
  for (const root of document.querySelectorAll(".data-table-products[data-url]")) {
    setDefault(root);
    getDataProducts(root);
  }

  for (const root of document.querySelectorAll(".summary[data-url]")) {
    getDataSummary(root);
  }

  
  for (const root of document.querySelectorAll(".customers_distinct[data-url]")) {
    getOrderFormCustomers(root);
  }
  
  for (const root of document.querySelectorAll(".products_distinct[data-url]")) {
    getOrderFormProducts(root);
  }
}