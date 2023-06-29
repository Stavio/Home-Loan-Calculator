export function interestCal() {
    const interestRateCalc = 11.75 / 100;
    const interestFinalCalc = interestRateCalc / 12
    return Number(interestFinalCalc.toFixed(5))
}

export function getMonthlyNumOfPayment(years) {
    return years * 12
}


export function monthlyPaymentResult(loanAmount, year) {
    const annualInterestRate = Number(interestCal() * Math.pow(1 + interestCal(), getMonthlyNumOfPayment(year)).toFixed(5))
    const annualInterestRateSub = Number((Math.pow(1 + interestCal(), getMonthlyNumOfPayment(year)) - 1).toFixed(5))
    const finalResult = loanAmount * (annualInterestRate / annualInterestRateSub)
    return Math.round(finalResult)
}

