const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Dave', 123, "d@gmail.com", 'Hard Knocks');
    expect(intern.name).toBe('Dave');
    expect(intern.employeeID).toBe(123);
    expect(intern.email).toBe('d@gmail.com');
    expect(intern.school).toBe('Hard Knocks');
})

test("get intern details", () => {
    const intern = new Intern('Dave', 123, 'd@gmail.com', 'Hard Knocks');
  
    expect(intern.getName()).toBe('Dave');
    expect(intern.getID()).toBe(123);
    expect(intern.getEmail()).toBe('d@gmail.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('Hard Knocks');

});