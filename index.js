const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Emplopyee = require('./lib/Employee')

const managers = [];
const engineer = [];
const intern = [];


const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Manager? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the managers name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please provide manager id number',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter the managers id');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers email?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter the managers email');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter the managers office number',
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
    .then(function (response) {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      console.log(manager);
      managers.push(manager);
    })
    .then(function () {
      menu();
    });
};

const menu = () => {
  console.log(`
  =================
  Add Team Members
  =================`);

  inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmAdd',
      message: 'Would you like to add a member?',
      default: false
    },
    {
      type: 'list',
      name: 'role',
      message: 'What is the team members role?',
      choices: ['Engineer', 'Intern'],
      when: ({ confrimAdd }) => confrimAdd
    },
  ])
    .then(function (data) {
      switch (data.role) {
        case 'Engineer':
          inquirer.prompt([
            {
              type: 'input',
              name: 'name',
              message: 'What is the name of the engineer? (Required)',
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the engineer name');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'id',
              message: 'Please provide engineer id number',
              validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter the engineers id');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'email',
              message: "What is the engineer's email?",
              validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter the email for the engineer');
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
                  console.log("Please enter the Engineers github name");
                  return false;
                }
              }
            }
          ])
          .then(function(response) {
            const engineer = new Engineer(
              response.name,
              response.id,
              response.email,
              response.github
            );
            console.log()
          })
        case 'Intern':
          inquirer.prompt([
            {

            }
          ])
      }
    })
}

function initialize() {
  console.log(`
  ==============
  Add a Manager
  ==============`);

  promptManager();
};

initialize();