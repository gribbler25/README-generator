//Include packages needed for this application--
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = (title, description) => {
  `
  <h1>${title}</h1>(license badge here?)

  <h2>Project Description:</h2>
 <p> ${description}</p>

 <h2>Table of Contents:</h2>
  *  Installation
  *  Instrucitons for use
  *  Testing
  *  License information
  *  Contribute
  *  Questions/collaborate 
`;
};
/* <h2> Installation Instruction:</h2>
${answersObj.installation}

<h2>Instructions for use:</h2>
${answersObj.usage}

<h2>Testing instructions:</h2>
${answersObj.tests}

<h2>License:</h2>
${answersObj.license}

<h2>Contribution guidelines:</h2>
${answersObj.contributing}

<footer>
<h3> Reach out with questions or to collaborate:<h3>
* ${answersObj.username}
* ${answersObj.email}
</footer>
  ; */
//require("./utils/generateMarkdown.js");

//Create an array of questions for user input--
const promptQuestions = () => {
  console.log("you answered all the questions");
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
      default: "gribbler25",
    },
    {
      type: "input",
      name: "email",
      message: "Provide an email where you can be reached with questions",
      default: "gribbler25@yahoo.com",
    },

    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      default: "Create a README",
    },
    {
      type: "input",
      name: "description",
      message: "Enter your project description.",
      default:
        "This project is about creating a simple question/answer format at the command line to gather user data for the creation of a professional comprehesive README file for any project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter your project installation instructions.",
      default:
        "This project uses Node.js at the command line. User must clone the files into their local dev environment, run 'npm init' at the command line for access to inquirer package, install inquirer with 'npm install --save inquirer' command, then run by command 'node index.js' to check if dependencies are working with the command line questions generating the markdown file called 'readme.md'.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide instrucitons for use.",
      default:
        "To use this node application user simply runs with 'node index.js' command at the command line and answers the questions until the readme.md file is created. Next, the user can open the file in the browser to preview and can attack this file to any project they may be working on.",
    },
    {
      type: "input",
      name: "contributing",
      message: "Provide guidelines for contributing to this project.",
      default:
        "see https://www.contributor-covenant.org/ for contribution code of conduct",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide instructions for running tests.",
      default:
        "To test this application, simply run 'node index' from the command line and if error follow error code instructions",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for this project (choose one)",
      choices: ["creative commons", "MIT", "public data", "IBM"],
    },
  ]);
  // .then((answersObj) => {
  //   console.log(answersObj);
  // });
};
// promptQuestions();

promptQuestions().then((answersObj) => console.log(answersObj));
// const title=answersObj.title
//   return generateMarkdown(answersObj);

//  });

// TODO: Create a function to write README file
// const writeToFile = function () {
//   fs.writeFile("readme.md", generateMarkdown, (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
//};
//   fs.appendFile("message.txt", "data to append", (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });
// }

// TODO: Create a function to initialize app ??
function init() {}

// Function call to initialize app
// init();
