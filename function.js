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

export function drawCircle(chartElement, data) {

  let options = {
    series: [0, 0],
    labels: ['Amount', 'Deposit'],
    chart: {
      type: 'donut',
      plotOptions: {
        pie: {
          donut: {
            size: '40%',
          }
        }
      }
    },
    colors: ['#cfcee4', '#33341e'],

    responsive: [{
      breakpoint: 200,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  let chart = new ApexCharts(chartElement, options);
  chart.render();

  updateChartSeries(data, chart)
}


function updateChartSeries(data, chart) {
  chart.updateSeries(data)
}