const inquirer = require("inquirer");
const cTable = require("console.table");

// CONNECT DB
const connection = require("./db/connection");
const SuperCorp_db = require("./db/class");

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
];

const init = () => {
  inquirer.prompt(menu).then((decision) => {
    // console.log(decision.menu);
    if (decision.menu === `View all Departments`) {
      viewDepts();
    } else if (decision.menu === `View all Roles`) {
      viewRoles();
    } else if (decision.menu === `View all Employees`) {
      viewEmployees();
    } else if (decision.menu === `ADD a Department`) {
      addDept();
    } else if (decision.menu === `ADD a Role`) {
      addRole();
    } else if (decision.menu === `ADD an Employee`) {
      addEmployee();
    } else if (decision.menu === `Update Employee Roles`) {
      updateRole();
    } else {
      console.log(`GOODBYE`);
    }
  });
};

// VIEWS
const viewDepts = () => {
  // Dept Table
  SuperCorp_db.viewDeptTable().then(([rows]) => {
    console.table(rows);
    init();
  });
};
const viewRoles = () => {
  // Roles Table
  SuperCorp_db.viewRoleTable().then(([rows]) => {
    console.table(rows);
    init();
  });
};
const viewEmployees = () => {
  // Employee Table
  SuperCorp_db.viewEmployeeTable().then(([rows]) => {
    console.table(rows);
    init();
  });
};

// ADDITIONS
const nameDept = [
  {
    type: `input`,
    name: `newDept`,
    message: `New Department Name:`,
  },
];
const addDept = () => {
  inquirer
    .prompt(nameDept)
    .then((answer) => {
      SuperCorp_db.insertDept(answer.newDept);
      console.log(`Successfully created ${answer.newDept}!`);
    })
    .then(() => {
      init();
    });
};

// ADD ROLE
// ADD EMPLOYEE

// UPDATE EMPLOYEE ROLE

init();
