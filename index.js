const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

const managerQs = [
    { 
        type: "input",
        message: "Team Manager's Name",
        name: "name"
    },
    {
        type: "input",
        message: "Employee ID:",
        name: "id"
    },
    {
        type: "input",
        message: "E-mail Address:",
        name: "email"
    },
    {
        type: "number",
        message: "Office Number",
        name: "officenum"
    }
];

const employeeArr = [];

inquirer.prompt(managerQs).then((data) => {
    role = "Manager";
    const manager = new Manager(data.name, data.id, data.email, role, data.officenum);
    employeeArr.push(manager);
    console.log("let's finish building your team!");
    init();
});

const menu = [{
    type: "list",
    message: "Select a new position for input",
    name: "type",
    choices: ["Engineer", "Intern", "Finished"]
}];

const engineerQs = [
    { 
        type: "input",
        message: "Name:",
        name: "name"
    },
    {
        type: "input",
        message: "ID:",
        name: "id"
    },
    {
        type: "input",
        message: "E-mail:",
        name: "email"
    },
    {
        type: "input",
        message: "Github:",
        name: "github"
    }
];

const internQs = [
    { 
        type: "input",
        message: "Name:",
        name: "name"
    },
    {
        type: "input",
        message: "ID:",
        name: "id"
    },
    {
        type: "input",
        message: "E-mail:",
        name: "email"
    },
    {
        type: "input",
        message: "School:",
        name: "school"
    }
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("Success!");
    })};

const generateHeader = (role) => {
switch (role){
    case "Manager":
        return '<i class="fas fa-user-tie"></i> Manager';
    case "Engineer":
        return '<i class="fas fa-laptop-code"></i> Engineer';
    case "Intern":
        return '<i class="fas fa-user-graduate"></i> Intern';
}
};
// attempting to generate HTML to write to file but employeeHtml cannot be read on line 138
const generateHtml = () => {
        let employeeHtml = employeeArr.map(function(data){
            return `<div class="col">
            <ul class="collection with-header">
            <li class="collection-header">
            <h5>${data.name}</h5>
            </li>
            <li class="collection-item">
            <h6>${generateHeader(role)}</h6>
            </li>
            <li class="collection-item">
            ID: ${data.id}
            </li>
            <li class="collection-item">
            <i class="far fa-paper-plane"></i>
            <a href="mailto:${data.email}">${data.email}</a>
            </li>
            <li class="collection-item">unique data</li>
            </ul>
            </div>
            `
        }).join("");
        return employeeHtml;
};



const next = (type) => {
    if (type === "Engineer") {
        inquirer.prompt(engineerQs).then((data) => {
            role = "Engineer";
            const engineer = new Engineer(data.name, data.id, data.email, role, data.github);
            employeeArr.push(engineer);
            init();
        });} else if (type === "Intern") {
            inquirer.prompt(internQs).then((data) => {
                role = "Intern"
                const intern = new Intern(data.name, data.id, data.email, role, data.school);
                employeeArr.push(intern);
                init();
            });} else {
                let htmlString = generateHtml();
                console.log(employeeArr);
                writeToFile("./dist/output.html", htmlString);
    };
};

const init = () => {
        inquirer.prompt(menu).then((data) => {
            next(data.type);
        });
};




//array of objects 

//employee type for header
//employee type for office num, github, or school
// const generateHtml = () => {

// }


//if unique = github, role =SWE
//if unique = role = int

// if (data.github) 
// else if (data.)

// const createEmployee = (type) =>{
//     inquirer.prompt(type).then((data) => {
//         new type = data.name, data.id, data.email
//     });
// }

// const determineType = (type) =>
// { if (type === )

// }

// if data.github
// if 


// const createEmployee = (questions, role) => {
//         inquirer.prompt(questions).then((data) => {
//             console.log(data)
//             new data.role = (data.name, data.id, data.email)
//             employees.push(data.role);
//             //prompt to ask what next
//         });
//     };


// createEmployee();

// const genHtml = require('./utils/generateHtml');
//func to return
// const menuOption = () => {
// return {
//     type: "list",
//     message: "Select a new position for input",
//     name: "type",
//     choices: ["Engineer", "Intern","finish"]
//     //choose finish, run write to file 
// };



// const engineerQuestion => () {
// return {// return engineer
// type: "input",
// message: "Employee Github:",
// name: "github",
// }//taken back to list
// }

// const internQuestion = () => {
// return {
// type: "input",
// message: "Intern School:",
// name: "school"
// }
// }


// )};

// const fs = require('fs');
// const Employee = require("./lib/employee")
// const Manager = require("./lib/manager")
// const Engineer = require("./lib/engineer")
// const Intern = require("./lib/intern")
// employees = [];
// const employeeQuestions = () => {
//     return ();
// };
//welcome msg
// init(manager)

    //     type: "list",
    //     message: "Select a new position for input",
    //     name: "type",
    //     choices: ["Engineer", "Intern","finish"]
    // const managerQuestion = () => {
    //     return 
    // };
    // const otherPositions = [
    //     //     {
        //         type: "list",
        //         message: "Select a new position for input",
        //         name: "type",
        //         choices: ["Engineer", "Intern","Exit"]
        //     },
        //     { 
        //         type: "input",
        //         message: "Employee Name:",
        //         name: "name"
        //     },
        //     {
        //         type: "input",
        //         message: "Employee ID:",
        //         name: "id"
        //     },
        //     {
        //         type: "input",
        //         message: "Employee email:",
        //         name: "email"
        //     },
        
        

// const positions = () => {
//     if("type" === "engineer")
// };