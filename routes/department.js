const departmentRouter = require('express').Router();
const mysql = require('mysql2');

// create the connection to database
//TODO investigate common architecture for where this goes, index? helpers? here? 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'enddream',
    password: '',
    database: 'employee_cms'
});

// Create /api/department/
departmentRouter.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received.`);
    // Destructuring assignment for the items in req.body
    const { id, name } = req.body;
    // If all the required properties are present
    if (id && name) {
        // Variable for the object we will save and assign values from body
        const newDepartment = {
            id,
            name
        };
        //construct query with data passed in from body
        const sql = "INSERT INTO department (id, name) VALUES (" +
            newDepartment.id + ", '" +
            newDepartment.name +
            "')";
        //run query
        connection.query(sql, function(err, result) {
            //if successful inform user
            if (result) {
                console.log("1 record inserted");
                const response = {
                    status: 'success',
                    body: newDepartment,
                };
                res.json(response);
            } else { // else report error with db insert
                res.json("Error with database insert: " + err);
            }
        });
    } else { //data validation error
        res.json('Error in posting review, name or id were blank');
    }
});

// Read All /api/department/
departmentRouter.get('/', (req, res) => {
    console.info(`${req.method} request received.`);
    connection.query(
        'SELECT * FROM department;',
        function(err, results) {
            if (err) {
                res.json(err);
            } else {
                res.json(results);
            }
        }
    );
});

//Read by ID /api/department/1
departmentRouter.get('/:id', (req, res) => {
    console.info(`${req.method} by ID request received.`);
    const id = req.params.id;
    connection.query(
        'SELECT * FROM department WHERE id = ' + id + ';',
        function(err, results) {
            if (err) {
                res.json(err);
            } else {
                res.json(results);
            }
        }
    );
});

//Update /api/department/
departmentRouter.put('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    res.json('put!');
});

//Delete /api/department/1
departmentRouter.delete('/:id', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    const id = req.params.id;
    res.json('delete!: ' + id);
});

module.exports = departmentRouter;