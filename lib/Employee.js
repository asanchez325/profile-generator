const { getDiffieHellman } = require("crypto");

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
}

//return object that gets employee info
getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getRole() {
    return this.role;
}
}



module.exports = Employee;