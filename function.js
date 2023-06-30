export function interestCal(interest) {
    const interestRateCalc = Number(interest / 100);
    const interestFinalCalc = interestRateCalc / 12
    return Number(interestFinalCalc.toFixed(5))
}

export function getMonthlyNumOfPayment(years) {
    return years * 12
}



export function monthlyPaymentResult(loanAmount, interest, year, deposit) {
    const annualInterestRate = Number(interestCal(interest) * Math.pow(1 + interestCal(interest), getMonthlyNumOfPayment(year)).toFixed(5))
    const annualInterestRateSub = Number((Math.pow(1 + interestCal(interest), getMonthlyNumOfPayment(year)) - 1).toFixed(5))
    let finalResult

    // adding deposit filter
    if (deposit <= 0) {
        deposit = 0
        finalResult = loanAmount * (annualInterestRate / annualInterestRateSub)
        return Math.round(finalResult)
    } else {
        finalResult = (loanAmount - deposit) * (annualInterestRate / annualInterestRateSub);
        return Math.round(finalResult)
    }


}

export function drawCircle(canvaId, HomeAmount, deposit) {

    //charts
    const canvas = new Chart(canvaId, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [HomeAmount, deposit],
                borderWidth: 1
            }],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            labels: [
                'Home Amount',
                'Deposit'
            ]
        }
    });


}