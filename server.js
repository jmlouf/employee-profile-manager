const express = require('express');
const mysql = require('mysql2');
const { mainMenu } = require('./lib/mainMenu.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database.
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // database: 'employees_db'
},
    console.log('Connected to employee database.')
);

db.connect(mainMenu);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);