const calculateMortgage = (event) => {
  event.preventDefault();
  const loanAmount = document.getElementById('loanAmount').value;
  const interestRate = document.getElementById('interestRate').value;
  const length = document.getElementById('mortgageLength').value;
  console.log(
    `The loan of ${loanAmount} has been approved at a rate of ${interestRate} for ${length}`
  );
};
