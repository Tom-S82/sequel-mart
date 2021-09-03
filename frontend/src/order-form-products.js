let getOrderFormProducts;
export default getOrderFormProducts = async (root) => {

  const response = await fetch(root.dataset.url);
  const data = await response.json();

  /* Clear holding html in the table */
  document.getElementById("order-forms--products").innerHTML = "";

  /* Populate Data */
  for (const r of data) {
    // console.log(r);
    document.getElementById("order-forms--products").insertAdjacentHTML("beforeend", `
      <option value="${r.product_item}">${r.product_item}</option>
    `);

  }
};