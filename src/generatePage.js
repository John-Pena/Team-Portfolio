function generateManagerCard(managers) {
  return `
  <div class="card column is-four-fifths mx-auto has-background-primary">

    <h3 class="">${managers.role}</h3>
    <p>
      Name: ${managers.name}
      </br>
      ID: ${managers.id}
      </br>
      Email: ${managers.email}
      </br>
      Office Number: ${managers.officeNumber}
    </p>

  </div>
`
};

function generateEngineerCard(engineers) {
  return `
    <div class="card column is-four-fifths mx-auto has-background-primary">

      <h3 class="">${engineers.role}</h3>
      <p>
        Name: ${engineers.name}
        </br>
        ID: ${engineers.id}
        </br>
        Email: <a href="mailto:${engineers.email}">Email</a>
        </br>
        GitHub: <a href="www.github.com/${engineers.github}">${engineers.github}</a>
        </p>
    
    </div>
`
};

function generateInterCard(interns) {
  return `
  <!-- Intern Section -->
  <div class="card column is-half has-background-info">

    <h3 class="">${interns.role}</h3>
    <p>
      Name: ${interns.name}
      </br>
      ID: ${interns.id}
      </br>
      Email: ${interns.email}
      </br>
      School: ${interns.school}
    </p>

  </div>
  `
};

function generatePage() {
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
      <!-- Manager Section -->
      <section class="column">
        ${generateManagerCard}

        </br>

        ${generateEngineerCard}

        ${generateInterCard}

      </section>

    </section>

  </div>
</section>

</body>

</html>
`
};

module.exports = generatePage;