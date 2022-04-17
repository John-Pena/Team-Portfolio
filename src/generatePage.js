
function generateManagerCard(data) {

  return `
        <div class="card column is-one-third mx-auto has-background-primary">
          <h3>${data.role}</h3>
          <p>
            Name: ${data.name}
            </br>
            ID: ${data.id}
            </br>
            Email: <a href="mailto:${data.email}">Email</a>
            </br>
            Office Number: ${data.officeNumber}
          </p>
        </div>
`
};

function generateEngineerCard(data) {

  return `
        <div class="card column is-one-third mx-auto has-background-info">
          <h3>${data.role}</h3>
          <p>
            Name: ${data.name}
            </br>
            ID: ${data.id}
            </br>
            Email: <a href="mailto:${data.email}">Email</a>
            </br>
            GitHub: <a href="www.github.com/${data.github}">${data.github}</a>
          </p>
        </div>
`
};

function generateInterCard(data) {
  return `
        <div class="card column is-one-third mx-auto has-background-warning">
          <h3>${data.role}</h3>
          <p>
            Name: ${data.name}
            </br>
            ID: ${data.id}
            </br>
            Email: ${data.email}
            </br>
            School: ${data.school}
          </p>
        </div>
  `
};

function generatePage(data) {
  testArray = [];

  for (var i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const manager = generateManagerCard(employee);
      testArray.push(manager);
    }
    if (role === 'Engineer') {
      const engineer = generateEngineerCard(employee);
      testArray.push(engineer);
    }
    if (role === 'Intern') {
      const intern = generateInterCard(employee);
      testArray.push(intern);
    }
  }

  const employeeCards = testArray.join('');
  const generate = generateHTML(employeeCards);
  return generate;
};

function generateHTML(employeeCards) {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
  <link rel="stylesheet" href="https://unpkg.com/bulmaswatch/darkly/bulmaswatch.min.css">
  <title>Team Portfolio</title>
</head>

<body>
  <header class="has-background-link">
    <div class="container flex-row justify-space-between align-center py-3">
      <h1 class="is-size-1 py-2 px-3">Team Profile</h1>
    </div>
  </header>

  <section class="my-3">
    <h2 class="is-size-3 has-text-centered text-dark bg-primary p-2 display-inline-block">Meet the Team!</h2>
    <div class="flex-row justify-space-between columns">
      <!-- Cards sit here -->
      ${employeeCards}
    </div>
  </section>

</body>

</html>
`
}

module.exports = generatePage;