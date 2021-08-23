const domain = ["Departments", "Roles", "Employees"];
const departmentOptions = [{
        name: "View all Departments",
        value: "Read"
    },
    {
        name: "Create a Departments",
        value: "Create"
    },
    {
        name: "Update a Departments",
        value: "Update"
    },
    {
        name: "Delete a Departments",
        value: "Delete"
    }
];
const roleOptions = [{
        name: "View all Roles",
        value: "Read"
    },
    {
        name: "Create a Roles",
        value: "Create"
    },
    {
        name: "Update a Roles",
        value: "Update"
    },
    {
        name: "Delete a Roles",
        value: "Delete"
    }
];
const employeeOptions = [{
        name: "View all Employees",
        value: "Read"
    },
    {
        name: "Create an Employee",
        value: "Create"
    },
    {
        name: "Update an Employee",
        value: "Update"
    },
    {
        name: "Delete an Employee",
        value: "Delete"
    }
];

const mainMenu = [{
    name: "mainMenu",
    type: "list",
    message: "Main Menu:",
    choices: domain
}];

const continuePrompt = [{
    name: "moreQuery",
    type: "confirm",
    message: "Would you like to return to the main menu to run another action?"
}];

const departmentMenu = [{
    name: "departmentMenu",
    type: "list",
    message: "Department Menu:",
    choices: departmentOptions
}];

const roleMenu = [{
    name: "roleMenu",
    type: "list",
    message: "Role Menu:",
    choices: roleOptions
}];

const employeeMenu = [{
    name: "employeeMenu",
    type: "list",
    message: "Employee Menu:",
    choices: employeeOptions
}];

module.exports = { mainMenu, departmentMenu, roleMenu, employeeMenu, continuePrompt };