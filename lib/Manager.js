const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, employeeID, email, officeNumber) {
    //super knows to look at employee class
    super(name, employeeID, email)
       this.officeNumber = officeNumber
    }
};

module.exports = Manager;