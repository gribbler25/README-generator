console.log("you got to the gererateMarkdown page");
const dataLog = (answerData) => console.log(answerData);
module.exports(dataLog);

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
// const renderLicenseBadge = (license) => {
//   if (!license) {
//     return "";
//   }
//   return `
//     <section
//license badge goes here(via an <a> tag?)
//     </section>
//   `;
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}
//const renderLicenseLink(license)=>
//   if (!license) {
//     return "";
//   }
//   return `
//     <section
//<a> tag with link to license agreement?
//     </section>
//   `;
// };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
