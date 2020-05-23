function generateMarkdown(questions) {

  let readMe = `# ${questions.title}

  ![AUR last modified](https://img.shields.io/aur/last-modified/google-Chrome?color=teal&style=plastic)

  # Table of Contents
 1. [Description](#Description)
 2. [Installation](#Installation)
 3. [Usage](#Usage)
 4. [License](#License)
 5. [Contributing](#Contributing)
 6. [Tests](#Tests)
 7. [Questions](#)Questions
 
  ## ${questions.name} :wave: ${questions.github} 
  ## Description:
  ${questions.description}

  ## Technologies:
  ${questions.technologies}

  ##  Installation:
  ${questions.installation}

  ## Usage:
  ${questions.usage}
  
  ## Contributors:
  ${questions.contributing}

  ## Tests:
  ${questions.tests}

  ## Questions:
  ${questions.questions}

  ## License: 
  ${questions.license}`

   return readMe;
}

module.exports = generateMarkdown;


