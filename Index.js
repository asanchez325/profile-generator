const inquirer = require ('inquirer');
const fs = require('fs');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const generatePage = require('./src/page-template');

const teamData = [];
//Prompt user to enter managers info
const promptManager = () => {
    return inquirer.prompt ([
        {
//Manager Name
    type: "input",
    name: "name",
    message: "Who is your team manager?",
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
    message: "Enter Manager's Employee ID",
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
    message: "Enter manager's email address.",
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
    name: "office",
    message: "Enter team manager's office number",
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
    teamData.push(managerInfo);
    promptEngineer();
})
};

//Prompt user to enter engineer info
const promptEngineer = () => {
    console.log("LETS ADD YOUR ENGINEERS");
    return inquirer
    .prompt ([
        {
//Engineer Name
    type: "input",
    name: "name",
    message: "What is the Engineers name?",
       validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else { 
                console.log("Please enter your engineer's name");
                return false;
                }
            }
         },
//Engineer ID
    {
    type: "input",
    name: "id",
    message: "Enter Engineer's Employee ID (Numericle Value Required)",
        validate: employeeID => {
            if(employeeID) {
                return true;
            }
            else {
                console.log ("Please enter the engineer's id");
                    return false;
                }
            }
        },
//Engineer's email
    {
    type: "input",
    name: "email",
    message: "Enter engineer's email address. (required)",
        validate: employeeEmail => {
            if (employeeEmail) {
                return true;
            } else {
                console.log("Please enter the team manager's email address");
                    return false;
                }
            }
        },
//Engineer's GitHub
    {
    type: "input",
    name: 'github',
    message: "Enter Engineer's Github",
        validate: engineerGithub => {
            if(engineerGithub) {
                return true;
            }else {
                console.log("Please enter the githubr");
                        return false;
                    }
                }
            }
    ])
    
.then(answers => {
    const engineerInfo = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamData.push(engineerInfo);
    if(answers.confirmAddEmployee) {
        return promptEngineer();
    } else {
    return promptIntern();
    }
});
}

//Prompt user to enter Intern info
const promptIntern = () => {
    console.log("LETS ADD YOUR Interns");
    return inquirer
    .prompt ([
        {
//Intern Name
    type: "input",
    name: "name",
    message: "What is the Engineers name?",
       validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else { 
                console.log("Please enter your engineer's name");
                return false;
                }
            }
         },
//Intern ID
    {
    type: "input",
    name: "id",
    message: "Enter Engineer's Employee ID (Numericle Value Required)",
        validate: employeeID => {
            if(employeeID) {
                return true;
            }
            else {
                console.log ("Please enter the engineer's id");
                    return false;
                }
            }
        },
//Intern's email
    {
    type: "input",
    name: "email",
    message: "Enter engineer's email address. (required)",
        validate: employeeEmail => {
            if (employeeEmail) {
                return true;
            } else {
                console.log("Please enter the team manager's email address");
                    return false;
                }
            }
        },
//Interns School
    {
    type: "input",
    name: 'school',
    message: "Enter Interns schoolong",
        validate: internSchool => {
            if(internSchool) {
                return true;
            }else {
                console.log("Please enter the school");
                        return false;
                    }
                }
            }
    ])
    
.then(answers => {
    const internInfo = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamData.push (internInfo);
    if(answers.confirmEmployee) {
        return promptIntern();
    } else {
        return createProfile(teamData);
    }
});

};




function createProfile () {
    fs.writeFileSync('./dist/index.html', generatePage(teamData), "utf-8");
}
promptManager()