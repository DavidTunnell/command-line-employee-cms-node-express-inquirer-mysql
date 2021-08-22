const departmentRouter = require('express').Router();

// Create
departmentRouter.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    res.json('post!');
});

// Read
departmentRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for feedback`);
    res.json('get!');
});

//Update
departmentRouter.put('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    res.json('put!');
});

//Delete
departmentRouter.delete('/:id', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    const id = req.params.id;
    res.json('delete!: ' + id);
});

module.exports = departmentRouter;