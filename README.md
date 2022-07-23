
 
  # Create a README

## Project Description:
   <p> This project is about creating a simple question/answer format at the command line to gather user data for the creation of a professional comprehesive README file for any project.</p>
  
 ## Table of Contents:
   
 * <a href="#install">Installation</a>

 * <a href="#inst">Instrucitons for use</a>

 * <a href="#test">Testing</a>

 * <a href="#lic">License information</a>

 * <a href="#cont">Contribute</a>
 
 * <a href="#coll">Questions/collaborate </a>
    
<h2 id=install> Installation Instruction:</h2>
  This project uses Node.js at the command line. User must clone the files into their local dev environment, run 'npm init' at the command line for access to inquirer package, install inquirer with 'npm install --save inquirer' command, then run by command 'node index.js' to check if dependencies are working with the command line questions generating the markdown file called 'readme.md'.
  
## Instructions for use:
  To use this node application user simply runs with 'node index.js' command at the command line and answers the questions until the readme.md file is created. Next, the user can open the file in the browser to preview and can attach this file to any project they may be working on.
  
## Testing instructions:
  To test this application, simply run 'node index' from the command line and if error follow error code instructions
  
 <section id="lic"> function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else if (MIT) {
    return `
    <a href="https://opensource.org/licenses/MIT">MIT License</a>
    `;
  } else if (creative - commons) {
    return `
  <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons License</a>
    `;
  } else {
    return `
    <a href="https://opensource.org/licenses/IPL-1.0">IBM License</a>
    `;
  }
}</section>
  
## Contribution guidelines:
  see https://www.contributor-covenant.org/ for contribution code of conduct
  
  <footer>
  <h3> Reach out with questions or to collaborate:<h3>

  <a href="github.com/gribbler25">gribbler25</a>
  <a href="mailto:gribbler25@yahoo.com">gribbler25@yahoo.com</a>
  </footer>