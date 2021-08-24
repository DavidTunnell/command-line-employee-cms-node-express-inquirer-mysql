const fetch = require('node-fetch'); //https://www.npmjs.com/package/node-fetch

const urlPrefix = "http://localhost:3001"; //make sure not to have a slash at the end
const departmentApiSuffix = "/api/department/";
const roleApiSuffix = "/api/role/";
const employeeApiSuffix = "/api/employee/";

function getAll(constructedUrl) {
    return fetch(constructedUrl) // return this promise
        .then(response => response.json())
        .then(json => (json));
}

function getDepartments() {
    const constructedUrl = urlPrefix + departmentApiSuffix;
    return getAll(constructedUrl);
}

function getRoles() {
    const constructedUrl = urlPrefix + roleApiSuffix
    return getAll(constructedUrl);
}

function getEmployees() {
    const constructedUrl = urlPrefix + employeeApiSuffix
    return getAll(constructedUrl);
}

function createAll(constructedUrl, body) {
    return fetch(constructedUrl, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(json => (json));
}

function createDepartment(body) {
    const constructedUrl = urlPrefix + departmentApiSuffix;
    return createAll(constructedUrl, body);
}

function createRole(body) {
    const constructedUrl = urlPrefix + roleApiSuffix;
    return createAll(constructedUrl, body);
}

function createEmployee(body) {
    const constructedUrl = urlPrefix + employeeApiSuffix;
    return createAll(constructedUrl, body);
}

module.exports = { getDepartments, getRoles, getEmployees, createDepartment, createRole, createEmployee };