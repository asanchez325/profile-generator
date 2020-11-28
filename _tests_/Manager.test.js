const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')

test ('create a manager object', ()=> {
    const manager = new Manager ('Alannah', '33', 'amsanchez@knox.edu', '45');
    expect(manager.Office).toBe(manager.Office);
});

//tests get manager info
test ('get manager office #', () => {
    const manager = new Manager ('Alannah', '33', 'amsanchez@knox.edu', '45');
    expect(manager.getOffice()).toBe(manager.office);
});