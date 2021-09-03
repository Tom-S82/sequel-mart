let getDataCustomers;
export default getDataCustomers = async (root) => {

  const table = root.querySelector(".table-refresh__table");
  const response = await fetch(root.dataset.url);
  const data = await response.json();

  /* Clear holding html in the table */
  table.querySelector("thead tr").innerHTML = "";
  table.querySelector("tbody").innerHTML = "";

  // console.log(data);

  table.querySelector("thead tr").insertAdjacentHTML("beforeend", `
    <th>Customer</th>
    <th>Most Recent</th>
    <th>Transactions</th>
    <th>Avg Spend</th>
    <th>Avg Items</th>
    <th>Avg Feedback</th>
  `);

  /* Populate Headers */
  for (const r of data) {

    let d = new Date(Date.parse(r.most_recent)).toLocaleString("en-GB");

    table.querySelector("tbody").insertAdjacentHTML("beforeend", `
      <td>${r.customer}</td>
      <td>${d}</td>
      <td>${r.transactions}</td>
      <td>£${r.avg_spend}</td>
      <td>${r.avg_items}</td>
      <td>${r.avg_feedback}</td>
    `
    );
  }
};