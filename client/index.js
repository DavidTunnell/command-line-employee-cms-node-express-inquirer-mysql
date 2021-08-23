var inquirer = require('inquirer');
const cTable = require('console.table');

//run on command: 'node index.js' 
const main = async() => {
    //main function runs when called directly but not for tests - https://codewithhugo.com/node-module-entry-required/
    if (require.main === module) {
        const employees = [];
        console.log("Welcome to the software team website generator utility. Please answer the following questions about the teams manager.");
        //get inputs for variable amount of managers, engineers and interns
        const managerInputs = await collectInputs([], getManagerPrompts());

        console.log(managerInputs);
        // process.exit();
    }
};


//To get unlimited number of entries - http://www.penandpaperprogrammer.com/blog/2018/12/16/repeating-questions-with-inquirerjs
const collectInputs = async(inputs = [], prompts) => {
    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    //it should return 
    return again ? collectInputs(newInputs, prompts) : newInputs;
};

//prompts object for manager questions
const getManagerPrompts = () => {
    const prompts = [{
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerDescription",
            message: "What is the manager's description?"
        },
        {
            type: "input",
            name: "managerImageUrl",
            message: "What is the manager's image URL?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the manager's office number?",
        },
        {
            type: "confirm",
            name: "again",
            message: "Do you want to add another manager?",
            default: true
        }
    ];
    return prompts;
};

//run main on startup
main();