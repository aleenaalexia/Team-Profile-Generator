const Intern = require('../lib/Intern');
const intern = new Intern('Matt', '573672', 'mattB@gmail.com', 'UCLA');

test ('returns intern name, id, email, and school', () => {
    expect(intern.name).toBe('Matt');
    expect(intern.id).toBe('573672');
    expect(intern.email).toBe('mattB@gmail.com');
    expect(intern.school).toBe('UCLA');
});

test('returns name using the getName() method', () => {
    expect(intern.getName()).toBe('Matt');
});

test('returns id using getId() method', () => {
    expect(intern.getId()).toBe('573672');
});

test('returns email using getEmail() method', () => {
    expect(intern.getEmail()).toBe('mattB@gmail.com');
});

test('returns intern school using getSchool() method', () => {
    expect(intern.getSchool()).toBe('UCLA');
});

test('returns Intern from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});