const { employeeQuestions, managerQuestion, engineerQuestion, internQuestion, menuQuestion } = require('./src/questions');
const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

let team = [];

const menu = () => {
    inquirer.prompt(menuQuestion)
    .then(data => {
        if(data.nextStep ==='Enter an engineer.') {
            engineer();
        }
        else if (data.nextStep ==='Enter an intern.') {
                intern();
            }
        else {
            console.log(team);
            writeToFile(team);
        }
    });
}

// TODO: Create a function to write README file
const writeToFile = (data)=> {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generateHTML(data), err => {
          if (err) {
            reject(err);
            return;
          }
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
    };

const init = () => {
    //concat employeeQuestions and managerQuestion arrays
    const managerArray = employeeQuestions.concat(managerQuestion); 
    //collect employee
    inquirer.prompt(managerArray)
    .then(data => {
        const manager = new Manager (data.name, data.employeeID, data.email, data.officeNumber);
        team.push(manager);
        menu();
    }) 
}

//make intern function
const intern = () => {
    //concat employeeQuestions and internQuestion arrays
    const internArray = employeeQuestions.concat(internQuestion); 
    //collect intern data
    inquirer.prompt(internArray)
    .then(data => {
        const intern = new Intern (data.name, data.employeeID, data.email, data.school);
        console.log(intern);
        team.push(intern);
        menu();
    })
}

//make engineer function
const engineer = () => {
    //concat employeeQuestions and engineerQuestion arrays
    const engineerArray = employeeQuestions.concat(engineerQuestion); 
    //collect engineer
    inquirer.prompt(engineerArray)
    .then(data => {
        const engineer = new Engineer (data.name, data.employeeID, data.email, data.gitHubUsername);
        console.log(engineer);
        team.push(engineer);
        menu();
    })
}

let manager = init();
