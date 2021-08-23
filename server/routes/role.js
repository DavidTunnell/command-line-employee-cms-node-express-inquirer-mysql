const roleRouter = require('express').Router();
const dbConnection = require('../helpers/dbConnection.js');

// Create /api/department/
roleRouter.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received.`);
    // Destructuring assignment for the items in req.body
    const { id, title, salary, department_id } = req.body;
    // If all the required properties are present
    if (id && title && salary && department_id) {
        //construct query with data passed in from body
        const sql = "INSERT INTO role (id, title, salary, department_id) VALUES (" + id + ", '" + title + "', " + salary + ", " + department_id + ")";
        //run query using helper import file
        dbConnection.sqlQuery(sql, res);
    } else { //data validation error
        res.json(dbConnection.results(false, "One or more of the parameters passed in was empty/null/undefined."));
    }
});

// Read All /api/department/
roleRouter.get('/', (req, res) => {
    console.info(`${req.method} request received.`);
    const sql = 'SELECT * FROM role;';
    dbConnection.sqlQuery(sql, res);
});

//Read by ID /api/department/1
roleRouter.get('/:id', (req, res) => {
    console.info(`${req.method} by ID request received.`);
    const id = req.params.id;
    const sql = 'SELECT * FROM role WHERE id = ' + id + ';';
    dbConnection.sqlQuery(sql, res);
});

//Update /api/department/
roleRouter.put('/', (req, res) => {
    console.info(`${req.method} request received.`);
    const id = req.body.id;
    const title = req.body.title;
    const salary = req.body.salary;
    const departmentId = req.body.department_id;
    const sql = "UPDATE role SET title = '" + title + "', salary = '" + salary + "', department_id = '" + departmentId + "' WHERE id = '" + id + "';";
    dbConnection.sqlQuery(sql, res);
});

//Delete /api/department/1
roleRouter.delete('/:id', (req, res) => {
    console.info(`${req.method} request received.`);
    const id = req.params.id;
    const sql = "DELETE FROM role WHERE id = '" + id + "';";
    dbConnection.sqlQuery(sql, res);
});

module.exports = roleRouter;