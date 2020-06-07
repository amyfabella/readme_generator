const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile); 

//Obtaining info provided by user for README file
function promptUser() {
    return inquirer
        .prompt([
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
        ])
}

//Obtaining GitHub info to add to README file
function writeToFile() {
  inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
      const imageURL = res.data.avatar_url;
      const email = res.data.email

      const apiSnippet = `
      Here is my face: ${imageURL}
      Here is my email: ${email}`
      
      fs.appendFile("readme.txt", apiSnippet, function(err) {

        if (err) {
          console.log(err);
        }
        else {
          console.log("Successfully added GitHub Info!");
        }
      
      });
    });
  })
}

//Function that creates README file using obtained information and template
async function init() {
    try {
        const data = await promptUser();
    
        const txt = generateMarkdown(data);
    
        await writeFileAsync("readme.txt", txt);
    
        console.log("Successfully wrote to readme.txt");

        await writeToFile();
    } 
    catch(err) {
        console.log(err);
    }
}

//Calling function to create file
init();