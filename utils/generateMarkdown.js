// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(data) {
  return`# ${data.ProjectName}`
}
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/Licence-${license}-blue.svg)`;

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MPL_2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license === "EPL_1.0") {
    return "https://opensource.org/licenses/EPL-1.0";
  }
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license) {
      return `${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}`;
    } else {
      return "";
    }
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectName}


  ${renderBadge(data.license)}

##Description
${data.description}


##Table of Contents
*[Installations](#InstallInstructions)
*[Usage](#usage)
*[Contributions](#contributions)
*[TestInstructions](#test)
*[License](#license)
*[Questions ](#questions)

## Installations (Instructions)
${data.testInstructions}

## Usage 
${data.usage}

${renderSection(data.license)}


##Contributions
${data.contributions}


##Test 
${data.testInstructions}

##Questions
for any questions reach me at ${data.email}

##License
The licenses for work is under the ${data.license}
} license. More info can be found at
${renderLink(data.license)}.

`}


module.exports = generateMarkdown;
