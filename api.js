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
        const imageURL = res.data.avatar_url;
        const email = res.data.email

        console.log("User pic URL: " + imageURL);
        console.log("User email: " + email);
      });
    })
  }
}
  
module.exports = api;