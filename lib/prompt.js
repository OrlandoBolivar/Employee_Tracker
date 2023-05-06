const inquire = require('inquirer');

const db = require('../db/connection.js');
const { default: inquirer } = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices.js');

const mainList = () => {
    return inquirer.prompt([
        type= 'list',
        Name= 'tracker',
        message= 'please select one of the following options!',
        Choices= [
            new inquirer.Separator('---SELECT ONE OF THE FOLLOWING--'),
            'Visit all departments',
            'Visit all roles',
            'Visit all employees',

            new inquirer.Separator('---REGISTER NEW---'),
            'Register a new department',
            'Register a new role',
            'Register a new employee'
        ]
    ])
    .then(({tracker}) => {
        if (tracker === 'Visit all departments'){showAll(depat)}

    })

}
