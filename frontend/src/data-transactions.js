let getDataTransactions;
export default getDataTransactions = async (root) => {

  const table = root.querySelector(".table-refresh__table");
  const response = await fetch(root.dataset.url);
  const data = await response.json();

  /* Clear holding html in the table */
  table.querySelector("thead tr").innerHTML = "";
  table.querySelector("tbody").innerHTML = "";

  // console.log(data);

  table.querySelector("thead tr").insertAdjacentHTML("beforeend", `
    <th>Transaction</th>
    <th>Customer</th>
    <th>Date</th>
    <th>Amount</th>
    <th>Items</th>
    <th>Feedback</th>
  `);

  /* Populate Headers */
  for (const r of data) {

    let d = new Date(Date.parse(r.date)).toLocaleString("en-GB");

    table.querySelector("tbody").insertAdjacentHTML("beforeend", `
      <td>${r.transaction}</td>
      <td>${r.customer}</td>
      <td>${d}</td>
      <td>£${r.amount}</td>
      <td>${r.items}</td>
      <td>${r.feedback}</td>
    `
    );
  }
};