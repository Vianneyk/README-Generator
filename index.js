// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title"
    },
    {
        type: "input",
        message: "Please write a description of your project",
        name: "Description"
    },
    {
        type: "input", 
        message: "Installation instruction",
        name: "Install"
    },
    {
        type: "input",
        message: "Explain how to use the app",
        name: "Usage"
    },
    {
        type: "list",
        message: "Which license are you using?",
        name: "License",
        choices: [
            "MIT license",
            "GVL GPL license",
            "Apache license",
            "No license"
        ]
    },
    {
        type: "input",
        message: "Are there ny contributors?",
        name: "Contributors"
    },
    {
        type: "input", 
        message: "How to test the app",
        name: "Test"
    },
    {
        type: "input", 
        message: "Any questions?",
        name: "Questions"
    },
    {
        type: "input", 
        message: "What is your Github Username?",
        name: "Github"
    },
    {
        type: "input", 
        message: "What is your email?",
        name: "Email"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("ReadMe was created");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);
    });

}

// function call to initialize program
init();