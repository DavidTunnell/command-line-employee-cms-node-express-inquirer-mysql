const roleRouter = require('express').Router();

// Create
roleRouter.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    res.json('post!');
});

// Read
roleRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for feedback`);
    res.json('get!');
});

//Update
roleRouter.put('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    res.json('put!');
});

//Delete
roleRouter.delete('/:id', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    const id = req.params.id;
    res.json('delete!: ' + id);
});

module.exports = roleRouter;