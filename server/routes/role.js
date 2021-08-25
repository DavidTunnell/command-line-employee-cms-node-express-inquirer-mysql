const roleRouter = require('express').Router();
const dbConnection = require('../helpers/dbConnection.js');

// Create /api/department/
roleRouter.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received.`);
    // Destructuring assignment for the items in req.body
    const { title, salary, department_id } = req.body;
    // If all the required properties are present
    console.log(title);
    console.log(salary);
    console.log(department_id);
    if (title && salary && department_id) {
        //construct query with data passed in from body
        const sql = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
        const params = [title, salary, department_id];
        //run query using helper import file
        dbConnection.sqlQuery(sql, params, res);
    } else { //data validation error
        res.json(dbConnection.results(false, "One or more of the parameters passed in was empty/null/undefined."));
    }
});

// Read All /api/department/
roleRouter.get('/', (req, res) => {
    console.info(`${req.method} request received.`);
    const sql = `
    SELECT role.id, role.title, role.salary, role.department_id, department.name AS 'department_name'
        FROM role
    LEFT OUTER JOIN department ON 
        role.department_id = department.id
        ORDER BY role.id;`;
    dbConnection.sqlQuery(sql, [], res);
});

//Read by ID /api/department/1
roleRouter.get('/:id', (req, res) => {
    console.info(`${req.method} by ID request received.`);
    const params = [req.params.id];
    const sql = 'SELECT * FROM role WHERE id = ?;';
    dbConnection.sqlQuery(sql, params, res);
});

//Update /api/department/
roleRouter.put('/', (req, res) => {
    console.info(`${req.method} request received.`);
    const params = [req.body.title, req.body.salary, req.body.department_id, req.body.id];
    const sql = "UPDATE role SET title = ?, salary = ?, department_id = ? WHERE id = ?;";
    dbConnection.sqlQuery(sql, params, res);
});

//Delete /api/department/1
roleRouter.delete('/:id', (req, res) => {
    console.info(`${req.method} request received.`);
    const params = [req.params.id];
    const sql = "DELETE FROM role WHERE id = ?;";
    dbConnection.sqlQuery(sql, params, res);
});

module.exports = roleRouter;