const db = require('../db/connection.js');


// function to return data json from a different library 
const selectedemployee = `SELECT * FROM employees`;

const employeePrompt = [
    {
        type: 'input',
        name: 'firstName',
        message: 'What is the employee`s first name?',
    },{
        type: 'input',
        name: 'lastName',
        message: 'What is the employee`s last name?',
    },{
        type: 'input',
        name: 'employee-role',
        message: 'what is the employee`s role?'
    },{
        type: 'input',
        name: 'employee_manager_id',
        message: 'what is the employee`s manager id?'
    }
]

const insertNewEmployee = (({ firstName, lastName, employeeRole, employeeManagerId}) => {
    const sql = `INSERT INTO employees (first_name, last_name, employee-role, employees_manager_id,) VALUES (?, ?, ?, ?)`;
    const employeeInfo = [firstName, lastName, employeeRole, employeeManagerId ];
    db.query(sql, employeeInfo, (err, res) => {});
});

const updateMployeePromt = [
    {
        type: 'list',
        name: 'employeeName',
        message: 'select the employee you would like to update',
        choices: [],
        //import data from external library where the elements containe employee name
    },{
        type: 'input',
        name: 'newRole',
        message: 'what is the new role?',
     },
    //    {
    //     type: 'confirm',
    //     name: 
    // }
]

const updateEmployee = (({employeeRole, employeeManagerId}) => { 
    const sql = `UPDATE employee SET employees.role_id = (SELECT id FROM roles WHERE roles.id = employees.role_id)
    WHERE EXISTS (SELECT * FROM roles WHERE roles.id = employees.role_id) VALUES (?, ?)`;
    const updateMployeeInfo = [employeeRole, employeeManagerId];
    db.query(sql, updateMployeeInfo, (err, res) => {});      
})

module.exports = {
    selectedemployee, employeePrompt, insertNewEmployee, updateMployeePromt, updateEmployee
};