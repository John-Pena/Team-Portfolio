const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const generatePage = require('./src/generatePage');

const employees = [];

// asks for manager information
const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the Manager's name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Manager's name");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please provide Manager's id number:",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the Manager's id");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Manager's email?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the Manager's email");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter the managers office number:',
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log('Please enter the managers office number');
          return false;
        }
      }
    }
  ])
    .then(function (res) {
      const manager = new Manager(
        res.name,
        res.id,
        res.email,
        res.officeNumber
      );
      console.log(manager);
      employees.push(manager);
    })
    .then(function () {
      engOrIntern();
    });
};

const engOrIntern = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Would you like to add an Engineer, Intern, or Finish the form?",
      choices: ['Engineer', 'Intern', 'Finish']
    }
  ])
    .then(function (res) {
      switch (res.role) {
        // If user selects Engineer
        case 'Engineer':
          inquirer.prompt([
            // create Engineer questions
            {
              type: 'input',
              name: 'name',
              message: 'What is the name of the Engineer? (Required)',
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the Engineer's name");
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'id',
              message: "Please provide Engineer's id number:",
              validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter the Engineer's id");
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'email',
              message: "What is the Engineer's email?",
              validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter the email for the Engineer');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'github',
              message: 'What is the Engineers github name?',
              validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Please enter the Engineer's github name");
                  return false;
                }
              }
            }
          ])
          // creates new engineer object with user input information
          .then(function(res) {
            const engineer = new Engineer(
              res.name,
              res.id,
              res.email,
              res.github
            );
            console.log(engineer);
            employees.push(engineer);
          })
          .then(function() {
            return engOrIntern();
          });
          break;

        // If user selects Intern
        case 'Intern':
          inquirer.prompt([
            // create Intern questions here
            {
              type: 'input',
              name: 'name',
              message: "What is the Intern's name?",
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the Intern's name");
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'id',
              message: "Please provide Intern's id number:",
              validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter the Intern's id");
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'email',
              message: "What is the Intern's email?",
              validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter an email for the Intern');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'school',
              message: 'What school did the Intern attend?',
              validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log("Please enter a school name for the Intern");
                  return false;
                }
              }
            }
          ])
          .then(function(res) {
            const intern = new Intern(
              res.name,
              res.id,
              res.email,
              res.school
            );
            console.log(intern);
            employees.push(intern);
          })
          .then(function () {
            return engOrIntern();
          });
          break;
        case 'Finish':
            console.log("Finished!");
            createPage(employees);
            break;
      }
    })
};

function initialize() {
  console.log(`
  ==============
  Add a Manager
  ==============`);

  promptManager();
};

const createPage = function(employees) {
  const pageHTML = generatePage(employees);
  fs.writeFile('./dist/index.html', pageHTML, err => {
    if (err) throw new Error(err);
    console.log('index.html has been created!');
  })
};

initialize();