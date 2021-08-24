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

const createDepartmentMenu = [{
    type: "input",
    name: "name",
    message: "Please enter a department name:"
}];

const createRoleMenuPart1 = [{
    type: "input",
    name: "title",
    message: "Please enter a title:"
}, {
    type: "input",
    name: "salary",
    message: "Please enter a salary:"
}];

const createRoleMenuPart2 = [{
    type: "input",
    name: "department_id",
    message: "Please enter a department ID:"
}];

const createEmployeeMenuPart1 = [{
    type: "input",
    name: "first_name",
    message: "Please enter a first name:"
}, {
    type: "input",
    name: "last_name",
    message: "Please enter a last name:"
}];

const createEmployeeMenuPart2 = [{
    type: "input",
    name: "role_id",
    message: "Please enter a role ID:"
}];

const createEmployeeMenuPart3 = [{
    type: "input",
    name: "manager_id",
    message: "Please enter a manager ID:"
}];


module.exports = {
    mainMenu,
    departmentMenu,
    roleMenu,
    employeeMenu,
    continuePrompt,
    createDepartmentMenu,
    createRoleMenuPart1,
    createRoleMenuPart2,
    createEmployeeMenuPart1,
    createEmployeeMenuPart2,
    createEmployeeMenuPart3
};