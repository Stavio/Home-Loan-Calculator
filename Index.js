import { monthlyPaymentResult, interestCal } from "../function.js"

const yearValue = document.querySelector("#progressValue");
const period_el = document.querySelector("#loanPeriod-el");
const calcBtn = document.querySelector("#calcBtn");
const interestInput = document.querySelector("#interest-el");
const amount_el = document.querySelector("#loanAmount-el");

let progressValue

interestInput.setAttribute("disabled", true);
yearValue.textContent = 0


period_el.addEventListener('input', function (e) {
  progressValue = e.target.value;
  yearValue.textContent = `${progressValue} years`

})


calcBtn.addEventListener('click', function (event) {
  event.preventDefault()
  if (amount_el.value === "") {
    amount_el.style.border = "1px solid red"
    alert("please fill in the field")
  } else {
    amount_el.style.border = "0px solid inherit"
    console.log(monthlyPaymentResult(amount_el.value, progressValue).toFixed(0)); // months

  }

})



