const history = [];

function calculate() {
  const income = parseFloat(document.getElementById('income').value);
  const expenses = parseFloat(document.getElementById('expenses').value);
  const savings = parseFloat(document.getElementById('savings').value);

  const remaining = income - expenses - savings;
  const result = document.getElementById('result');
  const historyContainer = document.getElementById('history');

  result.innerHTML = `<p>Remaining balance: $${remaining.toFixed(2)}</p>`;

  const transaction = {
    income,
    expenses,
    savings,
    remaining
  };

  history.push(transaction);

  // Display transaction history
  historyContainer.innerHTML = '<h2>Transaction History</h2>';
  history.forEach((transaction, index) => {
    historyContainer.innerHTML += `<div class="transaction">
      <p>Transaction ${index + 1}</p>
      <p>Income: $${transaction.income.toFixed(2)}</p>
      <p>Expenses: $${transaction.expenses.toFixed(2)}</p>
      <p>Savings: $${transaction.savings.toFixed(2)}</p>
      <p>Remaining balance: $${transaction.remaining.toFixed(2)}</p>
    </div>`;
  });
}
