const mysql = require('mysql2');

//connect to database here with your updated info
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'enddream',
    password: '',
    database: 'employee_cms'
});

//returns an standard object for queries
const results = (status, body) => {
    return {
        wasSuccessful: status,
        body: body
    };
}

//query db
const sqlQuery = (sql, res) => {
    connection.query(sql,
        function(err, queryResults) {
            if (err) {
                res.json(results(false, err));
            } else {
                res.json(results(true, queryResults));
            }
        }
    );
}

module.exports = { results, sqlQuery };