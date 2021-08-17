const calculateMortgage = (event) => {
  event.preventDefault();
  const { amount, rate, length } = getValues();

  calculateMonthlyPayment(amount, rate, length);
};

const getValues = () => {
  const loanAmount = Number(document.getElementById("loanAmount").value);
  const interestRate = Number(document.getElementById("interestRate").value);
  const length = Number(document.getElementById("mortgageLength").value);

  const loan = {
    amount: loanAmount,
    rate: interestRate,
    length: length,
  };

  return loan;
};

const displayResults = (monthlyPayment) => {
  const displayTotal = document.getElementById("totalMonthlyPayment");
  displayTotal.innerHTML = monthlyPayment;
};

const displayMonthlyTotals = (principal, insurance, taxes, fees) => {
  const monthlyPrincipal = document.getElementById("monthlyPrincipal");
  const monthlyInsurance = document.getElementById("monthlyInsurance");
  const monthlyTaxes = document.getElementById("monthlyTaxes");
  const monthlyFees = document.getElementById("monthlyFees");

  monthlyPrincipal.innerHTML = `$ ${principal}`;
};

const displayLoanChart = (principal, insurance, taxes, fees) => {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "pie",
    data: {
      // Blue, Green, Red, Yellow
      labels: ["Principal", "Insurance", "Taxes", "HOA fees"],
      datasets: [
        {
          label: "My First Dataset",
          data: [principal, insurance, taxes, fees],
          backgroundColor: ["#4895ef", "#ef476f", "#ffba08", "#9e2a2b"],
          hoverOffset: 4,
        },
      ],
    },
  });
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

  // static vars for development
  const insurance = 78;
  const taxes = 132;
  const fees = 0;

  displayMonthlyTotals(monthlyPayment.toFixed(), insurance, taxes, fees);
  displayLoanChart(monthlyPayment, insurance, taxes, fees);
};
