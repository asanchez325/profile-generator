const Employee = require('../lib/Intern')

test ('create an engineer object', ()=> {
    const engineer = new Engineer ('Alannah', '33', 'amsanchez@knox.edu', 'asanchez325');
    expect(engineer.Github).toBe(engineer.github);
});

//tests get manager info
test ('get engineer github', () => {
    const engineer = new Engineer ('Alannah', 'asanchez325', 'amsanchez@knox.edu', 'Knox');
    expect(engineer.github()).toBe(engineer.github);
});

