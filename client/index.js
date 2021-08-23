const inquirer = require('inquirer');
const cTable = require('console.table');
const inquirerOptions = require('./helpers/inquirerOptions.js');

const boldGreenConsoleFont = "\x1b[1m\x1b[32m";

//run on command: 'node index.js' 
const init = async() => {
    console.log(boldGreenConsoleFont, "Welcome to the employee command line CMS. Please select a domain to work with.");
    const mainMenuResponse = await inquirer.prompt(inquirerOptions.mainMenu);
    let actionResponse = {};
    if (mainMenuResponse.mainMenu === "Departments") {
        actionResponse = await inquirer.prompt(inquirerOptions.departmentMenu);
        if (actionResponse.departmentMenu === "Create") {
            console.log(1);
        } else if (actionResponse.departmentMenu === "Read") {
            console.log(2);
            //TODO START HERE - use apiConnection.js
        } else if (actionResponse.departmentMenu === "Update") {
            console.log(3);
        } else if (actionResponse.departmentMenu === "Delete") {
            console.log(4);
        }
    } else if (mainMenuResponse.mainMenu === "Roles") {
        actionResponse = await inquirer.prompt(inquirerOptions.roleMenu);
        if (actionResponse.roleMenu === "Create") {
            console.log(1 + "r");
        } else if (actionResponse.roleMenu === "Read") {
            console.log(2 + "r");
        } else if (actionResponse.roleMenu === "Update") {
            console.log(3 + "r");
        } else if (actionResponse.roleMenu === "Delete") {
            console.log(4 + "r");
        }
    } else if (mainMenuResponse.mainMenu === "Employees") {
        actionResponse = await inquirer.prompt(inquirerOptions.employeeMenu);
        if (actionResponse.employeeMenu === "Create") {
            console.log(1 + "e");
        } else if (actionResponse.employeeMenu === "Read") {
            console.log(2 + "e");
        } else if (actionResponse.employeeMenu === "Update") {
            console.log(3 + "e");
        } else if (actionResponse.employeeMenu === "Delete") {
            console.log(4 + "e");
        }
    }
    wantToExit();
};

// https://stackoverflow.com/questions/51713333/how-to-terminate-npm-inquirer-prompt-and-return-control-to-main-menu-function
const wantToExit = () => {
    inquirer
        .prompt(inquirerOptions.continuePrompt)
        .then((answer) => {
            if (answer.moreQuery) return init();
        });
}



// //To get unlimited number of entries - http://www.penandpaperprogrammer.com/blog/2018/12/16/repeating-questions-with-inquirerjs
// const collectInputs = async(inputs = [], prompts) => {
//     const { again, ...answers } = await inquirer.prompt(prompts);
//     const newInputs = [...inputs, answers];
//     //it should return 
//     return again ? collectInputs(newInputs, prompts) : newInputs;
// };

//run init on startup
init();