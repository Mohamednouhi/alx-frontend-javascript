function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    year:getCurrentYear()
  };

  budget[`income-${budget.year}`] = income;
  budget[`gdp-${budget.year}`] = gdp;
  budget[`capita-${budget.year}`] = capita;

  return budget;
} 

console.log(getBudgetForCurrentYear(2100, 5200, 1090));
