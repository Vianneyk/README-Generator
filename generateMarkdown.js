// function to generate markdown for README
function generateMarkdown(response) {
    return `
    
    # ${response.Title}
    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributors](#contributors)
    * [Test](#test)
    * [Questions](#questions)

    ## Description
    ${response.Description}

    ## Installation
    ${response.Install}

    ## Usage
    ${response.Usage}

    ## License
    ![badge](https://img.shields.io/badge/license-${response.License}-brightgreen)
    <br />
    This application is covered by the ${response.license} license.

    ## Contributors
    ${response.Contributors}

    ## Test
    ${response.Test}

    ## Questions
    ${response.Questions}<br/>
    <br/>
    :octocat: Find me on GitHub: [${response.Github}](https://github.com/${response.Github})<br />
    <br />
    ✉️ Email me with any questions: ${response.Email}<br /><br />

  `;
  }
  
  module.exports = generateMarkdown;