const departmentRouter = require('express').Router();
const dbConnection = require('../helpers/dbConnection.js');

// Create /api/department/
departmentRouter.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received.`);
    // Destructuring assignment for the items in req.body
    const { id, name } = req.body;
    // If all the required properties are present
    if (id && name) {
        //construct query with data passed in from body
        const sql = "INSERT INTO department (id, name) VALUES (" + id + ", '" + name + "')";
        //run query using helper import file
        dbConnection.sqlQuery(sql, res);
    } else { //data validation error
        res.json(dbConnection.results(false, "One or more of the parameters passed in was empty/null/undefined."));
    }
});

// Read All /api/department/
departmentRouter.get('/', (req, res) => {
    console.info(`${req.method} request received.`);
    const sql = 'SELECT * FROM department;';
    dbConnection.sqlQuery(sql, res);
});

//Read by ID /api/department/1
departmentRouter.get('/:id', (req, res) => {
    console.info(`${req.method} by ID request received.`);
    const id = req.params.id;
    const sql = 'SELECT * FROM department WHERE id = ' + id + ';';
    dbConnection.sqlQuery(sql, res);
});

//Update /api/department/
departmentRouter.put('/', (req, res) => {
    console.info(`${req.method} request received.`);
    const id = req.body.id;
    const name = req.body.name;
    const sql = "UPDATE department SET name = '" + name + "' WHERE id = '" + id + "';";
    dbConnection.sqlQuery(sql, res);
});

//Delete /api/department/1
departmentRouter.delete('/:id', (req, res) => {
    console.info(`${req.method} request received.`);
    const id = req.params.id;
    const sql = "DELETE FROM department WHERE id = '" + id + "';";
    dbConnection.sqlQuery(sql, res);
});

module.exports = departmentRouter;