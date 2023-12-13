# Employee Profile Manager
[![License Badge](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

## Description
    
This command line application demonstrates integrating several key technologies for building a robust CLI data viewer and editor:

- MySQL Database: Stores entire employee organizational structure and data
- mysql2: Enables connecting and querying MySQL database from Node.js
- Inquirer.js: Provides interactive user prompt interface and input validation
- cli-table3: Formats MySQL query results into console tables

Modular routing and class abstraction separates concerns into modules handling user input (Inquirer prompts), database logic (Queries class), and user interface display (console tables).

The getMainMenu routing function shows how asynchronous control flow allows the main menu to recur while still allowing action-specific prompts to gather details.
    
## Table of Contents

- [Employee Profile Manager](#employee-profile-manager)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Questions](#questions)
  - [License](#license)

## Usage

This application allows users to view and manage employee data from a MySQL database via an interactive command line interface.

To start, run node index.js from the root folder of the application. This will connect to the database and display a main menu prompt with options to view departments, roles, employees, add new records, update employee roles, or exit the application.

Selecting any option will either display a formatted table of database records or prompt the user to input new values to add or update, such as department name, role title, employee first and last names, salaries, and manager assignments.

The following demonstrates the application's appearance and functionality:

[Video Walkthrough Link](https://drive.google.com/file/d/1O7LFrHenib1OAgcit8iY4NU34dcTlaZI/view)

## Credits

This project was created for educational purposes as part of the KU Coding Bootcamp curriculum.

The following resources were utilized:

- KU Coding Bootcamp Spot:
    - Provided project requirements and guidelines.
- W3Schools:
    - Reference for general documentation.
- MDN Web Docs:
    - Referenced for general documentation.
- Stack Overflow:
    - Referenced for general documentation.
- NPM:
    - [NPM](https://npmjs.com)
- GitHub:
    - sidorares:
        - [node-mysql2](https://github.com/sidorares/node-mysql2)
- MySQL:
    - [MySQL Documentation](https://dev.mysql.com/doc/refman/8.0/en/)
- MySQL2:
    - [MySQL2 Package](https://www.npmjs.com/package/mysql2)
    - [MySQL2 Documentation](https://github.com/sidorares/node-mysql2/tree/master/documentation/en)
- Inquirer:
    - [Inquirer@8.2.4 Package](https://www.npmjs.com/package/inquirer)
- Prisma.io:
    - [MySQL Data Constraints](https://www.prisma.io/dataguide/mysql/column-and-table-constraints)

## Questions

For any questions, feel free to email me ([joem3847@gmail.com](mailto:joem3847@gmail.com)) or visit my GitHub profile ([jmlouf](https://github.com/jmlouf/)).

## License

This project is available under the following license: MIT. For more information on rights and limitations, please review the [LICENSE](./LICENSE) file.
    