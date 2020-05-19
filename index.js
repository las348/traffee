const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
// const gitHubAPI = require('github-api');
const generateMarkdown = require("./generateMarkdown");

const questions = inquirer
    .prompt([
        {
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
        }
    ])

function writeToFile(fileName, data) {
    //user Input
    let userData = generateMarkdown(data)

    // fs.writeFile(file, data[, options], callback)
    fs.writeFile("README.md", userData, function (err) {
       
       if (err) {
          return console.log(err);
       }
       console.log("Success!");
    })
};

function init(req) {

    let queryGithubURL = "https://api.github.com/users/" + req.github;
   
    axios.get(queryGithubURL).then(
        function (gitProfile) {
            let data = gitProfile.data;
            // Add github profile picture
            let profilePic = data.avatar.url;
            let profileURL = data.url;

        })
};

init();