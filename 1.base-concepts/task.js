"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const D = Math.pow(b, 2) - 4 * a * c;
  if (D > 0) {
    let x1;
    let x2;
    x1 = (-b - Math.sqrt(D)) / (2 * a);
    x2 = (-b + Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2);
  } else if (D == 0) {
    let x;
    x = -b / (2 * a);
    arr.push(x);
  } else if (D < 0) {
    return arr;
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let percentMonth = (percent * 0.01) / 12;
  let creditBody = amount - contribution;
  let payMonth = creditBody * (percentMonth + (percentMonth / (Math.pow((1 + percentMonth), countMonths) - 1)));
  let allPay = (payMonth * countMonths).toFixed(2);
  let allPayFinal = Number(allPay);
  return allPayFinal;

}
