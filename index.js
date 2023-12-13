const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connections.js');
const { Queries } = require('./lib/queries.js');

const mainMenuPrompt = [
    {
        name: 'mainMenu',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'Add a department',
            'View all roles',
            'Add a role',
            'View all employees',
            'Add an employee',
            'Update an employee role',
            'Exit',
        ]
    }
];

async function getMainMenu() {
    try {
        const answer = await inquirer.prompt(mainMenuPrompt);
        const selected = answer.mainMenu;

        switch (selected) {
            case 'View all departments':
                await new Queries().viewAllDepartments();
                break;

            case 'Add a department':
                await new Queries().addDepartment();
                break;

            case 'View all roles':
                await new Queries().viewAllRoles();
                break;

            case 'Add a role':
                await new Queries().addRole();
                break;

            case 'View all employees':
                await new Queries().viewAllEmployees();
                break;

            case 'Add an employee':
                await new Queries().addEmployee();
                break;

            case 'Update an employee role':
                await new Queries().updateEmployeeRole();
                break;

            case 'Exit':
                quit();
                return;

            default:
                console.log('Error: Default');
        };

    } catch (err) {
        console.error(err);
    };
};

function quit() {
    console.log("Goodbye");
    process.exit();
};

getMainMenu();