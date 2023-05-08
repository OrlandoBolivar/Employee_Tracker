const inquirer = require('inquirer');
const db = require('../db/connection.js');
const {selectedDepartment, departmentPrompt, insertDepartment, removeDepartment} = require('./departments.js');
const {selectRole, rolesPrompt, addRole, removeRoleprompt, removeRoleInsertion} = require('./roles.js');


function showAll(queryCall) {
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

            new inquirer.Separator('---REMOVE EXISTING DEPARTMENT OR EMPLOYEE---'),
            'Remove an existing department',
            'Remove an existing role',
            'Remove an existing employee'
        ]
    },
    ])
    .then(({tracker}) => {
        if (tracker === 'Visit all departments'){showAll(selectedDepartment)};
        if (tracker === 'Visit all roles'){showAll(selectRole)};

        if (tracker === 'Register a new department'){departmentPrompt};
        // then({insertDepartment}),

        // if (tracker === 'Remove an existing department'){showAll(removeDepartment)};

 
    })

}
module.exports = {
    mainList
};