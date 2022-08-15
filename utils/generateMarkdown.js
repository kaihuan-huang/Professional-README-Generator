//https://shields.io/category/license
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) { }

const { default: inquirer } = require("inquirer")

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}
## Description: 
${data.description}


## 🔗Deployed Link: ${data.deployedLink}
## 🖇Github Page: ${data.gitpageLink}

## Table of contents
- [Description](#description) What the app is for
- [DeployedLink](#deployedLink)
- [Installation](#installation) How to install it
- [Usage Information](#usage) How to use it
- [License](#license)
- [Contact](#email) Contact contributor to reprot issue
- [Contribution Guidelines](#contribution)
- [Test Instructions](#test)

## 🧐Installation
${data.installation}

## 𖧝Usage 
${data.usage}

## 🪪License
![Badge]https://img.shields.io/badge/license-${data.license}-brightgreen.

## 🤝Contribution Guidelines
Contact me [kaihuan](https://github.com/kaihuan-huang${data.deployedLink})

## ❓Questions❓
More information? Don't hesitate to contact me: 📧[Email](${data.email})

`;
}

module.exports = generateMarkdown;
