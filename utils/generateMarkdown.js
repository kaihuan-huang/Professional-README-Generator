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
- [Contact](#email) Contact contributor to reprot issue
- [Contribution Guidelines](#contribution)
- [Test Instructions](#test)

## 🧐Installation
${data.installation}

## 𖧝Usage 
${data.usage}

## 🪪License
![Badge](https://img.shields.io/badge/license-${data.license}-brightgreen.svg)

## 🤝Contribution Guidelines
Contact me [kaihuan](https://github.com/kaihuan-huang${data.deployedLink})

## 🧩Test Instructions
Can the user test it? ${data.test}

## ❓Questions❓
More information? Don't hesitate to contact me: 📧 <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>

`;
}

module.exports = generateMarkdown;
