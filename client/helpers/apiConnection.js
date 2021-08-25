const fetch = require('node-fetch'); //https://www.npmjs.com/package/node-fetch

// client app settings can be updated here
const urlPrefix = "http://localhost:3001"; //make sure not to have a slash at the end
const departmentApiSuffix = "/api/department/";
const roleApiSuffix = "/api/role/";
const employeeApiSuffix = "/api/employee/";

//central function for all gets
function getAll(constructedUrl) {
    return fetch(constructedUrl) // return this promise
        .then(response => response.json())
        .then(json => (json));
}

//each call is broken out for extensibility in the future
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

//central function for all creates
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

//central function for all updates
function updateAll(constructedUrl, body) {
    return fetch(constructedUrl, {
            method: 'put',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(json => (json));
}

function updateDepartment(body) {
    const constructedUrl = urlPrefix + departmentApiSuffix;
    return updateAll(constructedUrl, body);
}

function updateRole(body) {
    const constructedUrl = urlPrefix + roleApiSuffix;
    return updateAll(constructedUrl, body);
}

function updateEmployee(body) {
    const constructedUrl = urlPrefix + employeeApiSuffix;
    return updateAll(constructedUrl, body);
}

//central function for all deletes
function deleteAll(constructedUrl) {
    return fetch(constructedUrl, {
            method: 'delete'
        })
        .then(response => response.json())
        .then(json => (json));
}

function deleteDepartment(id) {
    const constructedUrl = urlPrefix + departmentApiSuffix + id;
    return deleteAll(constructedUrl);
}

function deleteRole(id) {
    const constructedUrl = urlPrefix + roleApiSuffix + id;
    return deleteAll(constructedUrl);
}

function deleteEmployee(id) {
    const constructedUrl = urlPrefix + employeeApiSuffix + id;
    return deleteAll(constructedUrl);
}

//export functions to be imported elsewhere
module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    createDepartment,
    createRole,
    createEmployee,
    updateAll,
    updateDepartment,
    updateRole,
    updateEmployee,
    deleteDepartment,
    deleteRole,
    deleteEmployee
};