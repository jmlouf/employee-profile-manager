const inquirer = require('inquirer');
const db = require('../db/connections.js');
const Table = require('cli-table3');

class Queries {
    constructor() {
        this.db = db;
    }

    async viewAllDepartments() {

        try {
            const [result] = await this.db.promise().query('SELECT departments.id AS `ID`, departments.name AS `Department` FROM company_db.departments');

            const table = new Table({
                head: ['ID', 'Department'],
            });
            result.forEach(row => table.push([row.ID, row.Department]));

            console.log(table.toString());
            return result;

        } catch (err) {
            console.error(err);
        };
    };

    async addDepartment() {

        try {
            inquirer.prompt([
                {
                    name: 'newDepartmentName',
                    type: 'input',
                    message: "Please enter the name of the department:"
                },
            ]).then((answer) => {
                this.db.query('INSERT INTO departments (name) VALUES (?)', [answer.newDepartmentName], (err) => {
                    if (err) {
                        console.error(err);
                    }
                    console.log(`Department: ${answer.newDepartmentName} => added to database`);
                    this.viewAllDepartments();
                });
            });

        } catch (err) {
            console.error(err);
        };
    };

    async viewAllRoles() {

        try {
            const [result] = await this.db.promise().query('SELECT roles.id AS `ID`, roles.title AS `Title`, roles.salary AS `Salary`, roles.department_id AS `Department ID` FROM company_db.roles');

            const table = new Table({
                head: ['ID', 'Title', 'Salary', 'Department ID'],
            });
            result.forEach(row => table.push([row.ID, row.Title, row.Salary, row['Department ID']]));

            console.log(table.toString());
            return result;

        } catch (err) {
            console.error(err);
        };
    };

    async addRole() {

        try {
            const [depts] = await this.db.promise().query('SELECT departments.id AS `ID`, departments.name AS `Department` FROM company_db.departments');

            const deptChoices = depts.map((dept) => {
                return {
                    name: dept.Department,
                    value: dept.ID,
                };
            });

            inquirer.prompt([
                {
                    name: 'newRoleTitle',
                    type: 'input',
                    message: "Please enter the title of the role:"
                },
                {
                    name: 'newRoleSalary',
                    type: 'input',
                    message: "Please enter the salary of this role:"
                },
                {
                    name: 'newRoleDepartmentId',
                    type: 'list',
                    message: "Please select the department for this role:",
                    choices: deptChoices,
                },
            ]).then(answer => {
                this.db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [answer.newRoleTitle, answer.newRoleSalary, answer.newRoleDepartmentId], (err) => {
                    if (err) {
                        console.error(err);
                    }
                    console.log(`Role: ${answer.newRoleTitle} => added to database`);
                    this.viewAllRoles();
                });
            });

        } catch (err) {
            console.error(err);
        };
    };

    async viewAllEmployees() {

        try {
            const [result] = await this.db.promise().query('SELECT employees.id AS `ID`, employees.first_name AS `First Name`, employees.last_name AS `Last Name`, employees.role_id AS `Role ID`, employees.manager_id AS `Manager ID` FROM company_db.employees');

            const table = new Table({
                head: ['ID', 'First Name', 'Last Name', 'Role ID', 'Manager ID'],
            });
            result.forEach(row => table.push([row.ID, row['First Name'], row['Last Name'], row['Role ID'], row['Manager ID']]));

            console.log(table.toString());
            return result;

        } catch (err) {
            console.error(err);
        };
    };

    async addEmployee() {

        try {
            const [roles] = await this.db.promise().query('SELECT roles.id AS `ID`, roles.title AS `Title` FROM company_db.roles');

            const roleChoices = roles.map((role) => {
                return {
                    name: role.Title,
                    value: role.ID,
                }
            });

            inquirer.prompt([
                {
                    name: 'newEmployeeFirstName',
                    type: 'input',
                    message: "Please enter the employee's first name:"
                },
                {
                    name: 'newEmployeeLastName',
                    type: 'input',
                    message: "Please enter the employee's last name:"
                },
                {
                    name: 'newEmployeeRole',
                    type: 'list',
                    message: "Please select the employee's role:",
                    choices: roleChoices,
                },
                {
                    name: 'newEmployeeManagerId',
                    type: 'input',
                    message: "If applicable, please enter the ID of the employee's manager:",
                },
            ]).then(answer => {
                this.db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answer.newEmployeeFirstName, answer.newEmployeeLastName, answer.newEmployeeRole, answer.newEmployeeManagerId], (err) => {
                    if (err) {
                        console.error(err);
                    }
                    console.log(`Employee: ${answer.newEmployeeLastName}, ${answer.newEmployeeFirstName} => added to database`);
                    this.viewAllEmployees();
                });
            });

        } catch (err) {
            console.error(err);
        };
    };

    async updateEmployeeRole() {

        try {
            const [roles] = await this.db.promise().query('SELECT roles.id AS `ID`, roles.title AS `Title` FROM company_db.roles');

            const roleChoices = roles.map((role) => {
                return {
                    name: role.Title,
                    value: role.ID,
                }
            });

            const employeeChoices = [];

            db.query(`SELECT employees.id, employees.first_name, employees.last_name FROM company_db.employees`, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }

                result.forEach(item => {
                    const name = `${item.first_name} ${item.last_name}`;
                    employeeChoices.push(name);
                });

                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'updateEmployeeName',
                        message: `Please select the employee record to update:`,
                        choices: employeeChoices,
                    },
                    {
                        type: 'list',
                        name: 'updateEmployeeRole',
                        message: `Please select the employee's new role:`,
                        choices: roleChoices,
                    }
                ]).then(answer => {
                    const split = answer.updateEmployeeName.split(' ');

                    db.query(`UPDATE employees SET role_id = ${answer.updateEmployeeRole} WHERE first_name = '${split[0]}' AND last_name = '${split[1]}'`, (err) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(`Updated ${answer.updateEmployeeName}'s role`);
                        this.viewAllEmployees();
                    });
                });
            });

        } catch (err) {
            console.error(err);
        };
    };
};

module.exports = { Queries };