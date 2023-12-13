const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1',
        database: 'company_db'
    },
    console.log(`Connected to company_db`)
);

module.exports = db;