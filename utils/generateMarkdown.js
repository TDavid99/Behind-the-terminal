// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/Licence-${license}-green.svg)`;

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==="MPL_2.0"){
    return "https://opensource.org/licenses/MPL-2.0";
  }else if (license=== "EPL_1.0"){
    return "https://opensource.org/licenses/EPL-1.0";
  }
  if (license==="none"){
    return(
      `\n*[License](license)\n`
    )
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
  }else {
    return "";
  }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderBadge(data.license)}

##Description
${data.description}


##Table of Contents

*[Installations](#InstallInstructions)

*[Usage](#usage)

${renderLink(data.license)}

*[Contributions](#contributions)

*[TestInstructions](#test)

## Installations (Instructions)

For instructions, run these comman


`;
}


module.exports = generateMarkdown;
