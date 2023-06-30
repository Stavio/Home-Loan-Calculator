import { monthlyPaymentResult, drawCircle } from "../function.js"

const yearValue = document.querySelector("#progressValue");
const period_el = document.querySelector("#loanPeriod-el");
const calcBtn = document.querySelector("#calcBtn");
const interestInput = document.querySelector("#interest-el");
const amount_el = document.querySelector("#loanAmount-el");
const ctx = document.getElementById('myChart').getContext("2d");

const showResult_el = document.querySelector(".showResultContainer");
const installment_el = document.querySelector("#installment");

const additional_el = document.querySelector("#deposit_el");
const additional_container = document.querySelector("#deposit_container");
const depositInput = document.querySelector("#deposit_input");


//init
let progressValue
let interestRate = 0
yearValue.textContent = 0
let loanDeposit = 0


period_el.addEventListener('input', function (e) {
  progressValue = e.target.value;
  yearValue.textContent = `${progressValue} yrs`

})


calcBtn.addEventListener('click', function () {
  interestRate = interestInput.value
  loanDeposit = depositInput.value
  if (amount_el.value === "" || interestInput.value === "") {
    alert("please fill in the field")
  } else {
    const payment = monthlyPaymentResult(amount_el.value, interestRate, progressValue, loanDeposit).toFixed(0)
    installment_el.textContent = `R${payment}`
    showResult_el.style.visibility = "visible"
    amount_el.style.border = "0px solid inherit"
    drawCircle(ctx, amount_el.value, loanDeposit)
  }


})

additional_el.addEventListener("click", function () {
  additional_container.classList.toggle("deposit_container")
})










