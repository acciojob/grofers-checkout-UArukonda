const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
  let sum = 0;
  prices.forEach((node) => {
    sum += Number(node.innerText);
  });

  const totalRow = document.createElement("tr");

  const totalTh = document.createElement("td");
  const total = document.createElement("td");
  totalTh.innerText = "Total";
  total.innerText = sum;

  totalRow.appendChild(totalTh);
  totalRow.appendChild(total);

  const table = document.querySelector("table");

  totalTh.classList.add = "item";
  total.classList.add = "prices";
  table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

