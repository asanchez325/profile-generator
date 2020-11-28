const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

jest.mock('../lib/Employee');

test ('create an employee object', ()=> {
    const employee = new Employee ('Alannah', '33', 'amsanchez@knox.edu');
    expect(employee.name).toBe(employee.name);
    expect(employee.id).toBe(employee.id);
    expect(employee.email).toBe(employee.email);
    expect(employee.role).toBe(employee.role);
});

//tests get employee info

test ('get employee name', () => {
    const employee = new Employee('Alannah');
    expect(employee.getName()).toBe(employee.name);
});

test ('get employee id', () => {
    const employee = new Employee('Alannah');
    expect(employee.getId()).toBe(employee.id);
});

test ('get employee email', () => {
    const employee = new Employee('Alannah');
    expect(employee.getEmail()).toBe(employee.email);
});

test ('get employee role', () => {
    const employee = new Employee('Alannah');
    expect(employee.getRole()).toEqual(employee.role);
});

