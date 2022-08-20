const inquirer = require('inquirer');
const cTable = require('console.table');
// CONNECT DB
const SuperCorp_db = require('./db')

const menu = [
  {
    type: `list`,
    message: `what would you like to do?`,
    name: `menu`,
    choices: [
      `View all Departments`,
      `View all Roles`,
      `View all Employees`,
      `ADD a Department`,
      `ADD a Role`,
      `ADD an Employee`,
      `Update Employee Roles`,
      `EXIT`,
    ],
  },
]

const init = () => {
  inquirer.prompt(menu)
  .then(decision => {
    if (decision.choice === `View all Departments`) {
      viewDepts();
    } else if (decision.choice === `View all Roles`) {
      viewRoles();
    } else if (decision.choice === `View all Employees`) {
      viewEmployees();
    } else if (decision.choice === `ADD a Department`) {
      addDept();
    } else if (decision.choice === `ADD a Role`) {
      addRole();
    } else if (decision.choice === `ADD an Employee`) {
      addEmployee();
    } else if (deicision.choice === `Update Employee Roles`) {
      updateRole();
    } else {
      console.log(`GOODBYE`);
    };
  });
};

const viewDepts = () => {
  // DATABASE
}

init();