const Intern = require('../lib/Intern');

test("gets Intern's school as an object", () => {
  const intern = new Intern('John', 1234, 'email@email.com', 'UTSA');

  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets Intern's role as an object", () => {
  const intern = new Intern('John', 1234, 'email@email.com', 'UTSA');

  expect(intern.getRole()).toEqual(expect.any(String));
})