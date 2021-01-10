// function to generate markdown for README
function generateMarkdown(response) {
    return `
    
    # ${response.Title}

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
    This application is covered by the ${response.license} license.

    ## Contributors
    ${response.Contributors}

    ## Test
    ${response.Test}

    ## Questions
    ${response.Questions}
    
    Find me on GitHub: [${response.Github}](https://github.com/${response.Github})
    
    Email me with any questions: ${response.Email}

  `;
  }
  
  module.exports = generateMarkdown;