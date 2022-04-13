const Manager = require('../lib/Manager');

test ("gets Manager's office number as an object", () => {
  const manager = new Manager('John', 1234, 'email@email.com', '123-A');

  expect(manager.getOfficeNumber()).toEqual('123-A');
});

test("gets an manager's role as an object", () => {
  const manager = new Manager('John', 1234, 'email@email.com', '123-A');

  expect(manager.getRole()).toEqual(expect.any(String));
});