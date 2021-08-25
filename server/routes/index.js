const express = require('express');
// Import modular routers
const departmentRouter = require('./department');
const roleRouter = require('./role');
const employeeRouter = require('./employee');

//use/initialize express
const app = express();

//API routes available pointing to controller logic
app.use('/department', departmentRouter);
app.use('/role', roleRouter);
app.use('/employee', employeeRouter);

module.exports = app;