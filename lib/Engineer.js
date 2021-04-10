const Employee = require('./Employee');

class Engineer extends Employee {
    //run employee
    constructor (name, employeeID, email, gitHubUsername) {
    //run engineer 
    super(name, employeeID, email);
       this.gitHubUsername = gitHubUsername;
    }
    //add get officeNumber method
    getGithub() {
        return 'https://github.com/' + gitHubUsername;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;