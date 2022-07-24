const Manager = require('../lib/Manager');
const manager = new Manager('Lourdes', '513288', 'lmartinez@gmail.com', '951-762-8000');

test ('returns manager name, id, email, and office number', () => {
    expect(manager.name).toBe('Lourdes');
    expect(manager.id).toBe('513288');
    expect(manager.email).toBe('lmartinez@gmail.com');
    expect(manager.officeNumber).toBe('951-762-8000');
});

test('returns name using the getName() method', () => {
    expect(manager.getName()).toBe('Lourdes');
});

test('returns id using getId() method', () => {
    expect(manager.getId()).toBe('513288');
});

test('returns email using getEmail() method', () => {
    expect(manager.getEmail()).toBe('lmartinez@gmail.com');
});

test('returns office number using getOfficeNum() method', () => {
    expect(manager.getOfficeNum()).toBe('951-762-8000');
});

test('returns Manager from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});