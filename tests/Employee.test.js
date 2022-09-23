const Employee = require('../lib/Employee');
const employee = new Employee('Aleena', '529426', 'aleenajohns31@gmail.com');

test ('returns employee name, id, and email', () => {
    expect(employee.name).toBe('Aleena');
    expect(employee.id).toBe('529426');
    expect(employee.email).toBe('aleenajohns31@gmail.com');
});

test('returns name using the getName() method', () => {
    expect(employee.getName()).toBe('Aleena');
});

test('returns id using getId() method', () => {
    expect(employee.getId()).toBe('529426');
});

test('returns email using getEmail() method', () => {
    expect(employee.getEmail()).toBe('aleenajohns31@gmail.com');
});

test('returns Employee from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});