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
        super(name, salary, position, department); //gathers these items from the Employee class
        this.bonus = bonus;
    }
    getDetails() { //updates the details with an additional sentence for a bonus.
        console.log(`${this.name} works as a ${this.position} within the ${this.department} department making $${this.salary} per year. ${this.name} is receiving a bonus of $${this.bonus}.`);
    }
}


// Task 4: Handle Bonuses for Managers
// This task will create a new salary for managers, including their bonuses.

Department.prototype.calculateTotalSalaryWithBonus = function() { //goes back to find the Department class, and adds the function of calculating total salary with bonus
    return this.employees.reduce((total, employee) => {
        if (employee instanceof Manager) { //if employee is in the Manager class, it will do this function (and figure out the bonus)
            return total + employee.salary + employee.bonus;
        }

        return total + employee.salary; //if employee is not a Manager (otherwise), it will just add their salary and nothing else
    }, 0); //start the total salary at 0
};
    
// Task 5: Create and Manage Departments and Employees
// Will create departments and employees and calculates the salaries for each department

const security = new Department('Security');
const humanResources = new Department('Human Resources');

const sofia = new Employee('Sofia', 250000, 'Secret Service Agent', 'Security');
const isaac = new Employee('Isaac', 800000, 'Head of Cybersecurity', 'Security');
const christian = new Manager('Christian', 1000000, 'Chief Security Office', 'Security', 300000);
const aatish = new Employee('Aatish', 450000, 'Hiring Manager', 'Human Resources');
const charlotte = new Employee('Charlotte', 400000, 'Customer Relations Manager', 'Human Resources');
const jolie = new Manager('Jolie', 600000, "People Team Leader", "Human Resources", 150000);

security.addEmployee(sofia);
security.addEmployee(isaac);
security.addEmployee(christian);
humanResources.addEmployee(aatish);
humanResources.addEmployee(charlotte);
humanResources.addEmployee(jolie);

console.log(security);
console.log(humanResources);
console.log(christian.getDetails());
console.log(jolie.getDetails());
console.log(`Security Department Total Salary with Bonuses: $${security.calculateTotalSalaryWithBonus()}.`);
console.log(`Human Resources Department Total Salary with Bonuses: $${humanResources.calculateTotalSalaryWithBonus()}.`);