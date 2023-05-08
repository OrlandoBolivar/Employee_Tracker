const db = require('../db/connection.js');

const selectedDepartment = `SELECT * FROM department`;

const departmentPrompt = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department?'
    }
];

const insertDepartment = (({departmentName}) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const sectionD = departmentName;
    db.query(sql, sectionD, (err, res) => {});
    
});

removeDepartment = (({deleteDepartment})=> {
    const sql = `DELETE FROM departments WHERE name = (?)`;
    const sectionD = [deleteDepartment];
    db.query(sql, sectionD, (err, res) => {});
});

module.exports = {
    selectedDepartment, departmentPrompt, insertDepartment, removeDepartment,
};

