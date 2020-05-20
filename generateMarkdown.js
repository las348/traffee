function generateMarkdown(questions) {

  let readMe = `# ${questions.title}

  ![AUR last modified](https://img.shields.io/aur/last-modified/google-Chrome?color=teal&style=plastic)
  ![GitHub top language](https://img.shields.io/github/languages/top/badges/traffee?style=plastic)

  ## ${questions.name} ${questions.github} 
  ## Description:
  ${questions.description}

  ## Technologies:
  ${questions.technologies}
  ##  Installation:
  ${questions.installation}

  ## License: 
  ${questions.license}
  ## Usage:
  ${questions.usage}
  
  ## Contributors:
  ${questions.contributing}
  ## Tests:
  ${questions.tests}
  ## Questions:
  ${questions.questions}`

   return readMe;
}

module.exports = generateMarkdown;


