const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const gitHubAPI = require('github-api');
const generateMarkdown = require("./generateMarkdown");

writeToFile();


function writeToFile(data) {
    inquirer
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

        //github API
        .then(async function getUser() {
            try {
                const { githubAPI } = await axios.get({
                    profilePic: owner.avatar.url,
                    profileURL: owner.url
                });
                const { URL } = await axios.get(
                    `https://api.github.com/users/${githubAPI}`
                );
                console.log(URL);

                //user Input
                let userData = generateMarkdown(data)

                // fs.writeFile(file, data[, options], callback)
                fs.writeFile("README.md", userData, function (error, data) {
                    console.log("README done");

                })
            }
            catch (err) {
                console.log(err);
            }
        });
} // end of writeToFile function


// console log errors ex 200, 404


// const questions = [
// ];
// function writeToFile(fileName, data) {
// }
// function init() {
// }
// init();

// ask for the info with inquirer and then call the github api and then you need to build a string with  
// regular markdown  readme and the variables coming from your questions + you GitHub response