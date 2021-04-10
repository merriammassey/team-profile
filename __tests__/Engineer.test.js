const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', 123, "d@gmail.com", 'daveGH');
    expect(engineer.name).toBe('Dave');
    expect(engineer.employeeID).toBe(123);
    expect(engineer.email).toBe('d@gmail.com');
    expect(engineer.gitHubUsername).toBe('daveGH');
})