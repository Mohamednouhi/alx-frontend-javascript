export default function createIteratorObject(report) {
  const employees = [];

  // Extract all employee names from all departments
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  // Define a generator function to yield each employee name
  function* employeeIterator() {
    for (const employee of employees) {
      yield employee;
    }
  }

  // Return the iterator
  return employeeIterator();
}
