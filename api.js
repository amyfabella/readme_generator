const axios = require("axios");

const api = {
  getUser() {
    inquirer
      .prompt({
        message: "Enter your GitHub username:",
        name: "username"
      })
      .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/`;
    
        axios.get(queryUrl).then(function(res) {
          const repoNames = res.data.map(function(repo) {
            return repo.name;
          });
    
          const repoNamesStr = repoNames.join("\n");
    
          fs.writeFile("repos.txt", repoNamesStr, function(err) {
            if (err) {
              throw err;
            }
    
            console.log(`Saved ${repoNames.length} repos`);
          });

        // axios.get(queryUrl).then(function(res) {
        //   const profileImage = res.data.map(function(user) {
        //     return user.profileImage;
        //   });
        // });
        
        // axios.get(queryUrl).then(function(res) {
        //   const email = res.data.map(function(user) {
        //     return user.email;
        //   });
        // });

        // axios.get(queryUrl).then(function(res) {
        //   const badge = res.data.map(function(repo) {
        //     return repo.badge;
        //   });
        // });
      });

    });
  }
}

  
  module.exports = api;