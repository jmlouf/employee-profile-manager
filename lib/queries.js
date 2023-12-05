function viewAllDepartments(db) {
    return db.query('SELECT * FROM departments', function (err, results) {
        console.log('View All Departments');
        console.log(err);
        console.log(results);
    });
};

module.exports = {
    viewAllDepartments
};