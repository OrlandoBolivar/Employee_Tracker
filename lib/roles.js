const db = require('../db/connection.js');

const selectRole = `SELECT * FROM roles`;

const rolesPrompt = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is your role in the company?',
    },{
        type: 'input',
        name: 'annualSalary',
        message: 'Insert your annual base salary',
    },
];

const addRole = (({ roleName, annualSalary }) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, (SELECT id FROM departments WHERE name= ?))`;
    const rolesValues = [ roleName, annualSalary ];
    db.query(sql, rolesValues);
});

module.exports = {
    selectRole, rolesPrompt, addRole};
