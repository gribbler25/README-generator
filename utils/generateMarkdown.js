// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else if (MIT) {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `;
  } else if (creative - commons) {
    return `
  [![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
    `;
  } else {
    return `
    [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
    `;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else if (MIT) {
    return `
    <a href="https://choosealicense.com/licenses/mit/">MIT License</a>
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
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `${renderLicenseBadge}
      ${renderLicenseLink}`;
  }
}
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
