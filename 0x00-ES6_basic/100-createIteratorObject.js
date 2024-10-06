export default function createIteratorObject(report) {
  let employees = [];

  for (const departmentName in report.allEmployees) {
    employees = employees.concat(report.allEmployees[departmentName]);
  }
  return employees[Symbol.iterator]();
}
