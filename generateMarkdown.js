//Template for index.html file to be created
function generateMarkdown(data) {
//update to generateMarkdown(data, apiData) and insert ${apiData} to $("#api")
  return `
    # ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents
    ${data.contents}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.tests}
    ## Questions
    ${data.questions}
    ## Contact`;
}

module.exports = generateMarkdown;