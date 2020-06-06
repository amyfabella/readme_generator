function generateMarkdown(data) {
  //add email, photo, badge specific to repo
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>ReadME</title>
</head>
<body>
  <div class="container">
    <h1 class="display-4"># ${data.title}</h1>
    <h2>## Description</h2>
    <p>${data.description}</p>
    <h3>## Table of Contents</h3>
    <p>${data.contents}</p>
    <h4>## Installation</h4>
    <p>${data.installation}</p>
    <h5>## Usage</h5>
    <p>${data.usage}</p>
    <h6>## License</h6>
    <p>${data.license}</p>
    <h7>## Contributing</h7>
    <p>${data.contributing}</p>
    <h8>## Tests</h8>
    <p>${data.tests}</p>
    <h9>## Questions</h9>
    <p>${data.questions}</p>
  </div>
</body>
</html>`;
}

module.exports = generateMarkdown;