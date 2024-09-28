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
