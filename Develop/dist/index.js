const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs');
const path = require('path');
const OUTPUT = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT, "homepage.html");
const teamMembs = [];
const sitegen = require('../siteGen');


// utilizing function from siteGen.js file 
const siteGen = sitegen.siteGen(teamMembs);

// Creates and writes code to new html file
const teamGen = () => {
    if(!fs.existsSync(OUTPUT)) {
        fs.mkdirSync(OUTPUT)
    }
    fs.writeFileSync(outputPath, sitegen.siteGen(teamMembs), 'utf-8');
}

// prompt questions for 'Manager'
const promptManager = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'First and Last Name:',
        }, {
            type: 'input',
            name: 'id',
            message: 'Please enter your ID number:',
        }, {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:'
        }, {
            type: 'input',
            name: 'office number',
            message: 'Please enter office phone number:',
        },
    ]);
    console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembs.push(manager);
    prompts();
};

// Prompts listed after each new emplpyee is added
const prompts = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Would you like to...?',
            choices: ['add an enginneer', 'add an intern', 'exit']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer": promptEngineer();
                break;
                case "add an intern": promptIntern();
                break;
            default: teamGen();
            }
        });
}

// 'Engineer' prompts
const promptEngineer = () => {
    return inquirer.prompt([
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
        prompts();
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
        prompts();
    })
};



promptManager();