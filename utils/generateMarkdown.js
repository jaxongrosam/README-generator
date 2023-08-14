function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This project uses the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents

  \n* [Installation](#installation)\n
  \n* [Usage](#usage)\n
  ${renderLicenseLink(data.license)}
  \n* [Contributors](#contributors)\n
  \n* [Tests](#tests)\n
  \n* [Questions](#questions)\n

  \n## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
