const { expect } = require('@jest/globals');
const Employee = require('../lib/Manager')

test ('create a manager object', ()=> {
    const manager = new Manager ('Alannah', '33', 'amsanchez@knox.edu', '45');
    expect(manager.Office).toBe(manager.Office);
});

//tests get manager info
test ('get manager office #', () => {
    const manager = new Manager ('Alannah', '33', 'amsanchez@knox.edu', '45');
    expect(manager.getOffice()).toBe(manager.office);
});