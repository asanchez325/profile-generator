const Employee = require('../lib/Intern')

test ('create an intern object', ()=> {
    const intern = new Intern ('Alannah', '33', 'amsanchez@knox.edu', 'Knox');
    expect(intern.School).toBe(intern.school);
});

//tests get manager info
test ('get intern school', () => {
    const intern = new Intern ('Alannah', '33', 'amsanchez@knox.edu', 'Knox');
    expect(intern.School()).toBe(intern.school);
});