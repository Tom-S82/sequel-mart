let getDataProducts;
export default getDataProducts = async (root) => {

  const table = root.querySelector(".table-refresh__table");
  const response = await fetch(root.dataset.url);
  const data = await response.json();

  /* Clear holding html in the table */
  table.querySelector("thead tr").innerHTML = "";
  table.querySelector("tbody").innerHTML = "";

  // console.log(data);

  table.querySelector("thead tr").insertAdjacentHTML("beforeend", `
    <th>Product</th>
    <th>Variety</th>
    <th>Pack Size</th>
    <th>Unit Price</th>
    <th>Items Sold</th>
    <th>In Stock</th>
  `);

  /* Populate Headers */
  for (const r of data) {

    let items_sold = parseInt(r.items_sold).toLocaleString();

    table.querySelector("tbody").insertAdjacentHTML("beforeend", `
      <td>${r.product_item}</td>
      <td>${r.product_variety}</td>
      <td>${r.pack_size}</td>
      <td>£${r.unit_price}</td>
      <td>${items_sold}</td>
      <td>${r.inventory}</td>
    `
    );
  }
};