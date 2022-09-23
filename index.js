const inquirer = require('inquirer');
const Manager = require('./Develop/lib/Manager');
const Engineer = require('./Develop/lib/Engineer');
const Intern = require('./Develop/lib/Intern');
const fs = require('fs');
const genHTML = require('./Develop/src/genHTML');
const teamMembs = [];






// 'Engineer' prompts
const promptEngineer = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer Name:',
        }, {
            type: 'input',
            name: 'id', 
            message: 'Engineer ID:',
        }, {
            type: 'input',
            name: 'email',
            message: 'Engineer Email:',
        }, {
            type: 'input',
            name: 'github',
            message: 'Engineer github username:',
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembs.push(engineer);
    })
};

// 'Intern' Prompts
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern Name:',
        }, {
            type: 'input',
            name: 'id', 
            message: 'Intern ID:',
        }, {
            type: 'input',
            name: 'email',
            message: 'Intern Email:',
        }, {
            type: 'input',
            name: 'school',
            message: 'Intern school:',
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembs.push(intern);
    })
};

// prompt questions for 'Manager'
const promptManager = () => {
     return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Manager's first and last name:"
        }, {
            type: 'input',
            name: 'id',
            message: 'Please enter manager ID number:'
        }, {
            type: 'input',
            name: 'email',
            message: 'Please enter manager email:'
        }, {
            type: 'input',
            name: 'office number',
            message: 'Please enter office phone number:'
        }
    ])
    .then(userInput => {
        const { name, id, email, officeNumber } = userInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamMembs.push(manager);
        console.log(manager);
    })
};

const writeFile = data => {
    fs.writeFile('./dist/teamData.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team profile successfully created.")
        }
    })
};


promptManager()
   .then(promptEngineer)
   .then(teamMembs => {
    return genHTML(teamMembs);
   })
   .then(newHTML => {
    return writeFile(newHTML);
   })
   .catch(err => {
    console.log(err);
   });