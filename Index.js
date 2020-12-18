const inquirer = require ('inquirer');
const fs = require('fs');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const generateOrgChart = require('./src/page-template').default;


//Prompt user to enter managers info
const promptManager = () => {
    return inquirer.prompt ([
        {
//Manager Name
    type: "input",
    name: "name",
    message: "Who is your team manager? (Required)",
       validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else { 
                console.log("Please enter your team manager's name");
                return false;
                }
            }
         },
//Manager Employee ID
    {
    type: "input",
    name: "id",
    message: "Enter Manager's Employee ID (Numericle Value Required)",
        validate: employeeID => {
            if(employeeID) {
                return true;
            }
            else {
                console.log ("Please enter the team manager's id");
                    return false;
                }
            }
        },
//Manager email
    {
    type: "input",
    name: "email",
    message: "Enter manager's email address. (required)",
        validate: employeeEmail => {
            if (employeeEmail) {
                return true;
            } else {
                console.log("Please enter the team manager's email address");
                    return false;
                }
            }
        },
//Manager Office Number
    {
    type: "input",
    name: 'office',
    message: "Enter team manager's office number (required)",
        validate: managerOffice => {
            if(managerOffice) {
                return true;
            }else {
                console.log("Please enter the team manager's office number");
                        return false;
                    }
                }
            }
    ])
.then(answers => {
    const managerInfo = new Manager(answers.name, answers.id, answers.email, answers.office);
    teamData.push (managerInfo);
})
    
function createMyTeam () {
    fs.writeFileSync('./dist/index.html', generateTemplate(teamData), "utf-8");
}
promptManager()}