const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email);

    this.role = role;
    this.github = github
  }

  getRole() {
    return `Engineer`
  }

  getGithub() {
    return `John-Pena`
  }
}

module.exports = Engineer;