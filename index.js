const {employeeQuestions, managerQuestion, engineerQuestion, internQuestion, menu} = require('./src/questions');
const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

/*
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/

const init = () => {
    //concat employeeQuestions and managerQuestion arrays
    const managerArray = employeeQuestions.concat(managerQuestion); 
    //collect employee
    inquirer.prompt(managerArray)
    //return employee object
    .then(data => {
        console.log(data);
    const manager = new Manager (data.name, data.employeeID, data.email, data.officeNumber);
    console.log(manager);
    });
}

init();


/*
    inquirer.prompt(menu);
    if //
        //alert of success or failure
    .then(writeToFileResponse => {
        console.log(writeToFileResponse);
      })
    .catch(err => {
        console.log(err);
      });
    }); 
    */