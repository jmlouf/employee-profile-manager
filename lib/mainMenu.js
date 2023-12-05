const inquirer = require("inquirer");

const mainMenuPrompts = [
    {
        name: 'mainMenuChoice',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all employees',
            'View all roles',
            'Add employee',
            'Add role',
            'Update employee role',
            'Exit',
        ]
    },
];

function mainMenu() {
    console.log("Starting main menu");

    return inquirer
        .prompt(mainMenuPrompts)
        .then(() => {
            console.log('data');
        });
};

// Constructor CLI exported.
module.exports = { mainMenu };