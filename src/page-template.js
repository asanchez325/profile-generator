const createProfile = profile => {
const createManager = manager => {
    console.log(manager.getName());
    return `
<div class="card"> 
    <div class="header">
        <h1>${manager.getName()}</h1>
        <h2>${manager.getRole()}</h2>
    </div>
    <div class="body">
        <li class="employeeInfo">ID: ${manager.getID()}</li>
        <li class="employeeInfo"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="employeeInfo">Office Number: ${manager.getOfficeNumber()}</li>
    </div>
</div>
`
};

const createHTML = [];
createHTML.push(profile.filter(employee=> employee.getRole() === "Manager")
.map(manager => createManager (manager))
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
            <div class="cards">
                ${createProfile(profile)}
            </div>
        </div>  
    </body>
</html>
`
}

