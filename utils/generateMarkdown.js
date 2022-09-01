//https://shields.io/category/license
const { default: inquirer } = require("inquirer")

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

## Description: 
${data.description}

The language for ${data.projectTitle} is: ${data.languages};

### 🔗Deployed Link: ${data.deployedLink}

### 🖇Github Page: ${data.gitpageLink}

## Table of contents

- [Description](#description) What the app is for
- [DeployedLink](#deployedLink)
- [Installation](#installation) How to install it
- [Usage Information](#usage) How to use it
- [License](#license)
- [Screenshot](#Screenshot)
- [Contact](#email) Contact contributor to reprot issue
- [Contribution Guidelines](#contribution)
- [Test Instructions](#test)

## 🧐Installation
${data.installation}

## 𖧝Usage 
${data.usage}

## 🪪License
![Badge](https://img.shields.io/badge/license-${data.license}-brightgreen.svg)

Use inquirer from your command line to answer questions about your project.
View walk through video here - [Screencastify](https://youtu.be/DoybAn1Rmow)<br>

## Screenshot

The following image demonstrate the web application's appearance:

![Team Page](video/page.gif)


## 🤝Contribution Guidelines
Contact me On GitHub[kaihuan](https://github.com/kaihuan-huang)

## 🧩Test Instructions
Can the user test it? ${data.test}

## ❓Questions❓
More information? Don't hesitate to contact me: 📧 <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>

`;
}

module.exports = generateMarkdown;
