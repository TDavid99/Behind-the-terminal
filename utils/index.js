// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'ProjectName',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project?'
    },
    {
        type:'input',
        name: 'installguide',
        message:'Install guide for your project?'
        },
        {
            type:'input',
            name: 'usage',
            message: 'Enter your project usage information.'
        },
        {
            type:'input',
            name:'contributions',
            message:'please enter your projets contribution guidelines.',
        },
        {
            type:'input',
            name:'Instructions',
            message:'enter the instructions for your project.',

        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    FileSystem.writeToFile(fileName, data, err? console.log (err) : console.log ('Readme Generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(anwsers =>{
        console.log(anwsers);
    });
}

// Function call to initialize app
init();
