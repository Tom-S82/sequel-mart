let getOrderFormCustomers;
export default getOrderFormCustomers = async (root) => {

  const response = await fetch(root.dataset.url);
  const data = await response.json();

  /* Clear holding html in the table */
  document.getElementById("order-forms--customers").innerHTML = "";

  /* Populate Data */
  for (const r of data) {

    document.getElementById("order-forms--customers").insertAdjacentHTML("beforeend", `
      <option value="${r.customer}">${r.customer}</option>
    `);

  }
};