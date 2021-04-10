const Employee = require('./Employee');

class Intern extends Employee {
    //run employee
    constructor (name, employeeID, email, school) {
    //run intern 
    super(name, employeeID, email);
       this.school = school;
    }
    //add get school method
    getSchool() {
        return 'Hard Knocks';
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;