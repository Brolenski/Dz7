function sumSalaries(salaries) {
  let sum = 0;
  for (const salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

const total = sumSalaries(salaries);
console.log("Сума зарплат: " + total);