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
        "This project uses Node.js at the command line. User must clone the files into their local dev environment, run 'npm init' at the command line for access to inquirer package, install inquirer with 'npm install --save inquirer' command, then run by command 'node index.js' to check if dependencies are working with the command line questions generating the markdown file called 'readme.md'.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter installation instruc=tions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide instructions for use.",
      default:
        "To use this node application user simply runs with 'node index.js' command at the command line and answers the questions until the readme.md file is created. Next, the user can open the file in the browser to preview and can attach this file to any project they may be working on.",
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
      message: "Provide guidelines for contributing to this project.",
      default:
        "see https://www.contributor-covenant.org/ for contribution code of conduct",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide contibution guidelines or a link!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message: "Provide instructions for running tests.",
      default:
        "To test this application, simply run 'node index' from the command line and if error follow error code instructions",
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
      type: "list",
      name: "license",
      message: "Choose a license for this project (choose one)",
      choices: ["creative-commons", "MIT", "IBM"],
    },
  ]);
};

promptQuestions().then((answersObj) => {
  const pageHTML = generateMarkdown(answersObj);

  fs.writeFile("./readme.md", pageHTML, (err) => {
    if (err) throw new Error(err);
    console.log(
      "Page created! Check out readme.md in this directory to see it!"
    );
  });
});

//   fs.appendFile("message.txt", "data to append", (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });
// }
