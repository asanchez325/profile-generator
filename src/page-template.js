const createTeamProfile = Profile => {
const createManager = manager => {
    console.log(manager.getName());
    return () => {
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
}}};

const createHTML = [];
createHTML.push(profile.filter(employee=> employee,getRole() === "Manager")
.map(manager => createManager (manager))
);

return createHTML.join("");

