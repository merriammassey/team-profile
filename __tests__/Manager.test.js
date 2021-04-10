const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Dave', 123, "d@gmail.com", 2);
    expect(manager.name).toBe('Dave');
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
