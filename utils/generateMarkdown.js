//https://shields.io/category/license
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # <h1 align="center">${data.projectTitle}</h1>
## Description: ${data.description}
a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package

## Deployed Link: ${data.deployedLink}

## Table of contents
- [Description](#description)
- [DeployedLink](#deployedLink)
- [Installation](#installation)
- [License](#license)
- [Contact](#email)

`;
}

module.exports = generateMarkdown;
