var inquirer = require("inquirer");

const questions = [
    {
        type: 'input',
        message: 'What badges do you have?',
        name: 'badges'
    },
    {
        type: 'input',
        message: 'Project name: ',
        name: 'project'
    },
    {
        type: 'input',
        message: 'Project description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'contents'
    },
    {
        type: 'input',
        message: 'Installation: ',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Usage: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'License: ',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Contributors: ',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'Tests: ',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Questions: ',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'GitHub Profile Picture URL: ',
        name: 'picture'
    },
    {
        type: 'input',
        message: 'GitHub Email: ',
        name: 'email'
    }
];





function writeToFile(fileName, data) {
    
}

function init() {
    inquirer.prompt(questions)
    .then(function(response) {
        writeToFile(response);
    })
}

init();
