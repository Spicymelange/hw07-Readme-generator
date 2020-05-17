function generateMarkdown(data) {
  return `
  #[${data.project}](#${data.project})  ${data.badges}
 <br>
 description: ${data.description}
 <br>

 ###${genTableOfContents(data.contents)}
 ###
 ###

 ## [Installation](#Installation)
 
  <code>${data.install}</code>
  
## [Usage](#Usage)

  <code>${data.usage}</code>

 Licenses: ${renderLicenseBadge(data.license, data.profile, data.project)}

 Contributors: ${data.contributors}

 Tests: ${data.tests}
 Pic: ${data.picture}
 Profile: ${data.profile}
 Email: ${data.email}
`;
}

function genTableOfContents(string){
  const newArray = string.split(" ");
  const mapArray = newArray.map(heading => ("###[" + heading + "](#" + heading + ")\n\n"));//append markdown to headings

  const finalString= mapArray.join("");
  return finalString;
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
