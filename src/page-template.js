const createProfile = profile => {
const createManager = manager => {
    console.log(manager.getName());
    return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-role-manager">${manager.getRole()}</h2> 
        <h1>${manager.getName()}</h1>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
        </ul>
    </div>
</div>
`
};

const createEngineer = engineer => {
    console.log(engineer.getName());
    return `
<div class="card employee-card">
<div class="card-header">
    <h2 class="card-role-engineer">${engineer.getRole()}</h2>  
    <h1>${engineer.getName()}</h1>
</div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
             <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
             <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
        </ul>
    </div>
</div>
`
};

const createIntern = intern => {
    console.log(intern.getName());
    return `
<div class="card employee card">
<div class="card-header">
    <h2 class="card-role-intern">${intern.getRole()}</h2>
    <h1>${intern.getName()}</h1>
</div>
<div class="card-body">
    <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">Intern's School: ${intern.getSchool()}</li>
        </ul>
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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
        <header class="jumbotron">
            <h1>my team profile</h1>
        </header>
        <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${createProfile(profile)}
            </div>
        </div>  
        </div>
        <footer class="jumbotron"> Vision + Our Team = Excellence </footer>
    </body>
</html>
`
}

