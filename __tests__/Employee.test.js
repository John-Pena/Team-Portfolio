const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('John', 1234, 'email@email.com')

  expect(employee.name).toBe('John');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('email@email.com');
});

test("gets and employee's name as an object", () => {
  const employee = new Employee('John', 1234, 'email@email.com');

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("gets an employee's id as an object", () => {
  const employee = new Employee('John', 1234, 'email@email.com');

  expect(employee.getId()).toEqual('1234');
});

test("gets an employee's id as an object", () => {
  const employee = new Employee('John', 1234, 'email@email.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets an employee's role as an object", () => {
  const employee = new Employee('John', 1234, 'email@email.com');

  expect(employee.getRole()).toEqual(expect.any(String));
});