const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./generateMarkdown");

writeToFile();


function writeToFile(data) {
      //github API
        async function getUser() {
            const data = await axios.get("https://api.github.com");
            return data;
           
            }
} // end of writeToFile function
