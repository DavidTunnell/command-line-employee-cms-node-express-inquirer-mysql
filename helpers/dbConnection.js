const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'enddream',
    password: '',
    database: 'employee_cms'
});

const results = (status, body) => {
    return {
        wasSuccessful: status,
        body: body
    };
}

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