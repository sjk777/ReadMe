// TODO: Create a function that returns a license badge based on which license is passed in
const https = require('https');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "none"){
    return "";
  }
  else{
    return `![github license](https://img.shields.io/badge/license-${license}.svg)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "none"){
    return "";
  }
  else{
    return "-[License](#license)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "none"){
    return "";
  }
  else{
    return `## License
    For more information on this license, please visit www.opensource.org`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
