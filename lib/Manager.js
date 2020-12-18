const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
   
    this.office = office;
}

getOffice() {
    return this.office;
}
//add manager role
}


module.exports = Manager;
