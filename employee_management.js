// Task 1: Create an Employee Class
// This task will allow employees to be created. When name, salary, position, and department is given, it will add these traits into a new employee.

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getDetails() {
        console.log(`${this.name} works as a ${this.position} within the ${this.department} department making $${this.salary} per year.`);
    }
}


// Task 2: Create a Department Class
// This task will allow employees to be created and assigned within certain divisions.

class Department {
    constructor(name,employees) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee); //adds new employee to the Employee class
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0); //brings all the employees salaries to one value, as a department total salary.
    }
}


// Task 3: Create a Manager Class that Inherits from Employee
// Creates a new class, manager, and grabs the items from the employee class. It also includes the manager's bonus and new detail listing.

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }
    getDetails() {
        console.log(`${this.name} works as a ${this.position} within the ${this.department} department making $${this.salary} per year. ${this.name} is receiving a bonus of $${this.bonus}.`);
    }
}