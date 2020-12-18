const { getDiffieHellman } = require("crypto");

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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
//add role

getRole(name, id, email) {
    return {
        name: this.name,
        id: this.id,
        email: this.email

    };
};

}


module.exports = Employee;