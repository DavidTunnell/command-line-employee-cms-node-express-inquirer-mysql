const inquirer = require('inquirer');
const cTable = require('console.table');
const inquirerOptions = require('./helpers/inquirerOptions.js');
const apiConnection = require('./helpers/apiConnection.js');

//change console output colors
const boldGreenConsoleFont = "\x1b[1m\x1b[32m";
const boldRedConsoleFont = "\x1b[1m\x1b[31m";

//https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
const titleArt = `                                                                                                                                                                                                                
███████ ███    ███ ██████  ██       ██████  ██    ██ ███████ ███████ 
██      ████  ████ ██   ██ ██      ██    ██  ██  ██  ██      ██      
█████   ██ ████ ██ ██████  ██      ██    ██   ████   █████   █████   
██      ██  ██  ██ ██      ██      ██    ██    ██    ██      ██      
███████ ██      ██ ██      ███████  ██████     ██    ███████ ███████ 
                                                                     
                    ██████  ███    ███ ███████ 
                    ██      ████  ████ ██      
                    ██      ██ ████ ██ ███████ 
                    ██      ██  ██  ██      ██ 
                    ██████  ██      ██ ███████                         
`;

//run on command: 'node index.js' 
const init = async() => {
    //display intro text
    console.log(titleArt);
    console.log(boldGreenConsoleFont, "Welcome to the employee command line CMS. Please select a domain to work with.");
    //main menu
    const mainMenuResponse = await inquirer.prompt(inquirerOptions.mainMenu);
    let actionResponse = {};
    // if statements based on user menu choices
    if (mainMenuResponse.mainMenu === "Departments") {
        //gathering user entry results
        actionResponse = await inquirer.prompt(inquirerOptions.departmentMenu);
        if (actionResponse.departmentMenu === "Create") {
            const createDepartmentMenuResponse = await inquirer.prompt(inquirerOptions.createDepartmentMenu);
            const body = createDepartmentMenuResponse;
            //call API and create passing json body
            apiConnection.createDepartment(body).then(response => {
                //provide console feedback
                responseFeedback(response, "Department", "created");
            }).catch(err => console.log(err));
            //ask if user wants to exit or continue
            wantToExit();
        } else if (actionResponse.departmentMenu === "Read") {
            getAndPrintDepartments();
            wantToExit();
        } else
        if (actionResponse.departmentMenu === "Update") {
            getAndPrintDepartments();
            setTimeout(async function() {
                const updateDepartmentMenuResponse1 = await inquirer.prompt(inquirerOptions.updateDepartmentMenuPart1);
                setTimeout(async function() {
                    const updateDepartmentMenuResponse2 = await inquirer.prompt(inquirerOptions.updateDepartmentMenuPart2);
                    //when user entry comes from multiple sets of questions combine then
                    const body = {
                        ...updateDepartmentMenuResponse1,
                        ...updateDepartmentMenuResponse2
                    };
                    apiConnection.updateDepartment(body).then(response => {
                        responseFeedback(response, "Department", "updated");
                    }).catch(err => console.log(err));
                    wantToExit();
                }, 1000);
            }, 1000);
        } else if (actionResponse.departmentMenu === "Delete") {
            getAndPrintDepartments();
            setTimeout(async function() {
                const deleteDepartmentMenuResponse = await inquirer.prompt(inquirerOptions.deleteDepartmentMenu);
                apiConnection.deleteDepartment(deleteDepartmentMenuResponse.id).then(response => {
                    responseFeedback(response, "Department", "deleted");
                }).catch(err => console.log(err));
                wantToExit();
            }, 1000);
        }
    } else if (mainMenuResponse.mainMenu === "Roles") {
        actionResponse = await inquirer.prompt(inquirerOptions.roleMenu);
        if (actionResponse.roleMenu === "Create") {
            const createRoleMenuResponse1 = await inquirer.prompt(inquirerOptions.createRoleMenuPart1);
            getAndPrintDepartments();
            setTimeout(async function() {
                const createRoleMenuResponse2 = await inquirer.prompt(inquirerOptions.createRoleMenuPart2);
                const body = {
                    ...createRoleMenuResponse1,
                    ...createRoleMenuResponse2
                };
                apiConnection.createRole(body).then(response => {
                    responseFeedback(response, "Role", "created");
                }).catch(err => console.log(err));
                wantToExit();
            }, 1000);
        } else if (actionResponse.roleMenu === "Read") {
            getAndPrintRoles();
            wantToExit();
        } else if (actionResponse.roleMenu === "Update") {
            getAndPrintRoles();
            setTimeout(async function() {
                const updateRoleMenuResponse1 = await inquirer.prompt(inquirerOptions.updateRoleMenuPart1);
                setTimeout(async function() {
                    const updateRoleMenuResponse2 = await inquirer.prompt(inquirerOptions.updateRoleMenuPart2);
                    setTimeout(async function() {
                        getAndPrintDepartments();
                        setTimeout(async function() {
                            const updateRoleMenuResponse3 = await inquirer.prompt(inquirerOptions.updateRoleMenuPart3);
                            const body = {
                                ...updateRoleMenuResponse1,
                                ...updateRoleMenuResponse2,
                                ...updateRoleMenuResponse3
                            };
                            apiConnection.updateRole(body).then(response => {
                                responseFeedback(response, "Role", "updated");
                            }).catch(err => console.log(err));
                            wantToExit();
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        } else if (actionResponse.roleMenu === "Delete") {
            getAndPrintRoles();
            setTimeout(async function() {
                const deleteRoleMenuResponse = await inquirer.prompt(inquirerOptions.deleteRoleMenu);
                apiConnection.deleteRole(deleteRoleMenuResponse.id).then(response => {
                    responseFeedback(response, "Role", "deleted");
                }).catch(err => console.log(err));
                wantToExit();
            }, 1000);
        }
    } else
    if (mainMenuResponse.mainMenu === "Employees") {
        actionResponse = await inquirer.prompt(inquirerOptions.employeeMenu);
        if (actionResponse.employeeMenu === "Create") {
            const createEmployeeMenuResponse1 = await inquirer.prompt(inquirerOptions.createEmployeeMenuPart1);
            getAndPrintRoles();
            let createEmployeeMenuResponse2 = {};
            await setTimeout(async function() {
                createEmployeeMenuResponse2 = await inquirer.prompt(inquirerOptions.createEmployeeMenuPart2);
                getAndPrintEmployees();
                let createEmployeeMenuResponse3 = {};
                await setTimeout(async function() {
                    createEmployeeMenuResponse3 = await inquirer.prompt(inquirerOptions.createEmployeeMenuPart3);
                    const body = {
                        ...createEmployeeMenuResponse1,
                        ...createEmployeeMenuResponse2,
                        ...createEmployeeMenuResponse3
                    };
                    apiConnection.createEmployee(body).then(response => {
                        responseFeedback(response, "Employee", "created");
                    }).catch(err => console.log(err));
                    wantToExit();
                }, 1000);
            }, 1000);
        } else if (actionResponse.employeeMenu === "Read") {
            getAndPrintEmployees();
            wantToExit();
        } else if (actionResponse.employeeMenu === "Update") {
            getAndPrintEmployees();
            setTimeout(async function() {
                const updateEmployeeMenuResponse1 = await inquirer.prompt(inquirerOptions.updateEmployeeMenuPart1);
                setTimeout(async function() {
                    const updateEmployeeMenuResponse2 = await inquirer.prompt(inquirerOptions.updateEmployeeMenuPart2);
                    setTimeout(async function() {
                        getAndPrintRoles();
                        setTimeout(async function() {
                            const updateEmployeeMenuResponse3 = await inquirer.prompt(inquirerOptions.updateEmployeeMenuPart3);
                            setTimeout(async function() {
                                getAndPrintEmployees();
                                setTimeout(async function() {
                                    const updateEmployeeMenuResponse4 = await inquirer.prompt(inquirerOptions.updateEmployeeMenuPart4);
                                    const body = {
                                        ...updateEmployeeMenuResponse1,
                                        ...updateEmployeeMenuResponse2,
                                        ...updateEmployeeMenuResponse3,
                                        ...updateEmployeeMenuResponse4
                                    };
                                    apiConnection.updateEmployee(body).then(response => {
                                        responseFeedback(response, "Employee", "updated");
                                    }).catch(err => console.log(err));
                                    wantToExit();
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        } else if (actionResponse.employeeMenu === "Delete") {
            getAndPrintEmployees();
            setTimeout(async function() {
                const deleteEmployeeMenuResponse = await inquirer.prompt(inquirerOptions.deleteEmployeeMenu);
                apiConnection.deleteEmployee(deleteEmployeeMenuResponse.id).then(response => {
                    responseFeedback(response, "Employee", "deleted");
                }).catch(err => console.log(err));
                wantToExit();
            }, 1000);
        }
    }
};

// asks user if they want to continue and return to the main menu
// https://stackoverflow.com/questions/51713333/how-to-terminate-npm-inquirer-prompt-and-return-control-to-main-menu-function
const wantToExit = () => {
    setTimeout(function() {
        inquirer
            .prompt(inquirerOptions.continuePrompt)
            .then((answer) => {
                if (answer.moreQuery) return init();
            });
    }, 1000);
}

//gets and translates promise from API call and then displays to console as table
const getAndPrintDepartments = () => {
    apiConnection.getDepartments().then(departments => {
        if (departments.wasSuccessful) {
            //using console.table for formatting
            console.table('\n\nDepartments', departments.body);
        }
    }).catch(err => console.log(err));
}

//gets/prints roles to table
const getAndPrintRoles = () => {
    apiConnection.getRoles().then(roles => {
        if (roles.wasSuccessful) {
            console.table('\n\Roles', roles.body);
        }
    }).catch(err => console.log(err));
}

//gets/prints employees to table
const getAndPrintEmployees = () => {
    apiConnection.getEmployees().then(roles => {
        if (roles.wasSuccessful) {
            console.table('\n\Employees', roles.body);
        }
    }).catch(err => console.log(err));
}

//provides feedback after calling API
const responseFeedback = (response, tableName, action) => {
    if (response.wasSuccessful) {
        console.log(boldGreenConsoleFont, `${tableName} ${action} successfully.`);
    } else {
        console.log(boldRedConsoleFont, `${tableName} failed to be ${action}: ${response.body.sqlMessage}, ${response.body.body}`);
    }
}

//run init on startup
init();