// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const renderLicenseBadge = require('./generateMarkdown')


const generateReadme = ({title, description, installation, usage, credits, license}) =>
` Your-Project-Title:

${title}

Description:

${description}

Installation:

${installation}

Usage:

${usage}

Credits:

${credits}

License:

${license}`


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use:',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Enter your project license:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause, none ']
    },
  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
