const createProfile = profile => {
const createManager = manager => {
    console.log(manager.getName());
    return `
<div class="card">
<div class="card-manager">
        <div class="card-role">
            <h2>${manager.getRole()}</h2> 
        </div>
        <div class="card-content">
            <h1>${manager.getName()}</h1>
            <li class="employeeInfo">ID: ${manager.getId()}</li>
            <li class="employeeInfo"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="employeeInfo">Office Number:${manager.getOffice()}</li>
         </div>
    </div>
    </div>
`
};

const createEngineer = engineer => {
    console.log(engineer.getName());
    return `
<div class="card">
<div class="card-engineer">
        <div class="card-role">
            <h2>${engineer.getRole()}</h2>
        </div>
    <div class="card-content">
        <h1>${engineer.getName()}</h1>
        <li class="employeeInfo">ID: ${engineer.getId()}</li>
        <li class="employeeInfo"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="employeeInfo">Office Number: ${engineer.getGithub()}</li>
    </div>
</div>
</div>
`
};

const createIntern = intern => {
    console.log(intern.getName());
    return `
<div class="card">
<div class="card-intern">
    <div class="card-role">
            <h2>${intern.getRole()}</h2>
        </div>
        <div class="card-content">
            <h1>${intern.getName()}</h1>
            <li class="employeeInfo">ID: ${intern.getId()}</li>
            <li class="employeeInfo"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="employeeInfo">Office Number: ${intern.getSchool()}</li>
        </div>
    </div>
</div>
</div>
`
};

const createHTML = [];
createHTML.push(profile.filter(employee=> employee.getRole() === "Manager")
.map(manager => createManager (manager))
);

createHTML.push(profile.filter(employee=> employee.getRole() === "Engineer")
.map(engineer => createEngineer (engineer))
);

createHTML.push(profile.filter(employee=> employee.getRole() === "Intern")
.map(intern => createIntern (intern))
);


return createHTML.join("");

}

module.exports = profile => {
    console.log(profile);
return `
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Profile Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
        <header>
            <h1>TEAM PROFILE</h1>
        </header>
        <div>
            <div class="card-section">
                ${createProfile(profile)}
            </div>
        </div>  
    </body>
</html>
`
}

