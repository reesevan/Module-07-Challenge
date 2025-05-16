// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown"); // Ensure this path is correct

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Make a unique name for your project!",
    },
    {
        type: "input",
        name: "description",
        message: "What is the purpose and function of this project?",
    },
    {
        type: "list", // Changed to 'list' for a single selection
        name: "license", // Use lowercase for consistency
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "Apache2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
    },
    {
        type: "input",
        name: "usage",
        message: "State the name of the languages or technologies to be used.",
    },
    {
        type: "input",
        name: "creator",
        message: "Type your GitHub username.",
    },
    {
        type: "input",
        name: "name",
        message: "Type your full name.",
    },
    {
        type: "input",
        name: "email",
        message: "Please type your email address here.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Provide names of any contributors. (Use GitHub usernames)",
    },
    {
        type: "input",
        name: "test",
        message: "Provide a walkthrough of any required tests if applicable.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const dir = path.join(process.cwd(), 'dist'); // Path to the 'dist' directory

    // Check if the directory exists
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir); // Create the directory if it doesn't exist
    }

    // Write the file in the correct path
    return fs.writeFileSync(path.join(dir, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("README.md", generateMarkdown({ ...responses })); // Pass only the filename
    });
}

// Function call to initialize app
init();