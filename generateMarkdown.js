function generateMarkdown(data) {

  let readMe = 
  `# ${data.title}`
 
  //badge
  `![AUR last modified](https://img.shields.io/aur/last-modified/google-Chrome?color=teal&style=plastic)`
  `![GitHub top language](https://img.shields.io/github/languages/top/badges/traffee?style=plastic)`

  `![Profile Pic](${profilePic})`
  
  `## ${data.name}:wave: ${data.github}` 
  `## Description:`
  `${data.description}`

  `## Technologies:`
  `${data.technologies}`
  `##  Installation:`
  `${data.installation}`

  `## License:` 
  `${data.license}`
  `## Usage:`
  `${data.usage}`
  
  `## Contributors:`
  `${data.contributing}`
  `## Tests:`
  `${data.tests}`
  `## Questions:`
  `${data.questions}`

   return readMe;
}

module.exports = generateMarkdown;
