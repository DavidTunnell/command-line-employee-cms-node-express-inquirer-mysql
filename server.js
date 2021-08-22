//THESE MIGHT GO IN OTHER FOLDERS FOR ORGANIZATION
const express = require('express');
const mysql = require('mysql2');
var inquirer = require('inquirer');
const cTable = require('console.table');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);



// // create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'test'
// });

// // simple query
// connection.query(
//     'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//     function(err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available
//     }
// );

// // with placeholder
// connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Page', 45],
//     function(err, results) {
//         console.log(results);
//     }
// );