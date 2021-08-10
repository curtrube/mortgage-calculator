const insurance = 78;
const taxes = 132;
const fees = 0;

const calculateMortgage = (event) => {
  event.preventDefault();

  const { amount, rate, length } = getValues();

  calculateMonthlyPayment(amount, rate, length);
};

const displayResults = (monthlyPayment) => {
  const displayTotal = document.getElementById("totalMonthlyPayment");
  displayTotal.innerHTML = `$${monthlyPayment}`;
};

const getValues = () => {
  const loanAmount = document.getElementById("loanAmount").value;
  const interestRate = document.getElementById("interestRate").value;
  const length = document.getElementById("mortgageLength").value;

  const loan = {
    amount: loanAmount,
    rate: interestRate,
    length: length,
  };

  return loan;
};

const calculateMonthlyPayment = (amount, rate, length) => {
  // Calculate monthly interest rate
  monthlyInterestRate = rate / 100 / 12;

  // Length of mortgage in months
  numberOfPayments = length * 12;

  console.log(`Loan Amount: ${amount}`);
  console.log(`Monthly Interest Rate: ${monthlyInterestRate}`);
  console.log(`Mortgage Length: ${numberOfPayments} months`);

  // Calculate monthly mortgage payment
  let monthlyPayment =
    (amount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, numberOfPayments * -1));
  console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);

  displayResults(monthlyPayment.toFixed());
  displayLoanChart(monthlyPayment);
};

const displayLoanChart = (principal) => {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "pie",
    data: {
      // Blue, Green, Red, Yellow
      labels: ["Principal", "Insurance", "Taxes", "HOA fees"],
      datasets: [
        {
          label: "My First Dataset",
          data: [principal, 20, 300],
          backgroundColor: [
            "#4895ef",
            "#ef476f",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    },
  });
};
