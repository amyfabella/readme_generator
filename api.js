const axios = require("axios");
const inquirer = require("inquirer");

//Obtaining info from GitHub based on username  
const api = {
  getUser() {
    inquirer
    .prompt({
      message: "Enter your GitHub username:",
      name: "username"
    })
    .then(function({ username }) {
      const queryUrl = `https://api.github.com/users/${username}`;
  
      axios.get(queryUrl).then(function(res) {
        const userImage = res.data.avatar_url;
        const userEmail = res.data.email

        console.log("User pic URL: " + userImage);
        console.log("User email: " + userEmail);
      });
    })
  }
}
  
module.exports = api;