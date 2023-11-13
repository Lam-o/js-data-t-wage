var hourlyWage = prompt("what is your hourly wage ? (ex. 50.50)");
var hoursWorkedWeek = prompt("how many hours are worked in a week ? (ex. 80)");

console.log(
  `weekly pay befor tax is $${(hourlyWage * hoursWorkedWeek).toFixed(2)}.`
);

