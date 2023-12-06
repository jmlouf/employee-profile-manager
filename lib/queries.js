function viewAllDepartments(db) {
    return db.query('SELECT * FROM departments')
        .then(([results]) =>
            console.table(results))
        .catch((err) =>
            console.error(err));
};

module.exports = {
    viewAllDepartments
};
