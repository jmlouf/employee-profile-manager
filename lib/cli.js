const inquirer = require('inquirer');
const mysql = require('mysql2');
const {
    viewAllDepartments
} = require('./queries.js');

const mainMenuPrompt = [
    {
        name: 'mainMenu',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit',
        ]
    },
];

class CLI {
    constructor() {
        this.db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            // database: 'employees_db'
        });
    };

    run() {
        inquirer
            .prompt(mainMenuPrompt)
            .then((answer) => {
                let selected = answer.mainMenu;

                switch (selected) {
                    case 'View all departments':
                        viewAllDepartments(this.db);
                        break;

                    case 'View all roles':
                        break;

                    case 'View all employees':
                        break;

                    case 'Add a department':
                        break;

                    case 'Add a role':
                        break;

                    case 'Add an employee':
                        break;

                    case 'Update an employee role':
                        break;

                    default:
                        console.log('Default.');
                }
            })
    }
};

// CLI exported.
module.exports = { CLI };