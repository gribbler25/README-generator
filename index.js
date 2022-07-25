//Include packages needed for this application--
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./src/page-template");

//Create an array of questions for user input--
const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
      default: "gribbler25",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Provide an email where you can be reached with questions",
      default: "gribbler25@yahoo.com",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      default: "Create a README",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter your project description.",
      default:
        "This project is about creating a simple question/answer format at the command line to gather user data for the creation of a professional comprehesive README file for any project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Enter your project installation instructions.",
      default:
        "This project uses Node.js at the command line. Clone the repo to a directory then in your local IDE use command 'npm install' on comand line for the correct packages to install on your machine, then run the command 'node index.js' to check if dependencies are working with the command line questions generating the markdown file called 'readme.md'.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter installation instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide instructions for use.",
      default:
        "Simply run 'node index.js' command at the command line and answer the questions until the readme.md file is created. Next, Preview the file by right-click on the readme.md file in VScode explorer and copy this file to any relavant project you may be working on.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide instructions for the user!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributing",
      message: "Provide a link to guidelines for contributing to this project.",
      default: "https://www.contributor-covenant.org",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please provide a contibution guidelines link!('https://www.contributor-covenant.org/') is an industry standard"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message: "Provide instructions for running tests.",
      default:
        "To test this application, simply run 'node index' from the command line, answer question prompts, and if error follow error code instructions",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please provide testing instructions or indicate 'none' !"
          );
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmLicense",
      message: "Would you like to include a license section and badge?",
      default: true,
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for this project (choose one)",
      choices: ["creative-commons", "MIT", "IBM"],
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};

promptQuestions().then((answersObj) => {
  const pageHTML = generateMarkdown(answersObj);

  fs.writeFile("./README.md", pageHTML, (err) => {
    if (err) throw new Error(err);
    console.log(
      "Page created! Check out readme.md in this directory to see it!"
    );
  });
});
