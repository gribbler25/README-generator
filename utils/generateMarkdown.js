// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (!license) {
    return "";
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "creative-commons") {
    return `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
  } else {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (!license) {
    return "";
  } else if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit`;
  } else if (license === "creative - commons") {
    return `https://creativecommons.org/licenses/by/4.0/`;
  } else {
    return `https://opensource.org/licenses/IPL-1.0`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (!license) {
    return "";
  } else if (license === "MIT") {
    return `MIT License`;
  } else if (license === "creative-commons") {
    return `Creative Commons License`;
  } else {
    return `IBM License`;
  }
};
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
