import { interestCal } from "../function.js"

const yearValue = document.querySelector("#progressValue");
const period_el = document.querySelector("#loanPeriod-el");
const calcBtn = document.querySelector("#calcBtn");
const interestInput = document.querySelector("#interest-el");

let amount_el =  document.querySelector("#loanAmount-el");

interestInput.setAttribute("disabled",true);
interestInput.value = interestCal() + "%";
yearValue.textContent = ": 0 years"


period_el.addEventListener('input', function (e) {
    yearValue.textContent = `: ${e.target.value} years`;
})

calcBtn.addEventListener('click', function () {
    console.log(amount_el.value);
})



