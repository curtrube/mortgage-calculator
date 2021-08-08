const calculateMortgage = (event) => {
  event.preventDefault();

  const { amount, rate, length } = getValues();

  calculateMonthlyPayment(amount, rate, length);
};

const displayResults = (monthlyPayment) => {
  const displayTotal = document.getElementById("displayTotal");

  displayTotal.innerHTML = monthlyPayment;
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

  displayResults(monthlyPayment.toFixed(2));
};
