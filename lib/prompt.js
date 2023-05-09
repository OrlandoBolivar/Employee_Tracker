const inquirer = require('inquirer');
const db = require('../db/connection.js');
const {selectedDepartment, departmentPrompt, insertDepartment} = require('./departments.js');
const {selectRole, rolesPrompt, addRole} = require('./roles.js');
const {selectedemployee, employeePrompt, insertNewEmployee, updateMployeePromt, updateEmployee} = require('./employees.js');

function showAll(queryCall) {
    db.query(queryCall, (err, res) => {
        if (err) throw err; 
        console.log(res);
    });
 
};

function add(queryCall) {
    db.query(queryCall, (err, res) => {
        if (err) throw err; 
        console.log(res);
    });

};

function update (queryCall) {
    db.query(queryCall, (err, res) => {
        if (err) throw err; 
        console.log(res);
    });

};

const mainList = () => {
    return inquirer.prompt(
        [{
        type: 'list',
        name: 'tracker',
        message: 'please select one of the following options!',
        choices: [
            new inquirer.Separator('---SELECT ONE OF THE FOLLOWING--'),
            'Visit all departments',
            'Visit all roles',
            'Visit all employees',

            new inquirer.Separator('---REGISTER NEW---'),
            'Register a new department',
            'Register a new role',
            'Register a new employee',

            new inquirer.Separator('---UPDATE AN EMPLOYEE ROLE---'),
            'Update an employee',
        ]
    },
    ])
    .then(({tracker}) => {
        if (tracker === 'Visit all departments'){showAll(selectedDepartment)};
        if (tracker === 'Visit all roles'){showAll(selectRole)};
        if (tracker === 'Visit all employees'){showAll(selectedemployee)};
        if (tracker === 'Add a department') {add(departmentPrompt, insertDepartment)};
        if (tracker === 'Add a role') {add(rolesPrompt, addRole)};
        if (tracker === 'Add an employee') {add(employeePrompt, insertNewEmployee)};
        if (tracker === 'Update an employee role') {update(updateMployeePromt, updateEmployee)};
    })

}
module.exports = {
    mainList
};