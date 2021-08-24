const fetch = require('node-fetch'); //https://www.npmjs.com/package/node-fetch

const urlPrefix = "http://localhost:3001"; //make sure not to have a slash at the end

// const getDepartments = async() => {
//     const constructedUrl = urlPrefix + "/api/department/";
//     var resultObjects = [];
//     await fetch(constructedUrl)
//         .then(res => res.json())
//         .then((json) => {
//             resultObjects = json;
//         });
//     return resultObjects;
// }

function getAll(constructedUrl) {
    return fetch(constructedUrl) // return this promise
        .then(response => response.json())
        .then(json => (json))
}

function getDepartments() {
    const constructedUrl = urlPrefix + "/api/department/"
    return getAll(constructedUrl);
}

function getRoles() {
    const constructedUrl = urlPrefix + "/api/role/"
    return getAll(constructedUrl);
}

function getEmployees() {
    const constructedUrl = urlPrefix + "/api/employee/"
    return getAll(constructedUrl);
}


module.exports = { getDepartments, getRoles, getEmployees };