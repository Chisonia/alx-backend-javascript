export default function getBudgetObject(income, gdp, capita) {
  const budget = { income, gdp, capita };// ES6 shorthand for { income: income, gdp: gdp, capita: capita }
  return budget;
}
