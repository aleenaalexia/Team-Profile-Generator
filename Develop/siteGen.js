

function siteGen(team) {
    const html = [];

    const managerGen = manager => {
        return `
        <div class="card">
    <div class="card-header">
        ${manager.getName()} <br/>
        <p>Manager</p>
        <ul>
            <li>ID: ${manager.id}</li>
            <li>Email: ${manager.email}</li>
            <li>Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>
        `;
       
    } 
    const engineerGen = engineer => {
        let engineerHTML = `
        <div class="card">
    <div class="card-header">
        ${engineer.name} <br/>
        <p>Engineer</p>
        <ul>
            <li>ID: ${engineer.id}</li>
            <li>Email: ${engineer.email}</li>
            <li>Github Username: ${engineer.github}</li>
        </ul>
    </div>
</div>
        `;
        html.push(engineerHTML);
    }
    const internGen = intern => {
        let internHTML = `
        <div class="card">
    <div class="card-header">
        ${intern.name} <br/>
        <p>Intern</p>
        <ul>
            <li>ID: ${intern.id}</li>
            <li>Email: ${intern.email}</li>
            <li>School: ${intern.school}</li>
        </ul>
    </div>
</div>
    `;
    html.push(internHTML);
    }

    for (let i = 0; i < team; i++) {
        if (team[i].getRole() === "Manager") {
            managerGen(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            engineerGen(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            internGen(team[i]);
        }
    }

    return html.join('');
}

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
</head>
<body>
<h1>Team Profiles</h1>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>

</html>
    `;
}
siteGen();

module.exports = { siteGen };