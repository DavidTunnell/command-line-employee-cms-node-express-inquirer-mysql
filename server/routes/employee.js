const employeeRouter = require('express').Router();
const dbConnection = require('../helpers/dbConnection.js');

// Create /api/department/
employeeRouter.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received.`);
    // Destructuring assignment for the items in req.body
    const { id, first_name, last_name, role_id, manager_id } = req.body;
    // If all the required properties are present
    if (id && first_name && last_name && role_id) {
        //construct query with data passed in from body
        const sql = "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (" + id + ", '" + first_name + "', '" + last_name + "', " +
            role_id + ", " + manager_id + ");";
        console.log(sql);
        //run query using helper import file
        dbConnection.sqlQuery(sql, res);
    } else { //data validation error
        res.json(dbConnection.results(false, "One or more of the parameters passed in was empty/null/undefined."));
    }
});

// Read All /api/department/
employeeRouter.get('/', (req, res) => {
    console.info(`${req.method} request received.`);
    const sql = 'SELECT * FROM employee;';
    dbConnection.sqlQuery(sql, res);
});

//Read by ID /api/department/1
employeeRouter.get('/:id', (req, res) => {
    console.info(`${req.method} by ID request received.`);
    const id = req.params.id;
    const sql = 'SELECT * FROM employee WHERE id = ' + id + ';';
    dbConnection.sqlQuery(sql, res);
});

//Update /api/department/
employeeRouter.put('/', (req, res) => {
    console.info(`${req.method} request received.`);
    const id = req.body.id;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const roleId = req.body.role_id;
    const managerId = req.body.manager_id;
    const sql = "UPDATE employee SET first_name = '" + firstName + "', last_name = '" + lastName + "', role_id = " + roleId + ", manager_id = " +
        managerId + " WHERE id = '" + id + "';";
    dbConnection.sqlQuery(sql, res);
});

//Delete /api/department/1
employeeRouter.delete('/:id', (req, res) => {
    console.info(`${req.method} request received.`);
    const id = req.params.id;
    const sql = "DELETE FROM employee WHERE id = '" + id + "';";
    dbConnection.sqlQuery(sql, res);
});

module.exports = employeeRouter;