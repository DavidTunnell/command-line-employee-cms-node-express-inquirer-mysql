const employeeRouter = require('express').Router();

// Create
employeeRouter.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    res.json('post!');
});

// Read
employeeRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for feedback`);
    res.json('get!');
});

//Update
employeeRouter.put('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    res.json('put!');
});

//Delete
employeeRouter.delete('/:id', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    const id = req.params.id;
    res.json('delete!: ' + id);
});

module.exports = employeeRouter;