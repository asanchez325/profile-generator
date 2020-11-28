const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee')

test ('create an intern object', ()=> {
    const intern = new Intern ('Alannah', '33', 'amsanchez@knox.edu', 'Knox');
    expect(intern.school).toBe(intern.school);
});

//tests get manager info
test ('get intern school', () => {
      const intern = new Intern ('Alannah', '33', 'amsanchez@knox.edu', 'Knox');
    expect(intern.getSchool()).toBe(intern.school);
});