const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Dave', 123, "d@gmail.com", 2);
    expect(manager.name).toBe('Dave');
    expect(manager.employeeID).toBe(123);
    expect(manager.email).toBe('d@gmail.com');
    expect(manager.officeNumber).toBe(2);
})
