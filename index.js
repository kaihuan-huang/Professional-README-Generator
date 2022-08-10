// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util')
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project',
        },
        {
            type: 'input',
            name: 'deployed link',
            message: 'What is this project Deployed link?',
        },
        {
            type: 'input',
            name: 'gitpage link',
            message: 'What is this project Gitpage link?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process if you have',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project usage for?',
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: 'input',
            name: 'contributor',
            message: 'Who is the contributor?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ])
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

//Create a function to initialize app, using writeFileSync as a promise
const init = () => {
    promptUser()
        .then((data) => writeFile('README.md', generateMarkdown(data)))
        .then(() => console.log('Sucessfully wrote readme.md.'))
        .catch((err) => console.log(err));
};

// Function call to initialize app
init();
