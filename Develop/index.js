// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'repoLink',
        message: 'Enter Repo Link:',
    },
    {
        type:'input',
        name:'liveLink',
        message: 'Enter your Live Link:',
    },
    {
        type: 'input',
        name:'liveLink',
        message: 'Enter the title of your Project:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
