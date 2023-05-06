const db = require('../db/connection.js');

const selectRole = `SELECT roles.id, roles.title, roles.salary
AS department FROM roles LEFT JOIN departments ON roles.department_id = departments.id`;

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

removeRoleprompt = [
    {
        tipe: 'list',
        name: 'removeRole',
        message: 'Please type which role you would like to remove',
    }
];

removeRoleInsertion = (({removeRole})=> {
    const sql = `DELETE FROM roles WHERE title = ?`;
    const parametres = [removeRole];
    db.query(sql, parametres, (err, res) => {});
});

module.exports = {
    rolesPrompt, addRole, removeRoleprompt, removeRoleInsertion
}
