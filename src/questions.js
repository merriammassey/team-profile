/*THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number

THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

Menu:
engineer
intern
finish >fs html
*/



const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is the employee ID? (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the employee? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter the employee email.');
                return false;
            }
        }
    },
]

const managerQuestion = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the manager? (Required)',
        validate: managerOfficeInput => {
            if (managerOfficeInput) {
                return true;
            } else {
                console.log('Please enter the manager office number.');
                return false;
            }
        }
    }
]

const menu = [
    {
        type: 'list',
        name: 'nextStep',
        message: 'What do you want to do next?',
        choices: ['Enter an engineer.', 'Enter an intern.', 'Finish my team.']
      },
]

const engineerQuestion = [
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is the github username of the engineer? (Required)',
        validate: engineerGithub => {
            if (engineerGithub) {
                return true;
            } else {
                console.log('Please enter the username.');
                return false;
            }
        }
    }
]

const internQuestion = [
    {
        type: 'input',
        name: 'school',
        message: 'Where did the intern go to school? (Required)',
        validate: internSchool => {
            if (internSchool) {
                return true;
            } else {
                console.log('Please enter the school name.');
                return false;
            }
        }
    }
]

module.exports = {employeeQuestions, managerQuestion, engineerQuestion, internQuestion, menu}
/*
module.exports = employeeQuestions;
module.exports = managerQuestion;
module.exports = engineerQuestion;
module.exports = internQuestion;
module.exports = menu; */