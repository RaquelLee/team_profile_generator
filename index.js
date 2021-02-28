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
        name: "officeNumber"
    }
];

const employeeArr = [];

inquirer.prompt(managerQs).then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
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

const generateHeader = (data) => {
if(data == "Manager"){
    return '<i class="fas fa-user-tie"></i> Manager';
}
if(data == "Engineer"){
    return '<i class="fas fa-laptop-code"></i> Engineer';
}
if(data == "Intern"){
    return '<i class="fas fa-user-graduate"></i> Intern';
}
};

const generateUniqueSection = (data) => {
    if(data == "Manager"){
        return `Office <i class="fas fa-hashtag"></i> ${data.officeNumber}`;
    }
    if(data == "Engineer"){
        return `<i class="fab fa-github"></i> GitHub <a href="www.github.com/${data.github}" target="_blank">${data.github}</a>`;
    }
    if(data == "Intern"){
        return `<i class="fas fa-school"></i> School ${data.school}`;
    }
    };

const generateHtml = () => {
        let employeeHtml = employeeArr.map(function(data){
            return `<div class="col">
            <ul class="collection with-header">
            <li class="collection-header">
            <h5>${data.name}</h5>
            </li>
            <li class="collection-item">
            <h6>${generateHeader(data.getRole())}</h6>
            </li>
            <li class="collection-item">
            ID : ${data.id}
            </li>
            <li class="collection-item">
            <i class="far fa-paper-plane"></i>
            <a href="mailto:${data.email}">${data.email}</a>
            </li>
            <li class="collection-item">${generateUniqueSection(data.getRole())}</li>
            </ul>
            </div>
            `
        }).join("");
        return employeeHtml;
};



const next = (type) => {
    if (type === "Engineer") {
        inquirer.prompt(engineerQs).then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            employeeArr.push(engineer);
            init();
        });} else if (type === "Intern") {
            inquirer.prompt(internQs).then((data) => {
                const intern = new Intern(data.name, data.id, data.email, data.school);
                employeeArr.push(intern);
                init();
            });} else {
                let htmlString = generateHtmlPage();
                console.log(employeeArr);
                writeToFile("./dist/output.html", htmlString);
    };
};

const init = () => {
        inquirer.prompt(menu).then((data) => {
            next(data.type);
        });
};


const generateHtmlPage = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <script src="https://kit.fontawesome.com/25e30c11ff.js" crossorigin="anonymous"></script>
        <title>Document</title>
    </head>
    <body>
        <header>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">Employee Profiles <i class="far fa-id-card"></i>
                    </a>
                </div>
            </nav>
        </header>
        <main>
            <div class ="row center">
            ${generateHtml()}
            </div>
        </main>
        <footer class="page-footer">
        </footer>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </html>`
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