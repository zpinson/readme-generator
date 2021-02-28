// TODO: Include packages needed for this application
const requirer = require('inquirer')
const path = require ('path')
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is your project name?'
    },
    {
        type: 'input',
        name: 'describe',
        message: 'Describe your project?'
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide instructions on how to contribute to your project.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'your collaborators, if any, and any other third party source tou used'
    },
    {
        type: 'list',
        name: 'license',
        message: 'what kind of license is your project using?',
        choices: ['MIT', 'APACHE', 'Mozilla', 'Boost', 'NONE']
    },
    {
        type: 'input',
        name: 'features',
        message: 'list the features of your project'
    },
    
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'how do you proceed to test your application?'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('generating your readme')
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses}))
})
// console.log(path.join(process.cwd(), 'README.md'))
// const utilsFolder = path.resolve(__dirname, "utils")
// const pathOfReadme =path.join(utilsFolder, "readme.md")
// console.log(pathOfReadme)
}

// Function call to initialize app
init();
