//preliminary menu questions
const domain = ["Departments", "Roles", "Employees"];
const departmentOptions = [{
        name: "View all Departments",
        value: "Read"
    },
    {
        name: "Create a Department",
        value: "Create"
    },
    {
        name: "Update a Department",
        value: "Update"
    },
    {
        name: "Delete a Department",
        value: "Delete"
    }
];
const roleOptions = [{
        name: "View all Roles",
        value: "Read"
    },
    {
        name: "Create a Role",
        value: "Create"
    },
    {
        name: "Update a Role",
        value: "Update"
    },
    {
        name: "Delete a Role",
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

//asks user if they would like to restart for another action
const continuePrompt = [{
    name: "moreQuery",
    type: "confirm",
    message: "Would you like to return to the main menu to run another action?"
}];

//main menu subsection options
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

//create for each table
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

//update for each table
const updateDepartmentMenuPart1 = [{
    type: "input",
    name: "id",
    message: "Please enter the department ID you want to update:"
}];

const updateDepartmentMenuPart2 = [{
    type: "input",
    name: "name",
    message: "Please enter the new name for the department:"
}];

const updateRoleMenuPart1 = [{
    type: "input",
    name: "id",
    message: "Please enter the role ID you want to update:"
}];

const updateRoleMenuPart2 = [{
        type: "input",
        name: "title",
        message: "Please enter the new title for the role:"
    },
    {
        type: "input",
        name: "salary",
        message: "Please enter the new salary for the role:"
    }
];

const updateRoleMenuPart3 = [{
    type: "input",
    name: "department_id",
    message: "Please enter the new department ID for the role:"
}];

const updateEmployeeMenuPart1 = [{
    type: "input",
    name: "id",
    message: "Please enter the employee ID you want to update:"
}];

const updateEmployeeMenuPart2 = [{
        type: "input",
        name: "first_name",
        message: "Please enter the new first name for the employee:"
    },
    {
        type: "input",
        name: "last_name",
        message: "Please enter the new last name for the employee:"
    }
];

const updateEmployeeMenuPart3 = [{
    type: "input",
    name: "role_id",
    message: "Please enter the new role ID for the employee:"
}];

const updateEmployeeMenuPart4 = [{
    type: "input",
    name: "manager_id",
    message: "Please enter the new manager ID for the employee:"
}];

//delete for each table
const deleteDepartmentMenu = [{
    type: "input",
    name: "id",
    message: "Please enter the ID of the department you want to delete. Associated foreign keys will become NULL:"
}];

const deleteRoleMenu = [{
    type: "input",
    name: "id",
    message: "Please enter the ID of the role you want to delete. Associated foreign keys will become NULL:"
}];

const deleteEmployeeMenu = [{
    type: "input",
    name: "id",
    message: "Please enter the ID of the employee you want to delete. Associated foreign keys will become NULL.:"
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
    createEmployeeMenuPart3,
    updateDepartmentMenuPart1,
    updateDepartmentMenuPart2,
    updateRoleMenuPart1,
    updateRoleMenuPart2,
    updateRoleMenuPart3,
    updateEmployeeMenuPart1,
    updateEmployeeMenuPart2,
    updateEmployeeMenuPart3,
    updateEmployeeMenuPart4,
    deleteDepartmentMenu,
    deleteRoleMenu,
    deleteEmployeeMenu
};