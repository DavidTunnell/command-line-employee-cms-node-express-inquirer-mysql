const express = require('express');
const api = require('./routes/index.js');

//port will default to environments (aka Heroku) if it exists, else 3001
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//using index.js
app.use('/api', api);

//run server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);