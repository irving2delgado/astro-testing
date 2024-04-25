// Define a function to create an employee object
function createEmployee(name, id, position, salary) {
  return {
    name: name,
    id: id,
    position: position,
    salary: salary
  };
}

// Example usage:
const employeeData = createEmployee("John Doe", 12345, "Manager", 50000);

// Define sample employees
const employees = [
  { name: "John Doe", id: 1, position: "Manager", salary: 60000 },
  { name: "Jane Smith", id: 2, position: "Developer", salary: 55000 },
  { name: "Michael Johnson", id: 3, position: "Designer", salary: 50000 },
  { name: "Emily Davis", id: 4, position: "Marketing", salary: 48000 },
  { name: "Chris Wilson", id: 5, position: "Sales", salary: 52000 }
];


// Accessing employee data
console.log("Employee Name:", employeeData.name);
console.log("Employee ID:", employeeData.id);
console.log("Employee Position:", employeeData.position);
console.log("Employee Salary:", employeeData.salary);


<div class="container">
        <!-- Employee data cards -->
        <div class="employee-card">
            <h2>{employees[0].name}</h2>
            <div class="employee-info">
                <strong>ID:</strong> {employees[0].id}<br>
                <strong>Position:</strong> {employees[0].position}<br>
                <strong>Salary:</strong> ${employees[0].salary}
            </div>
        </div>
        <div class="employee-card">
            <h2>{employees[1].name}</h2>
            <div class="employee-info">
                <strong>ID:</strong> {employees[1].id}<br>
                <strong>Position:</strong> {employees[1].position}<br>
                <strong>Salary:</strong> ${employees[1].salary}
            </div>
        </div>
        <div class="employee-card">
            <h2>{employees[2].name}</h2>
            <div class="employee-info">
                <strong>ID:</strong> {employees[2].id}<br>
                <strong>Position:</strong> {employees[2].position}<br>
                <strong>Salary:</strong> ${employees[2].salary}
            </div>
        </div>
        <div class="employee-card">
            <h2>{employees[3].name}</h2>
            <div class="employee-info">
                <strong>ID:</strong> {employees[3].id}<br>
                <strong>Position:</strong> {employees[3].position}<br>
                <strong>Salary:</strong> ${employees[3].salary}
            </div>
        </div>
        <div class="employee-card">
            <h2>{employees[4].name}</h2>
            <div class="employee-info">
                <strong>ID:</strong> {employees[4].id}<br>
                <strong>Position:</strong> {employees[4].position}<br>
                <strong>Salary:</strong> ${employees[4].salary}
            </div>
        </div>
    </div>