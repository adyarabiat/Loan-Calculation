document.querySelector("#loan-form").addEventListener("submit", calculate);

// Calculate

function calculate(e) {
  // Define all the Variables

  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const year = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  loading();
  results();

  // Changing the values we Enter to be useful

  const principle = parseFloat(amount.value); //we use parseFloat to change it to decimal number.
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayment = parseFloat(year.value) * 12;

  // Calculate the monthly payment

  const x = Math.pow(1 + calculateInterest, calculatePayment);
  const monthly = (principle * x * calculateInterest) / (x - 1);

  // Now here we will updates the values of the results after we enter the numbers

  if (isFinite(monthly)) {
    //Finite means is not infinite numbers so here means basically there is a number
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayment).toFixed(2);
    totalInterest.value = (monthly * calculatePayment - principle).toFixed(2);
  } else {
    // Here we want to show error if there was no numbers
    showError();
  }

  e.preventDefault();
}

function showError() {
  // create the HTML that I wnat to insert
  const html = document.createElement("div");
  html.className = "alert alert-danger";
  html.appendChild(document.createTextNode("Please Enter Your numbers!"));

  // Select Element on the Document
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Insert the HTML
  card.insertBefore(html, heading);

  // Clear after 3 seconds

  setTimeout(clearFunction, 3000);
}

function clearFunction() {
  document.querySelector(".alert").remove();
}

// Show the loading and the results

function loading() {
  document.querySelector("#loading").style.display = "block";
  setTimeout(stop, 1000);
}

function stop() {
  document.querySelector("#loading").style.display = "none";
}

function results() {
  document.querySelector("#results").style.display = "none";
  setTimeout(stay, 1000);
}

function stay() {
  document.querySelector("#results").style.display = "block";
}
