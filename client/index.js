const inquirer = require('inquirer');
const cTable = require('console.table');
const inquirerOptions = require('./helpers/inquirerOptions.js');
const apiConnection = require('./helpers/apiConnection.js');

const boldGreenConsoleFont = "\x1b[1m\x1b[32m";
const boldRedConsoleFont = "\x1b[1m\x1b[31m";



//run on command: 'node index.js' 
const init = async() => {
    console.log(boldGreenConsoleFont, "Welcome to the employee command line CMS. Please select a domain to work with.");
    const mainMenuResponse = await inquirer.prompt(inquirerOptions.mainMenu);
    let actionResponse = {};
    if (mainMenuResponse.mainMenu === "Departments") {
        actionResponse = await inquirer.prompt(inquirerOptions.departmentMenu);
        if (actionResponse.departmentMenu === "Create") {
            const createDepartmentMenuResponse = await inquirer.prompt(inquirerOptions.createDepartmentMenu);
            const body = createDepartmentMenuResponse;
            apiConnection.createDepartment(body).then(response => {
                if (response.wasSuccessful) {
                    console.log(boldGreenConsoleFont, "Department added successfully.");
                } else {
                    console.log(boldRedConsoleFont, "Department failed to be added: " + response.body.sqlMessage + " " + response.body.body);
                }
            }).catch(err => console.log(err));
        } else if (actionResponse.departmentMenu === "Read") {
            //get all departments using promise from fetch in the apiConnection file
            apiConnection.getDepartments().then(departments => {
                if (departments.wasSuccessful) {
                    //using console.table for formatting
                    console.table('\n\nDepartments', departments.body);
                }
            }).catch(err => console.log(err));
        } else
        if (actionResponse.departmentMenu === "Update") {
            console.log(3);
        } else if (actionResponse.departmentMenu === "Delete") {
            console.log(4);
        }
    } else if (mainMenuResponse.mainMenu === "Roles") {
        actionResponse = await inquirer.prompt(inquirerOptions.roleMenu);
        if (actionResponse.roleMenu === "Create") {
            const createRoleMenuResponse1 = await inquirer.prompt(inquirerOptions.createRoleMenuPart1);
            apiConnection.getDepartments().then(departments => {
                if (departments.wasSuccessful) {
                    console.table('\n\Roles', departments.body);
                }
            }).catch(err => console.log(err));
            setTimeout(async function() {
                    const createRoleMenuResponse2 = await inquirer.prompt(inquirerOptions.createRoleMenuPart2);
                    const body = {
                        ...createRoleMenuResponse1,
                        ...createRoleMenuResponse2
                    };
                    apiConnection.createRole(body).then(response => {
                        if (response.wasSuccessful) {
                            console.log(boldGreenConsoleFont, "Role added successfully.");
                        } else {
                            console.log(boldRedConsoleFont, "Role failed to be added: " + response.body.sqlMessage + " " + response.body.body);
                        }
                    }).catch(err => console.log(err));
                },
                1000);
        } else if (actionResponse.roleMenu === "Read") {
            apiConnection.getRoles().then(roles => {
                if (roles.wasSuccessful) {
                    //using console.table for formatting
                    console.table('\Roles', roles.body);
                }
            }).catch(err => console.log(err));
        } else if (actionResponse.roleMenu === "Update") {
            console.log(3 + "r");
        } else if (actionResponse.roleMenu === "Delete") {
            console.log(4 + "r");
        }
    } else
    if (mainMenuResponse.mainMenu === "Employees") {
        actionResponse = await inquirer.prompt(inquirerOptions.employeeMenu);
        if (actionResponse.employeeMenu === "Create") {
            const createEmployeeMenuResponse1 = await inquirer.prompt(inquirerOptions.createEmployeeMenuPart1);
            await apiConnection.getRoles().then(roles => {
                if (roles.wasSuccessful) {
                    console.table('\n\Roles', roles.body);
                }
            }).catch(err => console.log(err));
            let createEmployeeMenuResponse2 = {};
            await setTimeout(async function() {
                createEmployeeMenuResponse2 = await inquirer.prompt(inquirerOptions.createEmployeeMenuPart2);
                apiConnection.getEmployees().then(employees => {
                    if (employees.wasSuccessful) {
                        console.table('\n\Employees', employees.body);
                    }
                }).catch(err => console.log(err));
                let createEmployeeMenuResponse3 = {};
                await setTimeout(async function() {
                    createEmployeeMenuResponse3 = await inquirer.prompt(inquirerOptions.createEmployeeMenuPart3);
                    const body = {
                        ...createEmployeeMenuResponse1,
                        ...createEmployeeMenuResponse2,
                        ...createEmployeeMenuResponse3
                    };
                    apiConnection.createEmployee(body).then(response => {
                        if (response.wasSuccessful) {
                            console.log(boldGreenConsoleFont, "Employee added successfully.");
                        } else {
                            console.log(boldRedConsoleFont, "Employee failed to be added: " + response.body.sqlMessage + " " + response.body.body);
                        }
                    }).catch(err => console.log(err));
                }, 1000);
            }, 1000);

            // apiConnection.createEmployee(body).then(response => {
            //     if (response.wasSuccessful) {
            //         console.log(boldGreenConsoleFont, "Employee added successfully.");
            //     } else {
            //         console.log(boldRedConsoleFont, "Employee failed to be added: " + response.body.sqlMessage + " " + response.body.body);
            //     }
            // }).catch(err => console.log(err));


        } else if (actionResponse.employeeMenu === "Read") {
            apiConnection.getEmployees().then(employees => {
                if (employees.wasSuccessful) {
                    //using console.table for formatting
                    console.table('\Roles', employees.body);
                }
            }).catch(err => console.log(err));
        } else if (actionResponse.employeeMenu === "Update") {
            console.log(3 + "e");
        } else if (actionResponse.employeeMenu === "Delete") {
            console.log(4 + "e");
        }
    }
    // setTimeout(function() {
    //     wantToExit();
    // }, 2000);
};

// https://stackoverflow.com/questions/51713333/how-to-terminate-npm-inquirer-prompt-and-return-control-to-main-menu-function
const wantToExit = () => {
    inquirer
        .prompt(inquirerOptions.continuePrompt)
        .then((answer) => {
            if (answer.moreQuery) return init();
        });
}

//run init on startup
init();