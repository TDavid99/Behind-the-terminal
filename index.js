// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const utils = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "Whats your email?"
    },
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
        type: 'input',
        name: "installInstructions",
        message: 'Please enter the installation instructions for your project',
        quickselect: "npm i"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information for your information.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please enter your projects contribution guidelines.'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please enter the test instructions for your project.'
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to present your project under?",
        options: [
            'MPL 2.0',
             'EPL 1.0',
            'MIT'],
    
        validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            }else{
                console.log("select a license.")
            }
            }
        },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((Anwsers) => {
            writeToFile("./README.md", generateMarkdown({ ... Anwsers }));
        
        });
}

// Function call to initialize app
init();
