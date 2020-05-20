const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./generateMarkdown");

const questions =
    [{
        type: "input",
        name: "github",
        message: "Please write your GitHub username: ",
    },
    {
        type: "input",
        name: "name",
        message: "Please write your name: ",
    },
    {
        type: "input",
        name: "title",
        message: "Please input your project title: "
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project: "
    },
    {
        type: "input",
        name: "technologies",
        message: "Please input the technologies used: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please input the installation instructions: ",
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage for project: ",
    },
    {
        type: "input",
        name: "license",
        message: "Please list any licenses: ",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list any contributers: ",
    },
    {
        type: "input",
        name: "tests",
        message: "Please input your tests: ",
    },
    {
        type: "input",
        name: "questions",
        message: "Please input your questions: ",
    }]


function writeToFile(fileName, data) {

    return fs.writeFileSync(fileName, data)
};

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile("readme.md", generateMarkdown(answers))
        })
};

init();
