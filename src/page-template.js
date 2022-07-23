module.exports = generateMarkdown;

const {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
} = require("../utils/generateMarkdown.js");

function generateMarkdown({
  title,
  description,
  installation,
  usage,
  tests,
  contributing,
  username,
  email,
}) {
  return `
 
  # ${title}


## Project Description:
   <p> ${description}</p>
  
 ## Table of Contents:
   
 * <a href="#install">Installation</a>

 * <a href="#inst">Instrucitons for use</a>

 * <a href="#test">Testing</a>

 * <a href="#lic">License information</a>

 * <a href="#cont">Contribute</a>
 
 * <a href="#coll">Questions/collaborate </a>
    


<h2 id="install"> Installation Instruction:</h2>
  ${installation}
  


  <h2 id="inst"> Instructions for use:</h2>
  ${usage}
  


  <h2 id="test"> Testing instructions:</h2>
  ${tests}
  


  <h2 id="lic">  ${renderLicenseSection}</h2>
  

  
 <h2 id="cont"> Contribution guidelines:</h2>
  <a href="${contributing}">  click for contribution guidelines </a>
  


  <footer>
  <h2 id="coll"> Reach out with questions or to collaborate:<h2>

  <a href="github.com/${username}">GitHub:  ${username}</a>

  <a href="mailto:${email}">${email}</a>
  </footer>`;
}
