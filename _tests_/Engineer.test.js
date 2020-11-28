const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer')

test ('create engineer github', ()=> {
    const gitTest = "asanchez325";
    const engineer = new Engineer('Alannah', '33', 'amsanchez@knox.edu', gitTest);
    expect(engineer.github).toBe(gitTest);
});

//tests get manager info
test ('get engineer github', () => {
    const getGitTest = "asanchez325";
    const engineer = new Engineer('Alannah', 'asanchez325', 'amsanchez@knox.edu', getGitTest);
    expect(engineer.getGithub()).toBe(getGitTest);
});

