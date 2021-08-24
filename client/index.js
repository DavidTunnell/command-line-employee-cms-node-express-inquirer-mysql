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
            //MOVE THESE TO API CONNECTION FILE?
            apiConnection.getDepartments().then(departments => {
                if (departments.wasSuccessful) {
                    console.table('\n\Departments', departments.body);
                }
            }).catch(err => console.log(err));

            setTimeout(async function() {
                const updateDepartmentMenuResponse1 = await inquirer.prompt(inquirerOptions.updateDepartmentMenuPart1);
                setTimeout(async function() {
                    const updateDepartmentMenuResponse2 = await inquirer.prompt(inquirerOptions.updateDepartmentMenuPart2);
                    const body = {
                        ...updateDepartmentMenuResponse1,
                        ...updateDepartmentMenuResponse2
                    };
                    apiConnection.updateDepartment(body).then(response => {
                        if (response.wasSuccessful) {
                            console.log(boldGreenConsoleFont, "Department updated successfully.");
                        } else {
                            console.log(boldRedConsoleFont, "Department failed to be updated: " + response.body.sqlMessage + " " + response.body.body);
                        }
                    }).catch(err => console.log(err));
                }, 1000);
            }, 1000);
        } else if (actionResponse.departmentMenu === "Delete") {
            console.log(4);
        }
    } else if (mainMenuResponse.mainMenu === "Roles") {
        actionResponse = await inquirer.prompt(inquirerOptions.roleMenu);
        if (actionResponse.roleMenu === "Create") {
            const createRoleMenuResponse1 = await inquirer.prompt(inquirerOptions.createRoleMenuPart1);
            apiConnection.getDepartments().then(departments => {
                if (departments.wasSuccessful) {
                    console.table('\n\Department', departments.body);
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
            apiConnection.getRoles().then(roles => {
                if (roles.wasSuccessful) {
                    console.table('\n\Roles', roles.body);
                }
            }).catch(err => console.log(err));
            setTimeout(async function() {
                const updateRoleMenuResponse1 = await inquirer.prompt(inquirerOptions.updateRoleMenuPart1);
                setTimeout(async function() {
                    const updateRoleMenuResponse2 = await inquirer.prompt(inquirerOptions.updateRoleMenuPart2);
                    setTimeout(async function() {
                        apiConnection.getDepartments().then(departments => {
                            if (departments.wasSuccessful) {
                                console.table('\n\Department', departments.body);
                            }
                        }).catch(err => console.log(err));
                        setTimeout(async function() {
                            const updateRoleMenuResponse3 = await inquirer.prompt(inquirerOptions.updateRoleMenuPart3);
                            const body = {
                                ...updateRoleMenuResponse1,
                                ...updateRoleMenuResponse2,
                                ...updateRoleMenuResponse3
                            };
                            apiConnection.updateRole(body).then(response => {
                                if (response.wasSuccessful) {
                                    console.log(boldGreenConsoleFont, "Role updated successfully.");
                                } else {
                                    console.log(boldRedConsoleFont, "Role failed to be updated: " + response.body.sqlMessage + " " + response.body.body);
                                }
                            }).catch(err => console.log(err));
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
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
        } else if (actionResponse.employeeMenu === "Read") {
            apiConnection.getEmployees().then(employees => {
                if (employees.wasSuccessful) {
                    //using console.table for formatting
                    console.table('\Roles', employees.body);
                }
            }).catch(err => console.log(err));
        } else if (actionResponse.employeeMenu === "Update") {
            apiConnection.getEmployees().then(roles => {
                if (roles.wasSuccessful) {
                    console.table('\n\Employees', roles.body);
                }
            }).catch(err => console.log(err));
            setTimeout(async function() {
                const updateEmployeeMenuResponse1 = await inquirer.prompt(inquirerOptions.updateEmployeeMenuPart1);
                setTimeout(async function() {
                    const updateEmployeeMenuResponse2 = await inquirer.prompt(inquirerOptions.updateEmployeeMenuPart2);
                    setTimeout(async function() {
                        await apiConnection.getRoles().then(roles => {
                            if (roles.wasSuccessful) {
                                console.table('\n\Roles', roles.body);
                            }
                        }).catch(err => console.log(err));
                        setTimeout(async function() {
                            const updateEmployeeMenuResponse3 = await inquirer.prompt(inquirerOptions.updateEmployeeMenuPart3);
                            setTimeout(async function() {
                                apiConnection.getEmployees().then(roles => {
                                    if (roles.wasSuccessful) {
                                        console.table('\n\Employees', roles.body);
                                    }
                                }).catch(err => console.log(err));
                                setTimeout(async function() {
                                    const updateEmployeeMenuResponse4 = await inquirer.prompt(inquirerOptions.updateEmployeeMenuPart4);
                                    const body = {
                                        ...updateEmployeeMenuResponse1,
                                        ...updateEmployeeMenuResponse2,
                                        ...updateEmployeeMenuResponse3,
                                        ...updateEmployeeMenuResponse4
                                    };
                                    console.log(body);
                                    apiConnection.updateEmployee(body).then(response => {
                                        if (response.wasSuccessful) {
                                            console.log(boldGreenConsoleFont, "Employee updated successfully.");
                                        } else {
                                            console.log(boldRedConsoleFont, "Employee failed to be updated: " + response.body.sqlMessage + " " + response.body.body);
                                        }
                                    }).catch(err => console.log(err));
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        } else if (actionResponse.employeeMenu === "Delete") {
            console.log(4 + "e");
        }
    }
    //wrap entire thing like we had to nest (line 111) above
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