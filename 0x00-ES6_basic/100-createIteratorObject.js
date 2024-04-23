export default function createIteratorObject(report) {
  let employees = [];

  // Extract all employee names from all departments
  for (let department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  // Define a generator function to yield each employee name
  function* employeeIterator() {
    for (let employee of employees) {
      yield employee;
    }
  }

  // Return the iterator
  return employeeIterator();
}
