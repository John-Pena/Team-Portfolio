const Engineer = require('../lib/Engineer');

test("gets Engineer's github as an object", () => {
  const engineer = new Engineer('John', 1234, 'email@email.com', 'John-Pena');

  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets an engineers's role as an object", () => {
  const engineer = new Engineer('John', 1234, 'email@email.com');

  expect(engineer.getRole()).toEqual(expect.any(String));
});