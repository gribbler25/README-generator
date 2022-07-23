module.exports = generateMarkdown;
const renderLicenseSection = require("../utils/generateMarkdown.js");
function generateMarkdown(Obj) {
  console.log(Obj);
  return `
 
  # ${Obj.title}

## Project Description:
   <p> ${Obj.description}</p>
  
 ## Table of Contents:
   
 * <a href="#install">Installation</a>

 * <a href="#inst">Instrucitons for use</a>

 * <a href="#test">Testing</a>

 * <a href="#lic">License information</a>

 * <a href="#cont">Contribute</a>
 
 * <a href="#coll">Questions/collaborate </a>
    
<h2 id=install> Installation Instruction:</h2>
  ${Obj.installation}
  
## Instructions for use:
  ${Obj.usage}
  
## Testing instructions:
  ${Obj.tests}
  
 <section id="lic"> ${renderLicenseSection}</section>
  
## Contribution guidelines:
  ${Obj.contributing}
  
  <footer>
  <h3> Reach out with questions or to collaborate:<h3>

  <a href="github.com/${Obj.username}">${Obj.username}</a>
  <a href="mailto:${Obj.email}">${Obj.email}</a>
  </footer>`;
}
