function generateMarkdown(data) {

  let readMe = 
  `# ${data.title}`
  `<hr>`
  //badge
  `![AUR last modified](https://img.shields.io/aur/last-modified/google-Chrome?color=teal&style=plastic)`
  `![GitHub top language](https://img.shields.io/github/languages/top/badges/traffee?style=plastic)`

  `![Profile Pic](${profilePic})`
  
  `## ${data.name}:wave:` 
  `###### ${data.github}` 
  `### **Description:** ${data.description}`
  
  `### ${data.technologies}`
  `### ${data.installation}`
  `### ${data.license}`


  `### ${data.usage}`
  
  `### ${data.contributing}`
  `### ${data.tests}`
  `### ${data.questions}`

 
// # At least one badge
// # Table of Contents
// # User GitHub profile picture
// # User GitHub email

///////////
  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
