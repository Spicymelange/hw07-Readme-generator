function generateMarkdown(data) {
  return `
 badges: ${data.badges}
 
 project: ${data.project}
 description: ${data.description}
 TOC: ${data.contents}
 instalation: ${data.install}
 Usage: ${data.usage}
 License: ${renderLicenseBadge(data.license, data.profile, data.project)}
 Contributors: ${data.contributors}
 Tests: ${data.tests}
 Pic: ${data.picture}
 Profile: ${data.profile}
 Email: ${data.email}
`;
}


function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join(" ");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
    return;
}

module.exports = generateMarkdown;
