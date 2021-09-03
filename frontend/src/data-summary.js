let getDataSummary;
export default getDataSummary = async (root) => {

  const response = await fetch(root.dataset.url);
  const data = await response.json();

  /* Clear holding html in the table */
  document.getElementById("transactions").innerHTML = "";
  document.getElementById("total-products-sold").innerHTML = "";
  document.getElementById("avg-feedback").innerHTML = "";
  document.getElementById("total-revenue").innerHTML = "";
  document.getElementById("total-product-cost").innerHTML = "";
  document.getElementById("gross-profit").innerHTML = "";

  /* Populate Data */
  for (const r of data) {

    document.getElementById("transactions").insertAdjacentHTML("beforeend", `
      ${parseInt(r.total_transactions).toLocaleString()}
    `);

    document.getElementById("total-products-sold").insertAdjacentHTML("beforeend", `
      ${parseInt(r.total_products_sold).toLocaleString()}
    `);

    document.getElementById("avg-feedback").insertAdjacentHTML("beforeend", `
      ${r.avg_feedback}
    `);

    document.getElementById("total-revenue").insertAdjacentHTML("beforeend", `
      £${parseInt(r.revenue).toLocaleString()}
    `);

    document.getElementById("total-product-cost").insertAdjacentHTML("beforeend", `
      £${parseInt(r.cost_of_sales).toLocaleString()}
    `);

    document.getElementById("gross-profit").insertAdjacentHTML("beforeend", `
      £${parseInt(r.gross_profit).toLocaleString()}
    `);

  }
};