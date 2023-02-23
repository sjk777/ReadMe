// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "repoLink",
    message: "Enter Repo Link:",
  },
  {
    type: "input",
    name: "deploymentLink",
    message: "Enter your deployment Link:",
  },
  {
    type: "input",
    name: "liveLink",
    message: "Enter the title of your Project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter instructions for installation:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter Contributing users:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your Github username:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your License:",
    choices: [
        {name:"The Unlicense", value:"Unlicense-blue"},
        {name:"GN GPLv3", value: "GPLv3-blue"},
        {name:"GN AGPLv3", value:"AGPL%20v3-blue"},
        {name:"GNU LGPLv3", value: "LGPL%20v3-blue"},
        {name:"Mozilla Public 2.0", value: "MPL%202.0-brightgreen"},
        {name:"Apache 2.0", value: "Apache%202.0-blue"},
        {name:"MIT", value:"MIT-yellow"},
        {name: "Boost Software 1.0", value: "Boost%201.0-lightblue"},
        {name:"The Unlicense", value: "Unlicense-blue"},
        "none",
    ]
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(__dirname, "/dist", fileName),data,(err) =>{
        if (err){
            console.error(err);
            return;
        }
        console.log(`${fileName} written`)
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
