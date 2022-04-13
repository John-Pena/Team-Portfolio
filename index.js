const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Emplopyee = require('./lib/Employee');
const fs = require('fs');

const managers = [];
const engineers = [];
const interns = [];

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
      message: "Please provide Manager's id number",
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

// asks user if they would like to add employee (Engineer or Intern)
const menu = () => {
  console.log(`
  ====================
  Add New Team Member
  ====================`);

  inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmAdd',
      message: 'Would you like to add a new team member?',
      default: false

    }  
  ])
  .then(function(res) {
    if (res.confirmAdd === true) {
      engOrIntern();
    } else {
      console.log("Finished!");
      createPage(managers, engineers, interns);
    }
  })
}

const engOrIntern = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "What is the employee's role?",
      choices: ['Engineer', 'Intern']
    }
  ])
  .then(function(res) {
    switch (res.role) {
      case 'Engineer':
        inquirer.prompt([
          // create Engineer questions
        ])
      
      case 'Intern':
        inquirer.prompt([
          // create Intern questions here
        ])
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

initialize();