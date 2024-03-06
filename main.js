// Weekly Wages - Start Code

// Determine Wage Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Employee Inputs
  let dmHours = +document.getElementById("dm-hours").value;
  let dmPayrate = +document.getElementById("dm-payrate").value;
  let soHours = +document.getElementById("so-hours").value;
  let soPayrate = +document.getElementById("so-payrate").value;
  let kyHours = +document.getElementById("ky-hours").value;
  let kyPayrate = +document.getElementById("ky-payrate").value;

  // Calculate & Output Pay
  document.getElementById("dm-wage").innerHTML = calculate(dmHours, dmPayrate);
  document.getElementById("so-wage").innerHTML = calculate(soHours, soPayrate);
  document.getElementById("ky-wage").innerHTML = calculate(kyHours, kyPayrate);
}

function calculate(hours, payRate) {
  let overtime = 0;
  if (hours > 40) {
    overtime = hours - 40;
    hours = 40;
  }
  let pay = hours * payRate + overtime * 1.5 * payRate;
  return pay.toFixed(2);
}
