const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 123, 'd@gmail.com');
    expect(employee.name).toBe('Dave');
    expect(employee.employeeID).toBe(123);
    expect(employee.email).toBe('d@gmail.com');
});

test("get employee details", () => {
    const employee = new Employee('Dave', 123, 'd@gmail.com');
  
    expect(employee.getName()).toBe('Dave');
    expect(employee.getID()).toBe(123);
    expect(employee.getEmail()).toBe('d@gmail.com');
    expect(employee.getRole()).toBe('Employee');
  });
  