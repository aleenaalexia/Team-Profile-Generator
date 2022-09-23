const Engineer = require('../lib/Engineer');
const engineer = new Engineer('John', '528763', 'johnd@gmail.com', 'johndgit');

test ('returns engineer name, id, email, and github user', () => {
    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('528763');
    expect(engineer.email).toBe('johnd@gmail.com');
    expect(engineer.github).toBe('johndgit');
});

test('returns name using the getName() method', () => {
    expect(engineer.getName()).toBe('John');
});

test('returns id using getId() method', () => {
    expect(engineer.getId()).toBe('528763');
});

test('returns email using getEmail() method', () => {
    expect(engineer.getEmail()).toBe('johnd@gmail.com');
});

test('returns office number using getOfficeNum() method', () => {
    expect(engineer.getGithub()).toBe('johndgit');
});

test('returns Engineer from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});