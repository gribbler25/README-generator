module.exports = generateMarkdown;

function generateMarkdown(Obj) {
  console.log(Obj);
  return `
  <html lang='en'>
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${Obj.title}</title>
</head>
    <h2>Project Description:</h2>
   <p> ${Obj.description}</p>
  
   <h2>Table of Contents:</h2>
   <ul>
   <li>Installation</li>
   <li>Instrucitons for use</li>
   <li>Testing</li>
   <li>License information</li>
   <li>Contribute</li>
   <li>Questions/collaborate </li>
    </ul>
    </html>
  
<h2> Installation Instruction:</h2>
  ${Obj.installation}
  
  <h2>Instructions for use:</h2>
  ${Obj.usage}
  
  <h2>Testing instructions:</h2>
  ${Obj.tests}
  
  <h2>License:</h2>
  ${Obj.license}
  
  <h2>Contribution guidelines:</h2>
  ${Obj.contributing}
  
  <footer>
  <h3> Reach out with questions or to collaborate:<h3>
  * ${Obj.username}
  * ${Obj.email}
  </footer>`;
}
