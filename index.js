// const api = require("./api");
const generateMarkdown = require("./generateMarkdown");
// const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your repo?"
          },
          {
            type: "input",
            name: "description",
            message: "Describe your project."
          },
          {
            type: "input",
            name: "contents",
            message: "List your table of contents."
          },
          {
            type: "input",
            name: "installation",
            message: "List any installations."
          },
          {
            type: "input",
            name: "usage",
            message: "Desribe the usage."
          },
          {
            type: "input",
            name: "license",
            message: "Enter any licensing."
          },
          {
            type: "input",
            name: "contributing",
            message: "List any contributions."
          },
          {
            type: "input",
            name: "tests",
            message: "Include tests."
          },
          {
            type: "input",
            name: "questions",
            message: "Enter any questions."
          }
    ]);
}

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err) {
//         if (err) {
//           throw err;
//         }
// });

//add email, photo, badge specific to repo

function init() {
    try {
        const data = await promptUser();
    
        const html = generateMarkdown(data);
    
        await writeFileAsync("index.html", html);
    
        console.log("Successfully wrote to index.html");
      } catch(err) {
        console.log(err);
      }
}

init();

// * The generated README includes a bio image from the user's GitHub profile.

// * The generated README includes the user's email.

// * The generated README includes the following sections: 
//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions

// * The generated README includes 1 badge that's specific to the repository.