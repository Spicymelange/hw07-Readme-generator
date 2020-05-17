const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
  {
    type: "checkbox",
    message: "Choose a badge:",
    name: "badges",
    choices: [
      "[![Build Status](https://travis-ci.com/username/projectname.svg?branch=master)](https://travis-ci.com/username/projectname)",
      "[![Downloads](https://img.shields.io/github/downloads/user/reponame/total?style=plastic)]",
      "[![Number of Forks](/github/forks/micromatch/micromatch)]",
    ],
  },
  {
    type: "input",
    message: "Project name: ",
    name: "project",
  },
  {
    type: "input",
    message: "Project description: ",
    name: "description",
  },
  {
    type: "editor",
    message: "Please type up your headings in the editor: ",
    name: "contents",
  },
  {
    type: "input",
    message: "Installation: ",
    name: "install",
  },
  {
    type: "input",
    message: "Usage: ",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose a License: ",
    name: "license",
    choices: ["1", "2", "3"],
  },
  {
    type: "input",
    message: "Contributors: ",
    name: "contributors",
  },
  {
    type: "input",
    message: "Tests: ",
    name: "tests",
  },
  {
    type: "input",
    message: "GitHub Profile Picture URL: ",
    name: "picture",
  },
  {
    type: "input",
    message: "GitHub Profile: ",
    name: "profile",
  },
  {
    type: "input",
    message: "GitHub Email: ",
    name: "email",
  },
];

var tableOfContents = `## Table of Contents
        1.  [Documentation](#documentation)
            1.  [Installation](#installation)
            2.  [Examples](#examples)
            3.  [Methods](#methods)
            4.  [Objects](#objects)
        2.  [Support](#support)
        3.  [Known issues](#issues)
        4.  [Contributing](#contributing)
        5.  [License](#license)`;



// console.log(tableOfContents);


function init() {
    inquirer.prompt(questions)
        .then(answers => {
          console.log("____________________________________");
            const md = generateMarkdown(answers);
            fs.writeFile("README.md", md, function (err) {
                if (err) {
                    throw err;
                }
                console.log("File Written"); 
        });
    });
}

              


init();
