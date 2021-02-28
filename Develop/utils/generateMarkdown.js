// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'NONE') {
  return `![License](https://img.shields.io/badge/License-${license}-green)`
  } 
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'NONE') {
    return '- [License](#license)'
    } 
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'NONE') {
      return `## License\nThis project is under ${license} license`
      } 
      return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  
  ${data.describe}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Credits](#credits)
  - [Tests](#tests)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)
  ## Installation
  ${data.instalation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Credits
  ${data.credits}
  ${renderLicenseSection(data.license)}
  ## Features
  ${data.features}
  ## Tests
 ${data.tests}
  ## Questions
  If you have any questions about this project or you would like to further disscus it you can contact me:
  \nEmail: ${data.email}. 
  \nGitHub: ${data.github}
`;
}

module.exports = generateMarkdown;