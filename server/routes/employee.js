const employeeRouter = require('express').Router();
const dbConnection = require('../helpers/dbConnection.js');

// Create /api/department/
employeeRouter.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received.`);
    // Destructuring assignment for the items in req.body
    const { first_name, last_name, role_id, manager_id } = req.body;
    // If all the required properties are present
    if (first_name && last_name && role_id) {
        //construct query with data passed in from body
        const sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);";
        const params = [first_name, last_name, role_id, manager_id];
        //run query using helper import file
        dbConnection.sqlQuery(sql, params, res);
    } else { //data validation error
        res.json(dbConnection.results(false, "One or more of the parameters passed in was empty/null/undefined."));
    }
});

// Read All /api/department/
employeeRouter.get('/', (req, res) => {
    console.info(`${req.method} request received.`);
    const sql = 'SELECT * FROM employee;';
    dbConnection.sqlQuery(sql, [], res);
});

//Read by ID /api/department/1
employeeRouter.get('/:id', (req, res) => {
    console.info(`${req.method} by ID request received.`);
    const params = [req.params.id];
    const sql = 'SELECT * FROM employee WHERE id = ?;';
    dbConnection.sqlQuery(sql, params, res);
});

//Update /api/department/
employeeRouter.put('/', (req, res) => {
    console.info(`${req.method} request received.`);
    const params = [req.body.first_name, req.body.last_name, req.body.role_id, req.body.manager_id, req.body.id];
    const sql = "UPDATE employee SET first_name = ?, last_name = ?, role_id = ?, manager_id = ? WHERE id = ?;";
    dbConnection.sqlQuery(sql, params, res);
});

//Delete /api/department/1
employeeRouter.delete('/:id', (req, res) => {
    console.info(`${req.method} request received.`);
    const params = [req.params.id];
    const sql = "DELETE FROM employee WHERE id = ?;";
    dbConnection.sqlQuery(sql, params, res);
});

module.exports = employeeRouter;