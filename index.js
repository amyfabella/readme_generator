const generateMarkdown = require("./generateMarkdown");
// const api = require("./api");
const inquirer = require("inquirer");
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

// function apiData
// call api

//Function that creates README file using obtained information and template
async function init() {
    try {
        const data = await promptUser();

        // const apiData = await apiData();
        // update html to generatreMarkdown(data, apiData)
    
        const html = generateMarkdown(data);
    
        await writeFileAsync("index.html", html);
    
        console.log("Successfully wrote to index.html");
    } 
    catch(err) {
        console.log(err);
    }
}

//Calling function to create file
init();